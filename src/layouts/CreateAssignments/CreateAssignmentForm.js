import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Typography, Grid, ButtonBase } from '@mui/material';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import SearchIcon from '@material-ui/icons/Search';
import { AreaChartOutlined } from '@ant-design/icons';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import UploadIcon from 'assets/images/uploadimage.png'
import Backdrop from '@material-ui/core/Backdrop';
import CreateQuestion from './CreateQuestion'
import AssignmentQuestion from './AssignmentQuestion';
import axiosHttp from 'utils/axios';
import DurationPicker from "react-duration-picker";
import AddedQuestion from './AddedQuestion';
import { InputAdornment, Menu } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { getInteractiveTypeId } from 'utils/interactiveTypes';
import { Snackbar, SnackbarContent } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const drawerWidth = '100vw';

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    modal: {
        display: 'flex',
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        width: "40vw",
        height: "70vh"
    },

    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(2),
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
    drawerPaper: {
        width: drawerWidth,
    },

    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    closeButton: {

        color: "#000"
    },
    title: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
    },
    content: {
        width: "60%",
    },
    closeButton: {
        color: theme.palette.primary.contrastText,
    },
    formControl: {
        width: '45%',
        backgroundColor: "#fff",
        marginBottom: 30,
    },
    slider: {
        marginTop: theme.spacing(2),
    },
    videoUploadSection: {
        width: '150px',
        height: '150px',
        border: '2px dashed #9BA0EF',
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        margin: '10',
    },
    uploadIcon: {
        fontSize: '48px',
        color: '#9BA0EF',
    },
    saveButton: {
        backgroundColor: '#20C0A0',
        color: 'black',
        '&:hover': {
            backgroundColor: '#1A8070',
        },
        marginLeft: 10
    },
    saveDraftButton: {
        color: '#000',
        backgroundColor: 'transparent',
        border: '1px solid #FFF',
        '&:hover': {
            backgroundColor: '#FFF',
            color: 'black',
        },
    },
    inputSmall: {
        width: 100,
        height: 80,
        marginRight: 5,
        '& input': {
            fontSize: '0.875rem',
        },
    },
    boxContainer: {
        width: '48%',
        height: '100px',
        border: '2px dashed #9BA0EF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        marginBottom: 20
    },
    paper: {
        width: '100%',
        height: '100%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        outline: 'none',
    },
    searchRoot: {
        display: 'flex',
        alignItems: 'center',
    },
    searchTextField: {
        marginRight: theme.spacing(2),
        width: '350px',
        backgroundColor: "#fff",
        borderRadius: '8px'
    },
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
        justifyContent: 'start',
        marginBottom: theme.spacing(2),
    },
    columnContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: theme.spacing(2),
    },
    uploadBox: {
        width: '200px',
        height: '200px',
        border: '2px dashed #ddd',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        backgroundColor: "#fff"
    },
    uploadInput: {
        display: 'none',
    },
    redStar: {
        color: 'red',
        display: 'inline',
    },
    icon: {
        fontSize: 19,
        marginRight: theme.spacing(1),
        color: '#9BA0EF',
        cursor: 'pointer'
    },
    backdrop: {
        zIndex: 100,
        color: '#fff',
        backdropFilter: 'blur(5px)',
    },
}));

const CreateAssignmentForm = () => {
    const classes = useStyles();
    const [sliderValue, setSliderValue] = useState([1, 12]);
    const [selectedSubject, setSelectedSubject] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [questions, setQuestions] = useState([])
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [addedQuestions, setAddedQuestions] = useState([])
    const [duration, setDuration] = useState({})
    const [durationFieldValue, setDurationFieldValue] = useState('')
    const [openSnackbar, setOpenSnackBar] = useState(false)
    const [snackbarMessage, setSnackbarMessage] = useState('')
    const navigate = useNavigate()

    const handleSubjectChange = (event) => {
        setSelectedSubject(event.target.value);
    };
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedDuration, setSelectedDuration] = useState('');

    const handleDurationClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleDurationSelect = (duration) => {
        setSelectedDuration(duration);
        setAnchorEl(null);
    };
    const subjects = ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4'];
    const handleFileUpload = (event) => {
        // Handle file upload logic here
        console.log(event.target.files[0]);
    };
    const [grade, setGrade] = useState([3, 8]); // Initial grade range from 3rd to 8th

    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const toggleOverlay = () => {
        setIsOverlayOpen(!isOverlayOpen);
    };
    const closeOverlay = () => {
        setIsOverlayOpen(false)
    }
    const handleGradeChange = (event, newValue) => {
        setGrade(newValue);
    }
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch(searchTerm);
    };

    const handleSearch = (searchTerm) => {
        console.log(searchTerm)
    }
    const handleSliderChange = (event, newValue) => {
        setSliderValue(newValue);
    };
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleModalClose = () => {
        setOpenModal(false);
    };

    const handleSelectChange = (event) => {
        setSelectedSubject(event.target.value);
    };

    useEffect(() => {
        axiosHttp.get('/api/questions').then((res) => {
            console.log(res)
            if (res.data.success) {
                setQuestions(res.data.questions)
            }
        }).catch((err) => {
            console.log(err)
            if (err.response.status === 401) {
                navigate('/authentication/sign-in')
            }
        })
        console.log(questions)
    }, [addedQuestions])

    const AddQuestionToQuiz = (id) => {
        const index = questions.findIndex((question) => question.id === id)
        if (index > -1) {
            const newArr = [...addedQuestions, questions[index]]
            setAddedQuestions(newArr)
        }
    }

    const removeQuestionFromQuiz = (id) => {
        const index = questions.findIndex((question) => question.id === id)
        if (index > -1) {
            const newArr = questions
            newArr.splice(index, 1)
            setAddedQuestions(newArr)
        }
        console.log(questions)
    }
    const handleImageUpload = (e) => {
        // Handle image upload logic here
        const file = e.target.files[0];
        // You can perform further actions with the uploaded file, like sending it to a server or displaying it
        console.log('Uploaded file:', file);
    };


    const createAssignment = () => {
        const questionIds = addedQuestions.map((question) => question.id)
        const intetactiveId = getInteractiveTypeId('assignment')
        let duration = 0
        if (duration.minutes || duration.seconds) {
            const { hours, minutes, seconds } = duration
            duration = hours * 60 + minutes
        } else {
            duration = 60
        }
        if (title !== '' || description !== '') {
            const payload = {
                "interactive": {
                    "title": title,
                    "interactive_type_id": intetactiveId,
                    "description": description,
                    "from_grade": grade[0],
                    "to_grade": grade[1],
                    "duration": duration,
                    "question_ids": questionIds
                }
            }
            console.log(payload)

            axiosHttp.post('/api/interactives', payload).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
                if (err.response.status === 401) {
                    navigate('/authentication/sign-in')
                }
            })
        } else {
            setSnackbarMessage('Please add title and description')
            setOpenSnackBar(true)
        }


    }
    const handleCloseDuration = () => {
        if (duration.minutes || duration.seconds) {
            const { hours, minutes, seconds } = duration
            setDurationFieldValue(`${hours} H, ${minutes} M`)
        }
        setAnchorEl(null)
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackBar(false);
    };
    const onChange = (duration) => {
        const { hours, minutes, seconds } = duration;
        console.log(duration);
        setDuration(duration)
    };
    return (
        <div>
            <Backdrop className={classes.backdrop} open={isOverlayOpen} >
            </Backdrop>
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                <div className={classes.header}>
                    <div className={classes.title}>Create an Assignment</div>
                </div>
                <div >
                    <Snackbar
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        open={openSnackbar}
                        style={{
                            backgroundColor: '#EB5757',
                            textColor: "#fff"
                        }}
                        autoHideDuration={3000}
                        onClose={handleClose}
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
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'space-between' }}>
                        <div className={classes.content}>
                            <Box className={classes.rowContainer}>
                                {/* Image Upload */}
                                <input
                                    accept="image/*"
                                    className={classes.uploadInput}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    onChange={handleFileUpload}
                                />
                                <label htmlFor="contained-button-file">
                                    <Box className={classes.uploadBox} component="div">
                                        <img src={UploadIcon} alt='upload-icon' />
                                        <div style={{ width: 125 }}>
                                            <Typography style={{ fontSize: 12 }}>
                                                Formats PNG, JPG, Bitmap
                                                Max size 2 MB
                                            </Typography>
                                        </div>
                                    </Box>
                                </label>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 20, justifyContent: 'space-between', width: '90%' }}>
                                        <TextField label="Name" value={title} onChange={(event) => setTitle(event.target.value)} variant="outlined" fullWidth style={{ backgroundColor: "#FFF" }} />
                                    </Box>
                                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', width: '90%' }}>
                                        <TextField label="Description" variant="outlined" value={description} onChange={(event) => setDescription(event.target.value)} multiline rows={4} fullWidth style={{ backgroundColor: "#FFF" }} />
                                    </Box>
                                </div>
                            </Box>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div style={{ marginTop: 20, width: "100%" }}>
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <Select
                                            labelId="subject-select-label"
                                            id="subject-select"
                                            value={selectedSubject}
                                            onChange={handleSelectChange}
                                            displayEmpty
                                        >
                                            <MenuItem value="" disabled>
                                                Add Subject
                                            </MenuItem>
                                            <MenuItem value={'subject1'}>Subject 1</MenuItem>
                                            <MenuItem value={'subject2'}>Subject 2</MenuItem>
                                            {/* Add more subjects as needed */}
                                        </Select>
                                    </FormControl>
                                </div>
                                <div>
                                    <TextField
                                        label="Duration"
                                        variant='outlined'
                                        style={{ backgroundColor: "#fff" }}
                                        value={durationFieldValue}
                                        onClick={handleDurationClick}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccessTimeIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />

                                    <Menu
                                        anchorEl={anchorEl}
                                        open={Boolean(anchorEl)}
                                        onClose={handleCloseDuration}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                    >
                                        <DurationPicker
                                            onChange={onChange}
                                            initialDuration={{ hours: 1, minutes: 0, }}
                                            maxHours={12}
                                            noHours={false}
                                            noSeconds={true}
                                        />
                                    </Menu>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', width: '70%', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div style={{ width: "30%" }}>
                                    <Typography id="grade-slider" gutterBottom>
                                        Grade Range
                                    </Typography>
                                    <Slider
                                        value={grade}
                                        onChange={handleGradeChange}
                                        valueLabelDisplay="auto"
                                        aria-labelledby="grade-slider"
                                        min={3}
                                        max={8}
                                        step={1}
                                    />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', padding: 20, width: "100%", alignItems: 'start', justifyContent: 'flex-start', boxShadow: '0px 2px 14px rgba(238, 247, 253, 0.35)', border: '1px solid', borderRadius: '12px', marginBottom: 30 }}>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', border: '3px solid #dddfff', padding: 10, borderRadius: "12px" }}>
                                    <Typography style={{ fontSize: '12px', fontWeight: 'bold' }}>Question Statements and Details</Typography>
                                    <Typography style={{ fontSize: '12px', fontWeight: 'bold' }}>Actions</Typography>
                                </div>
                                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', }}>
                                    {
                                        addedQuestions.map((question, index) => <AddedQuestion key={index} question={question} removeQuestionFromQuiz={removeQuestionFromQuiz} AddQuestionToQuiz={AddQuestionToQuiz} />)
                                    }
                                </div>
                            </div>

                        </div>
                        <div style={{ backgroundColor: "#9BA0EF", width: "450px", height: "525px", padding: 20, borderRadius: "8px" }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                                    <Typography>Question Bank</Typography>
                                    <Button onClick={toggleOverlay} variant='contained' style={{ backgroundColor: "#20C0A0" }}>New Question</Button>
                                </div>
                                <div style={{ marginTop: 20 }}>
                                    <form className={classes.searchRoot} onSubmit={handleSubmit}>
                                        <TextField
                                            className={classes.searchTextField}
                                            variant="outlined"
                                            placeholder="Search..."
                                            value={searchTerm}
                                            onChange={handleChange}
                                        />
                                        <IconButton type="submit" aria-label="search">
                                            <SearchIcon />
                                        </IconButton>
                                    </form>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: "100%" }}>
                                    {
                                        questions && questions.length > 1 && questions.map((question, index) => <AssignmentQuestion key={index} added={true} question={question} removeQuestionFromQuiz={removeQuestionFromQuiz} AddQuestionToQuiz={AddQuestionToQuiz} />)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div className={classes.buttonGroup}>
                        <Button variant="contained" className={classes.saveDraftButton}>
                            Save as Draft
                        </Button>
                        <Button variant="contained" onClick={createAssignment} className={classes.saveButton}>
                            Save
                        </Button>
                    </div>
                </div>
            </div>
            <CreateQuestion open={isOverlayOpen} onClose={toggleOverlay} closeOverlay={closeOverlay} questions={questions} setQuestions={setQuestions} />
        </div >
    );
};

export default CreateAssignmentForm;
