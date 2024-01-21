import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Container,
    Box,
    Slider,
    Typography,
} from '@material-ui/core';
import UploadIcon from 'assets/images/uploadimage.png'
import createCourseImg from 'assets/images/createCourse.png'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import RightArrow from "assets/images/rightArrow.svg"


const useStyles = makeStyles((theme) => ({
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
        justifyContent: 'space-between',
        marginBottom: theme.spacing(2),
        paddingRight:0
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
}));

const ContontEditorFirstScreen = () => {
    const classes = useStyles();

    const handleFileUpload = (event) => {
        // Handle file upload logic here
        console.log(event.target.files[0]);
    };
    const [age, setAge] = useState([3, 20]); // Initial age range from 3 to 20
    const [grade, setGrade] = useState([3, 8]); // Initial grade range from 3rd to 8th

    const handleAgeChange = (event, newValue) => {
        setAge(newValue);
    };

    const handleGradeChange = (event, newValue) => {
        setGrade(newValue);
    }
    const AvailabilityGradeGroup = () => (
        <div style={{ position: 'absolute', left: 25, top: 250 }}>
            <Box style={{ marginTop: 20 }}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Availability Settings</FormLabel>
                    <RadioGroup row aria-label="availability" name="availability">
                        <FormControlLabel
                            value="privateOwner"
                            control={<Radio />}
                            label="Private to Owner"
                        />
                        <FormControlLabel
                            value="privateOrganization"
                            control={<Radio />}
                            label="Private to Organization"
                        />
                        <FormControlLabel
                            value="public"
                            control={<Radio />}
                            label="Available to Public"
                        />
                    </RadioGroup>
                </FormControl>
            </Box>
            <Container>
                <div style={{ marginTop: '20px', width: 200,marginLeft:-20 }}>
                    <Typography id="age-slider" gutterBottom>
                        Age Range
                    </Typography>
                    <Slider
                        value={age}
                        onChange={handleAgeChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="age-slider"
                        min={3}
                        max={20}
                    />
                </div>
                <div style={{ marginTop: '20px', width: 200,marginLeft:-20 }}>
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
            </Container>
        </div>
    )

    return (
        <Container>
            <form className='flex flex-row items-ceneter w-full'>
                {/* Name and Description in Columns */}

                {/* Image Upload and Availability Settings in a Row */}
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
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', width: '54%' }}>
                        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 20, justifyContent: 'space-between', width: '90%' }}>
                            <TextField label="Name" variant="outlined" fullWidth />
                        </Box>
                        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', width: '90%' }}>
                            <TextField label="Description" variant="outlined" multiline rows={4} fullWidth />
                        </Box>
                        {AvailabilityGradeGroup()}
                    </div>


                    <div style={{ backgroundColor: '#C7D2F0', display: 'flex', height: 580, width: 550, alignItems: 'center', justifyContent: 'start', paddingTop: 20, paddingLeft: 30, paddingRight: 30, flexDirection: 'column',marginLeft:100 }}>
                        <Typography>Create An Activity</Typography>
                        <img src={createCourseImg} style={{ marginTop: 10 }} alt='create-course' height={300} width={300} />
                        <Typography style={{ marginTop: 20 }}>
                            Following points need to be kept in mind while creating a activity so that it helps & aide students’ learning experiences.
                        </Typography>
                    </div>
                </Box>
            </form>
        </Container>
    );
};

export default ContontEditorFirstScreen;
