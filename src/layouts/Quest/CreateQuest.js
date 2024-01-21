import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Typography, Input } from '@mui/material';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import Button from '@material-ui/core/Button';
import { getInteractiveTypeId } from 'utils/interactiveTypes';
import axiosHttp from 'utils/axios';
import DurationPicker from "react-duration-picker";
import { InputAdornment, Menu } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Snackbar, SnackbarContent } from "@mui/material";
import { useNavigate } from 'react-router-dom';
const drawerWidth = '50vw';

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
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
        padding: theme.spacing(2),
    },
    closeButton: {

        color: "#000"
    },
    title: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
    },
    content: {
        padding: theme.spacing(2),
        width: "100%"
    },
    closeButton: {
        color: theme.palette.primary.contrastText,
    },
    formControl: {
        width: '100%',
        marginBottom: 30,
    },
    slider: {
        width: "30%",
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

const CreateQuizOverlay = ({ open, onClose, closeOverlay }) => {
    const classes = useStyles();
    const [sliderValue, setSliderValue] = useState([1, 12]);
    const [selectedSubject, setSelectedSubject] = useState('');
    const [marks, setMarks] = useState(0)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState({})
    const [durationFieldValue, setDurationFieldValue] = useState('')
    const [anchorEl, setAnchorEl] = useState(null);
    const [openSnackbar, setOpenSnackBar] = useState(false)
    const [snackbarMessage, setSnackbarMessage] = useState('')
    const navigate = useNavigate()

    const handleSliderChange = (event, newValue) => {
        setSliderValue(newValue);
    };


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
    const handleDurationClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseDuration = () => {
        if (duration.minutes || duration.seconds) {
            const { hours, minutes, seconds } = duration
            setDurationFieldValue(`${hours} H, ${minutes} M`)
        }
        setAnchorEl(null)
    }

    const onChange = (duration) => {
        const { hours, minutes, seconds } = duration;
        console.log(duration);
        setDuration(duration)
    };

    const handleCreateQuest = () => {
        const interactivId = getInteractiveTypeId('quest')
        console.log(interactivId)
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
                    "interactive_type_id": interactivId,
                    "description": description,
                    "from_grade": sliderValue[0],
                    "to_grade": sliderValue[1],
                    "duration": duration,
                }
            }
            console.log(payload)
            axiosHttp.post('/api/interactives', payload).then((res) => {
                console.log(res)
                if (res.data.success) {
                    closeOverlay()
                }
            }).catch((err) => {
                console.log(err)
                if(err.response.status === 401){
                    navigate('/authentication/sign-in')
                }
            })
        } else {
            setSnackbarMessage('Please add title and description')
            setOpenSnackBar(true)
        }

    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackBar(false);
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
                <div style={{ padding: '20px' }}>
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
                    <div className={classes.header}>
                        <div className={classes.title}>Create a Quest</div>
                        <IconButton className={classes.closeButton} onClick={closeOverlay}>
                            <CloseIcon style={{ color: "#000" }} />
                        </IconButton>
                    </div>
                    <div className={classes.content}>
                        <TextField
                            label="Title"
                            variant="outlined"
                            fullWidth
                            value={title}
                            onChange={(event => setTitle(event.target.value))}
                            margin="normal"
                        />
                        <TextField
                            label="Description"
                            variant="outlined"
                            fullWidth
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                            multiline
                            rows={5}
                            margin="normal"
                        />
                        <FormControl variant="outlined" className={classes.formControl} style={{ marginTop: 20 }}>
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
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                            <div className={classes.slider}>
                                <Typography id="discrete-slider" gutterBottom>
                                    Grade
                                </Typography>
                                <Slider
                                    value={sliderValue}
                                    onChange={handleSliderChange}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    min={1}
                                    max={12}
                                    marks={[{ value: 1, label: '1' }, { value: 12, label: '12' }]}
                                />
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
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <Typography variant='h5' style={{ color: "#20C0A0", marginTop: 10, marginRight: 10 }} id="question-marks" gutterBottom>
                                    Marks:
                                </Typography>
                                <Input
                                    className={classes.numberInput}
                                    value={marks}
                                    onChange={(e) => setMarks(e.target.value)}
                                    type="number"
                                    inputProps={{
                                        min: 0,
                                        style: { textAlign: 'center' },
                                    }}
                                />
                            </div>
                        </div>
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div
                                className={classes.videoUploadSection}
                                onDrop={handleFileDrop}
                                onDragOver={(event) => event.preventDefault()}
                            >
                                <input
                                    type="file"
                                    id="video-upload"
                                    style={{ display: 'none' }}
                                    onChange={handleFileSelect}
                                />
                                <label htmlFor="video-upload">
                                    <CloudUploadIcon className={classes.uploadIcon} />
                                </label>
                                <Typography style={{ fontSize: 12, padding: 5 }}>Click or drag and drop videos here</Typography>

                            </div>
                            <div className={classes.buttonGroup}>
                                <Button variant="contained" className={classes.saveDraftButton}>
                                    Save as Draft
                                </Button>
                                <Button variant="contained" onClick={handleCreateQuest} className={classes.saveButton}>
                                    Save
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </Drawer>
        </div>
    );
};

export default CreateQuizOverlay;
