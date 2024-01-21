import { Divider } from '@mui/material'
import Grid from "@mui/material/Grid";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    width:'100%',
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const DetailPage = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={12} md={4} lg={4}>
                    <div style={{ padding: 30, backgroundColor: '#fff', width: "100%" ,height:'83vh'}}>
                        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#fff', alignItems: 'start', justifyContent: 'space-between', padding: 10 }}>
                            <div>
                                <Typography style={{ fontSize: '14px', fontWeight: 'bold' }}>Quiz Name</Typography>
                                <Typography style={{ fontSize: '12px' }}>Science</Typography>
                            </div>
                            <div style={{ marginTop: 20, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                <div>
                                    <Typography style={{ fontSize: '14px', fontWeight: 'bold' }}>Grade</Typography>
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'space-between' }}>
                                        <span style={{ padding: 2, backgroundColor: "#EDEEFE", borderRadius: "8px" }}>
                                            <Typography style={{ fontSize: '12px', marginRight: 5 }}>Grade 1</Typography>
                                        </span>
                                        <Typography style={{ fontSize: '12px', marginLeft: 5 }}>to</Typography>
                                        <span style={{ padding: 2, backgroundColor: "#EDEEFE", borderRadius: "8px", marginLeft: 5 }}>
                                            <Typography style={{ fontSize: '12px' }}>Grade 12</Typography>
                                        </span>

                                    </div>
                                </div>
                                <div>
                                    <Typography style={{ fontSize: '14px', fontWeight: 'bold' }}>Subjects</Typography>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'space-evenly', width: '120px' }}>
                                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                            <span style={{ padding: 2, backgroundColor: "#EDEEFE", borderRadius: "8px" }}>
                                                <Typography style={{ fontSize: '12px', marginRight: 5 }}>Science</Typography>
                                            </span>
                                            <span style={{ padding: 2, backgroundColor: "#EDEEFE", borderRadius: "8px", marginLeft: 5 }}>
                                                <Typography style={{ fontSize: '12px' }}>Agriculture</Typography>
                                            </span>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                            <span style={{ padding: 2, backgroundColor: "#EDEEFE", borderRadius: "8px" }}>
                                                <Typography style={{ fontSize: '12px', marginRight: 5 }}>Science</Typography>
                                            </span>
                                            <span style={{ padding: 2, backgroundColor: "#EDEEFE", borderRadius: "8px", marginLeft: 5 }}>
                                                <Typography style={{ fontSize: '12px' }}>Agriculture</Typography>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div style={{ marginTop: 20 }}>
                                <Typography style={{ fontSize: '14px', fontWeight: 'bold' }}>Associated with Session</Typography>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'space-evenly', width: '120px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <span style={{ padding: 2, backgroundColor: "#EDEEFE", borderRadius: "8px" }}>
                                            <Typography style={{ fontSize: '12px', marginRight: 5 }}>Science</Typography>
                                        </span>
                                        <span style={{ padding: 2, backgroundColor: "#EDEEFE", borderRadius: "8px", marginLeft: 5 }}>
                                            <Typography style={{ fontSize: '12px' }}>Agriculture</Typography>
                                        </span>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <span style={{ padding: 2, backgroundColor: "#EDEEFE", borderRadius: "8px" }}>
                                            <Typography style={{ fontSize: '12px', marginRight: 5 }}>Science</Typography>
                                        </span>
                                        <span style={{ padding: 2, backgroundColor: "#EDEEFE", borderRadius: "8px", marginLeft: 5 }}>
                                            <Typography style={{ fontSize: '12px' }}>Agriculture</Typography>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={8} lg={8}  >
                    <div style={{ padding: 20, backgroundColor: '#e5e7eb', width: "100%" }}>
                        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#fff', alignItems: 'center', justifyContent: 'space-between', padding: 10,width:'100%' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#fff', alignItems: 'start', justifyContent: 'start', width: "100%" }}>
                                <Typography>Questions</Typography>
                                <Divider style={{ width: "100%", color: "#000" }}></Divider>
                                <div style={{ padding: 20,width:'100%' }}>
                                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                            <Typography>Question 1</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div>

                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                            <Typography>Question 2</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div style={{ padding: 10, display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'space-between' }}>
                                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'space-between',borderColor:'#20C0A0',border:'1px solid #20C0A0',padding:10,width:'100%' }}>
                                                    <span style={{ width: '50px', height: '50px', borderRadius: '100%', backgroundColor: '#20C0A0' }}>
                                                        <Typography style={{ marginTop: '7px', marginLeft: "17px" }}>A</Typography>
                                                    </span>

                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'space-between',marginTop:20,borderColor:'#20C0A0',border:'1px solid #20C0A0',padding:10,width:'100%' }}>
                                                    <span style={{ width: '50px', height: '50px', borderRadius: '100%', backgroundColor: '#20C0A0' }}>
                                                        <Typography style={{ marginTop: '7px', marginLeft: "17px" }}>B</Typography>
                                                    </span>

                                                </div>
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                            <Typography>Question 3</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div>

                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default DetailPage