import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Typography, Container } from '@mui/material';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import QuestionsList from './QuestionList';
import SearchIcon from '@material-ui/icons/Search';
import { AreaChartOutlined } from '@ant-design/icons'
import Dropable from 'components/EditorComponents/Dropable';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const drawerWidth = '70vw';

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
        width: "60%",
        padding: theme.spacing(2),
    },
    closeButton: {
        color: theme.palette.primary.contrastText,
    },
    formControl: {
        width: '100%',
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
        alignItems: 'start',
        marginBottom:20
    },
    searchTextField: {
        marginRight: theme.spacing(2),
        width: '350px',
        backgroundColor: "#fff"
    },

}));

const initialData = [
    { id: 'item-1', content: 'Item 1' },
    { id: 'item-2', content: 'Item 2' },
    { id: 'item-3', content: 'Item 3' },
];

const CreateAssignmentOverlay = ({ open, onClose, closeOverlay }) => {
    const classes = useStyles();
    const [sliderValue, setSliderValue] = useState([1, 12]);
    const [selectedSubject, setSelectedSubject] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [items, setItems] = useState([]);

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



    const handleDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const newItems = Array.from(items);
        const [reorderedItem] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, reorderedItem);

        setItems(newItems);
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
                    <div className={classes.header}>
                        <div className={classes.title}>Create an Assignment</div>
                        <IconButton className={classes.closeButton} onClick={closeOverlay}>
                            <CloseIcon style={{ color: "#000" }} />
                        </IconButton>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div className={classes.content}>
                            <TextField
                                label="Title"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Description"
                                variant="outlined"
                                fullWidth
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
                        </div>
                        <div style={{ backgroundColor: "#9BA0EF", width: "450px", height: "525px", display: 'flex',flexDirection:'column', padding: 20 }}>
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
                            <DragDropContext onDragEnd={handleDragEnd}>
                                <Container>
                                    <form style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: -30 }}>
                                        <Droppable droppableId="list">
                                            {(provided) => (
                                                <ul {...provided.droppableProps} ref={provided.innerRef} style={{ listStyle: 'none' }}>
                                                    {initialData.map((item, index) => (
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
                                    </form>
                                </Container>
                            </DragDropContext>
                        </div>
                    </div>
                    <div style={{ width: '60%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box className={classes.boxContainer}>
                            Drop Questions
                        </Box>
                        <Box className={classes.boxContainer} onClick={handleOpenModal}>
                            Create New Questions
                        </Box>
                    </div>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div className={classes.buttonGroup}>
                            <Button variant="contained" className={classes.saveDraftButton}>
                                Save as Draft
                            </Button>
                            <Button variant="contained" className={classes.saveButton}>
                                Save
                            </Button>
                        </div>
                    </div>
                </div>
                <Modal
                    open={openModal}
                    onClose={handleModalClose}
                    className={classes.modal}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div className={classes.paper}>
                        {/* Contents of the modal */}
                        <h2 id="simple-modal-title">Select Question</h2>
                        <QuestionsList />
                        <Button variant="contained" color="primary" className={classes.button} onClick={handleModalClose}>
                            Save
                        </Button>
                    </div>
                </Modal>
            </Drawer>
        </div>
    );
};

export default CreateAssignmentOverlay;
