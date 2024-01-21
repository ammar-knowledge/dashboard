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

    
    const [correctOption, setCorrectOption] = useState({
        id: 1,
        optionText: "",
        isCorrect: false
    })

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
            </Drawer>
        </div>
    );
};

export default CreateQuizOverlay;
