import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import {
    Box,
    Typography,
    TextField,
    Button,
    IconButton,
    Slider,
    Grid,
    Input
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Upload from 'assets/images/upload.svg'
import SkillSubSkill from './SkillSubSkill';
import Add from 'assets/images/add.svg'
import Option from './Option'
import Stack from '@mui/material/Stack';
import axiosHttp from 'utils/axios';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Snackbar, SnackbarContent } from "@mui/material";
import { useNavigate } from 'react-router-dom';
const drawerWidth = '55.5vw';

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    head: {
        width: "100%",
        height: 31,
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: theme.spacing(7),
        display: 'flex',
        justifyContent: 'space-between'
    },
    createQuestion: {
        width: 681,
        alignSelf: 'stretch',
        color: '#3F3F3F',
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: 600,
        lineHeight: 30,
        wordWrap: 'break-word',
    },
    closeIconContainer: {
        width: 30,
        height: 30,
        marginTop: 10,
        borderRadius: "100%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: ' 1px #FF0000 solid',

    },
    closeIcon: {
        position: 'absolute',
    },
    input: {
        width: 562,
        height: 76,
        border: 2,
        borderColor: "#20C0A0",
        filter: 'drop-shadow(px 0px 3px 3px #20C0A0)'
    },
    label: {
        width: '100%',
        color: '#3F3F3F',
        fontSize: 18,
        fontFamily: 'Poppins',
        fontWeight: 500,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    asterisk: {
        color: '#FF0000',
    },
    numberInput: {
        width: "36px",
        height: "36px",
        fontSize: 16,
        color: '#20C0A0',
        border: "1px solid",
        borderRadius: "8px",
        borderColor: "#20C0A0"
    },
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const CreateQuizOverlay = ({ open, onClose, closeOverlay, questions, setQuestions }) => {
    const classes = useStyles();
    const [questionStatement, setQuestionStatement] = useState("")
    const [questionMarks, setQuestionMarks] = useState(0)
    const [sliderValue, setSliderValue] = useState([1, 12]);
    const [selectedSubject, setSelectedSubject] = useState('');
    const [openSkills, setOpenSkills] = useState(false);
    const handleOpen = () => setOpenSkills(true);
    const handleClose = () => setOpenSkills(false);
    const [skill, setSkill] = useState('');
    const [subSkills, setSubSkills] = useState([]);
    const [openSnackbar, setOpenSnackBar] = useState(false)
    const [snackbarMessage, setSnackbarMessage] = useState('')
    const navigate = useNavigate()
    const handleSkillChange = (value) => {
        setSkill(value);
    };

    const handleSubSkillChange = (index, value) => {
        const updatedSubSkills = [...subSkills];
        updatedSubSkills[index] = value;
        setSubSkills(updatedSubSkills);
    };

    const handleAddSubSkill = () => {
        setSubSkills([...subSkills, '']);
    };
    const [correctOption, setCorrectOption] = useState({
        id: 1,
        optionText: "",
        isCorrect: false
    })
    const [hiddenSubSkill, setHiddenSubSkill] = useState()
    const [skillPayload, setSkillPayload] = useState([])

    const [skillsData, setSkillsData] = useState([
        {
            id: 1,
            parentId: null,
            name: 'Programming',
        },
        {
            id: 2,
            parentId: null,
            name: 'Design',

        }, {
            id: 3,
            parentId: 1,
            name: 'JavaScript'
        }, {
            id: 4,
            parentId: 1,
            name: 'Python'
        }, , {
            id: 5,
            parentId: 1,
            name: 'Java'
        }, {
            id: 6,
            parentId: 2,
            name: 'UI/UX Designing'
        },
        , {
            id: 7,
            parentId: 2,
            name: 'Graphic Designing'
        },
        {
            id: 8,
            parentId: 2,
            name: "Web Development"
        }
    ])


    const [completeQuestion, setCompleteQiestion] = useState({
        questionStatement: "",
        questionMarks: 0,
        gradRange: "",
        duration: "",
        options: [],
        skills: []
    })

    const [skillFields, setSkillFields] = useState([
        {
            id: 1,
            Skill: "",
            SubSkill: ""
        }
    ])
    const [optionFields, setOptionFildes] = useState([
        {
            id: 1,
            optionText: "",
            isCorrect: false
        }
    ])

    const AddSkillFields = () => {
        const newSkillField = {
            id: skillFields.length + 1,
            selectedSkill: "",
            selectedSubSkill: ""
        }
        const newArr = [...skillFields, newSkillField]
        setSkillFields(newArr)
    }
    const AddOption = () => {
        const newOptionField = {
            id: optionFields.length + 1,
            optionText: "",
            isCorrect: false
        }
        const newArray = [...optionFields, newOptionField]
        setOptionFildes(newArray)
    }

    const handleRemoveOption = (id) => {
        setOptionFildes(optionFields.filter(item => item.id !== id))
    }

    const submitQuestion = () => {
        if (questionStatement !== "" && optionFields.length > 1 && questionMarks > 0) {
            const optionArray = optionFields.map((option) => {
                if (option.id === correctOption.id) {
                    return { ...option, isCorrect: true }
                } else {
                    return option
                }
            })
            const payloadoptionArray = optionFields.map((option) => {
                if (option.id === correctOption.id) {
                    return {
                        statement: option.optionText,
                        is_correct: true
                    }
                } else {
                    return {
                        statement: option.optionText,
                        is_correct: false
                    }
                }
            })
            const questionPayload = {
                "question": {
                    "statement": questionStatement,
                    "question_options_attributes": payloadoptionArray
                }
            }

            axiosHttp.post('/api/questions', questionPayload).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })

            const finalQuestion = {
                questionStatement: questionStatement,
                questionMarks: questionMarks,
                gradRange: sliderValue[0] + " to " + sliderValue[1],
                duration: "",
                optionFields: optionArray,
                skills: skillFields
            }
            setCompleteQiestion(finalQuestion)
            setQuestions([...questions, finalQuestion])
            closeOverlay()
        }else{
            setSnackbarMessage("Please add Question Statement and Marks ")
            setOpenSnackBar(true)
        }
    }
    const handleSetCorrectOption = (id) => {
        const index = optionFields.findIndex((item) => item.id == id)
        if (index > -1) {
            setCorrectOption(optionFields[index])
        }
    }

    const handleRemovSkillFields = (id) => {
        setSkillFields(skillFields.filter((item) => item.id !== id))
    }
    const handleSelectChange = (event) => {
        setSelectedSubject(event.target.value);
    };
    const handleFileDrop = (event) => {
        event.preventDefault();
        // Handle file upload logic here
        console.log('File dropped:', event.dataTransfer.files[0]);
    };
    const handleFileSelect = (event) => {
        // Handle file selection logic here
        console.log('File selected:', event.target.files[0]);
    };

    const inputRef = useRef(null);

    const handleImageUpload = () => {
        inputRef.current.click();
    };

    const handleCreateSkillSet = () => {
        const subSkillPayload = subSkills.map((subSkill) => {
            return { "name": subSkill }
        })
        const skillsetPayload = {
            "skill": {
                "name": skill,
                "subskills_attributes": subSkillPayload
            }
        }
        console.log(skillsetPayload)
        axiosHttp.post('/api/skills', skillsetPayload).then((res) => {
            console.log(res)
            if (res.data.success) {
                handleClose()
            }
        }).catch((err) => {
            console.log(err)
            if (err.response.status === 401) {
                navigate('/authentication/sign-in')
            }
        })
    }
    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackBar(false);
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        // Handle the file upload logic here, for example:
        // You can use FileReader API to read the uploaded image.
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const imageDataUrl = event.target.result;
                // Perform actions with the uploaded image data (imageDataUrl)
                console.log('Uploaded image:', imageDataUrl);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <div>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                onClose={onClose}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                {/* Content inside the drawer */}
                <div style={{ padding: 20 }}>
                    <Snackbar
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        open={openSnackbar}
                        style={{
                            backgroundColor: '#EB5757',
                            textColor: "#fff"
                        }}
                        autoHideDuration={3000}
                        onClose={handleCloseSnackbar}
                        message={snackbarMessage}
                        key={'top' + 'right'}
                    >
                        <SnackbarContent
                            style={{
                                backgroundColor: '#EB5757',
                                textColor: "#fff"
                            }}
                            message={<span id="client-snackbar">{snackbarMessage}</span>}
                        />
                    </Snackbar>
                    <div className={classes.head}>
                        {/* Create Question */}
                        <Typography variant='h4'>Create Question</Typography>

                        {/* Close Icon */}
                        <Box className={classes.closeIconContainer} onClick={closeOverlay}>
                            <IconButton>
                                <CloseIcon style={{ color: '#FF0000' }} />
                            </IconButton>
                        </Box>
                    </div>
                    <div style={{ paddingTop: 16, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>
                            <label className={classes.label}>
                                <Typography variant='h5'>Statement<span className={classes.asterisk}>*</span></Typography>
                            </label>
                            <br />
                            <TextField
                                className={classes.input}
                                variant="outlined"
                                value={questionStatement}
                                onChange={(event) => setQuestionStatement(event.target.value)}
                                multiline
                                rows={4}
                                placeholder="Enter your statement here..."
                            />
                        </div>
                        <div style={{ marginTop: 70, display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: "100%" }}>
                                <Typography variant='h5' style={{ color: "#20C0A0" }} id="question-marks" gutterBottom>
                                    Marks:
                                </Typography>
                                <Input
                                    className={classes.numberInput}
                                    value={questionMarks}
                                    onChange={(e) => setQuestionMarks(e.target.value)}
                                    type="number"
                                    inputProps={{
                                        min: 0,
                                        style: { textAlign: 'center' },
                                    }}
                                />
                            </div>
                            <div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    ref={inputRef}
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                />
                                <Button variant='outlined' onClick={handleImageUpload} style={{ marginTop: 10, color: "#20C0A0", borderColor: '#20C0A0', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', fontSize: 12 }}><img src={Upload} />Upload</Button>

                            </div>
                        </div>
                    </div>
                    <br />
                    <div style={{ paddingTop: 16, display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'space-between', marginTop: 10 }}>
                        <label className={classes.label}>
                            <Typography variant='h5'>Skill Set<span className={classes.asterisk}>*</span></Typography>
                            <Typography onClick={handleOpen} variant='h6' style={{ marginTop: 10, color: "#20C0A0", borderColor: '#20C0A0', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', maxWidth: '125px', paddingLeft: "10px" }}><img src={Add} style={{ paddingRight: 10 }} />SkillSet</Typography>
                        </label>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', maxHeight: 300, overflowY: skillFields.length > 3 ? 'scroll' : 'hidden', overflowX: 'hidden', width: "100%" }}>
                            {skillFields.map((skills, index) => (<SkillSubSkill skills={skills} key={index} handleRemovSkillFields={handleRemovSkillFields} hiddenSubSkill={hiddenSubSkill} setHiddenSubSkill={setHiddenSubSkill} skillsData={skillsData} setSkillsData={setSkillsData} skillPayload={skillPayload} setSkillPayload={setSkillPayload} />))}
                        </div>

                    </div>
                    <div style={{ paddingTop: 16, display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'space-between' }}>
                        <label className={classes.label}>
                            <Typography variant='h5'>Options<span className={classes.asterisk}>*</span></Typography>
                            <Typography onClick={AddOption} variant='h6' style={{ marginTop: 10, color: "#20C0A0", borderColor: '#20C0A0', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', maxWidth: '125px', paddingLeft: "10px" }}><img src={Add} style={{ paddingRight: 10 }} />Options</Typography>
                        </label>
                        <div style={optionFields.length > 4 ? { maxHeight: 300, overflowY: 'scroll', overflowX: 'hidden', width: "100%" } : { maxHeight: 300, width: "100%" }}>
                            {optionFields.map((option, index) => (<Option key={index} option={option} handleRemoveOption={handleRemoveOption} handleSetCorrectOption={handleSetCorrectOption} correctOption={correctOption} setOptionFildes={setOptionFildes} optionFields={optionFields} />))}
                        </div>
                    </div>
                    <Stack direction="row" spacing={2} style={{ marginTop: 50 }} justifyContent='center'>
                        <Button onClick={closeOverlay} variant="contained" style={{ backgroundColor: '#fff', borderRadius: 3, color: "#000" }} >
                            Cancel
                        </Button>
                        <Button variant="contained" onClick={submitQuestion} style={{ paddingLeft: 30, paddingRight: 30, backgroundColor: '#20C0A0', borderRadius: 3, color: "#FFF", alignItems: 'center' }}>
                            Submit
                        </Button>
                    </Stack>
                </div>
                <div>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={openSkills}
                        onClose={handleClose}
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                            backdrop: {
                                timeout: 500,
                            },
                        }}
                    >
                        <Fade in={openSkills}>
                            <Box sx={style}>
                                <Typography>Create a Skill Set</Typography>
                                <form>
                                    <Box display="flex" flexDirection="column" mb={2}>
                                        <TextField
                                            label="Skill"
                                            value={skill}
                                            onChange={(e) => handleSkillChange(e.target.value)}
                                            fullWidth
                                            variant="outlined"
                                            margin="normal"
                                        />
                                    </Box>
                                    {subSkills.map((item, index) => (
                                        <Box key={index} display="flex" flexDirection="column" mb={2}>
                                            <TextField
                                                label={index === 0 ? 'Sub Skill' : `Sub Skill ${index + 1}`}
                                                value={item}
                                                onChange={(e) => handleSubSkillChange(index, e.target.value)}
                                                fullWidth
                                                variant="outlined"
                                                margin="normal"
                                            />
                                        </Box>
                                    ))}
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Button variant="contained" color="primary" onClick={handleAddSubSkill}>
                                            Add Sub Skill
                                        </Button>
                                        <Button variant="contained" color="primary" onClick={handleCreateSkillSet} style={{ backgroundColor: '#20C0A0', borderRadius: 3, color: "#FFF", alignItems: 'center' }}>
                                            Create Skill Set
                                        </Button>
                                    </div>
                                </form>
                            </Box>
                        </Fade>
                    </Modal>
                </div>
            </Drawer>
        </div>
    );
};

export default CreateQuizOverlay;
