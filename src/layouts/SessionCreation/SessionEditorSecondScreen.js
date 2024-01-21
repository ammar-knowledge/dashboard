import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UploadIcon from 'assets/images/uploadimage.png'
import createCourseImg from 'assets/images/createCourse.png'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import RightArrow from "assets/images/rightArrow.svg"
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { Box, TextField, Typography, Select, MenuItem, InputLabel, IconButton, Container, FormControl } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Dropable from 'components/EditorComponents/Dropable';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useTheme } from '@mui/material/styles';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Grid, Input } from '@material-ui/core';
import ImageUpload from 'assets/images/imageUpload.png'


const useStyles = makeStyles((theme) => ({
    rowContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'space-between',
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
    },
    uploadInput: {
        display: 'none',
    },
    root: {
        backgroundColor: '#F9F9F9',
        padding: '20px',
        borderRadius: '8px',
        width: '700px', // Adjust the width as needed
    },
    nameInputField: {
        marginBottom: '15px',
    },
    imageBox: {
        maxWidth: '620px',
        height: '40px',
        border: '2px dashed #9BA0EF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        cursor: 'pointer',
        marginTop: 30,
        color: "#9BA0EF"
    },
    icon: {
        marginRight: '8px',
    },
    hiddenInput: {
        display: 'none',
    },
    mainBox: {
        width: '650px',
        height: 'fit-content',
        border: '2px solid #ccc',
        padding: '20px',
        borderRadius: '8px',
        marginTop: 20
    },
    inputBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    inputField: {
        marginBottom: '20px',
    },
    deleteIcon: {
        marginLeft: '10px',
        color: '#BFBFBF',
    },
    dropdowns: {
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
    },
    input: {
        display: 'none',
    },
    squareButton: {
        width: '80px',
        height: '80px',
        borderRadius: '8px',
        marginTop: 50
    },
    addBlock: {
        width: '100%',
        height: '40px',
        border: '2px dashed #9BA0EF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        cursor: 'pointer',
        marginTop: 30,
        color: "#9BA0EF"
    },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const quizData = [
    { id: 'item-1', content: 'Item 1' },
    { id: 'item-2', content: 'Item 2' },
    { id: 'item-3', content: 'Item 3' },
];
const questData = [
    { id: 'item-1', content: 'Item 1' },
    { id: 'item-2', content: 'Item 2' },
    { id: 'item-3', content: 'Item 3' },
];
const assinmentData = [
    { id: 'item-1', content: 'Item 1' },
    { id: 'item-2', content: 'Item 2' },
    { id: 'item-3', content: 'Item 3' },
];
const activityData = [
    { id: 'item-1', content: 'Item 1' },
    { id: 'item-2', content: 'Item 2' },
    { id: 'item-3', content: 'Item 3' },
];

const ContontEditorSecondScreen = () => {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [numberOfBlocks, setNumberOfBlocks] = useState(1)
    const [items, setItems] = useState([]);
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const addBlocks = () => {
        setNumberOfBlocks(numberOfBlocks + 1)
    }
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };
    const handleDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const newItems = Array.from(items);
        const [reorderedItem] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, reorderedItem);

        setItems(newItems);
    };


    const handleRemove = (index) => {
        console.log(index)
        setItems(items.splice(index, 1))
        if (items.length == 1) {
            setItems([])
        }

    }
    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        // Handle the file here (e.g., upload it, store it in state, etc.)
        console.log('Selected file:', file);
    };
    const handleBoxClick = () => {
        document.getElementById('fileInput').click();
    };

    const InteractivesDropZone = () => (<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: 'fit-content' }}>
        <Box className={classes.mainBox} >
            <label style={{ width: 760, display: 'flex', flexDirection: 'column', alignItems: 'start', height: 'fit-content' }} className={classes.imageBox}>
                <Droppable droppableId="quiz-droppable">
                    {(provided) => (
                        <div>
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={{
                                    width: '500px',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    minHeight: '39px',
                                    marginBottom: '20px',
                                    padding: '10px',
                                }}
                            >
                                <PhotoCameraIcon className={classes.icon} />
                                <Typography variant="body1">Drop Zone</Typography>
                                {provided.placeholder}
                            </div>
                            <Box style={{ marginTop: 20 }}>
                                {items.map((item, index) => (
                                    <Dropable isDroped={true} key={index} removeItem={handleRemove} index={index} />
                                ))}

                            </Box>
                        </div>
                    )}
                </Droppable>
            </label>
        </Box>
    </div>)

    const Block = () => {
        const [value, setValue] = useState('');
        const [number, setNumber] = useState(1); // Initialize state with 0

        const handleNumberChange = (event) => {
            const value = event.target.value;
            setNumber(parseInt(value) || 0); // Parse input value to an integer and update state
        };
        const classes = useStyles();
        const [selectedImage, setSelectedImage] = useState(null);

        const handleImageChange = (event) => {
            const imageFile = event.target.files[0];
            setSelectedImage(imageFile);
        };
        return (
            <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: 20, paddingTop: 20, paddingLeft: 20, alignItems: 'start', height: '700px', backgroundColor: "#F9F9F9", height: 'fit-content', paddingRight: 20, marginBottom: 20 }}>
                <InteractivesDropZone />
            </div>
        )


    }




    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Container>
                <form style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'space-between', width: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            {Array.from(Array(numberOfBlocks)).map((index) => <Block key={index} />)}
                        </div>
                    </div>
                    <div style={{ backgroundColor: '#C7D2F0', marginLeft: 20, display: 'flex', height: '100vh', width: 550, alignItems: 'start', justifyContent: 'start', paddingTop: 20, flexDirection: 'column',paddingLeft:25,paddingRight:25 }}>
                        <Typography variant='h6' style={{ marginBottom: 20 }}>Courses</Typography>
                        <Droppable droppableId="list">
                            {(provided) => (
                                <ul {...provided.droppableProps} ref={provided.innerRef} style={{ listStyle: 'none' }}>
                                    {quizData.map((item, index) => (
                                        <Draggable key={item.id} draggableId={item.id} index={index}>
                                            {(provided) => (
                                                <li
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <Dropable />
                                                </li>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </ul>
                            )}
                        </Droppable>
                        <Typography style={{ color: '#9BA0EF', fontSize: 14, marginTop: 20 }}>Load More ...</Typography>
                    </div>
                </form>
            </Container>
        </DragDropContext>
    );
};

export default ContontEditorSecondScreen;
