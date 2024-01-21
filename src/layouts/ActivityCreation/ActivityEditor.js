import React, { useState } from 'react';
import {
    Container,
    Typography,
} from '@material-ui/core';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import RightArrow from "assets/images/rightArrow.svg"
import ActivityEditorFirstScreen from './ActivityEditorFirstScreen'
import ActivityEditorSecondScreen from './ActivityEditorSecondScreen'

const FormEditComponent = () => {
    return (
        <Container>
            <Typography style={{ marginBottom: 20 }} variant='h4'>Create an Activity</Typography>
            <div style={{ display: 'flex', flexDirection: 'column' ,justifyContent:'space-between'}}>
                <ActivityEditorFirstScreen />
                <ActivityEditorSecondScreen />

            </div>
            <Stack direction="row" spacing={2} style={{ marginRight: 300 }} justifyContent='center'>
                <Button variant="contained" style={{ backgroundColor: '#fff', borderRadius: 3 }} >
                    Save as Draft
                </Button>
                <Button variant="contained" style={{ paddingLeft: 30, paddingRight: 30, backgroundColor: '#20C0A0', borderRadius: 3, color: "#FFF", alignItems: 'center' }}>
                    Create
                </Button>
            </Stack>
        </Container>
    );
};

export default FormEditComponent;
