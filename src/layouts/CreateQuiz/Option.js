import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    TextField,
    IconButton,
    Box,
    Grid,
    Paper,
} from '@material-ui/core';
import { Button } from '@mui/material';
import DeleteIcon from '@material-ui/icons/Delete';
import Upload from 'assets/images/upload.svg'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    circle: {
        width: 36,
        height: 36,
        borderRadius: '50%',
        backgroundColor: '#63D3BD',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(2),
    },
    inCorrectCircle: {
        width: 36,
        height: 36,
        border: "1px solid",
        borderColor: "#63D3BD",
        borderRadius: '50%',
        backgroundColor: '#fff',
        color: "#63D3BD",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(2),
    },
    textField: {
        width: 520,
        height: 35,
    },
}));

const Option = ({ option, handleRemoveOption, handleSetCorrectOption,correctOption,setOptionFildes,optionFields }) => {
    const { id, optionMessage, isCorrect } = option
    console.log(option)
    const classes = useStyles();
    const inputRef = useRef(null);
    const [text1, setText1] = useState('');
    const capitalAlphabetsArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const handleTextChange = (event) => {
        setText1(event.target.value);
        const newArr = optionFields.map((item) => {
            if (item.id === id){
                return { ...item, optionText: event.target.value };
            }else{
                return item
            }
        })
        console.log(newArr)
        setOptionFildes(newArr)
    };

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
        <div className={classes.root}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                        <div className={correctOption.id === id ? classes.circle : classes.inCorrectCircle} onClick={() => handleSetCorrectOption(id)}>
                            {capitalAlphabetsArray[id - 1]}
                        </div>
                        <TextField
                            className={classes.textField}
                            variant="outlined"
                            placeholder="Enter Option"
                            value={text1}
                            onChange={(event) => handleTextChange(event)}
                        />
                        <div style={{ marginTop: 20 }} onClick={() => handleRemoveOption(id)} >
                            <IconButton aria-label="delete" color="secondary">
                                <DeleteIcon />
                            </IconButton>
                        </div>

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
                </Grid>
            </Grid>
        </div>
    );
};

export default Option;
