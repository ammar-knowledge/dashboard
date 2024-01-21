import { Divider } from '@mui/material'
import Grid from "@mui/material/Grid";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
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

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const DetailPage = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={12} md={4} lg={4}>
                    <div style={{ padding: 30, backgroundColor: '#fff', width: "100%", height: '83vh' }}>
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
                        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#fff', alignItems: 'center', justifyContent: 'space-between', padding: 10, width: '100%' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#fff', alignItems: 'start', justifyContent: 'start', width: "100%" }}>
                                <Box sx={{ width: '100%' }}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                            <Tab label="Questions" {...a11yProps(0)} />
                                            <Tab label="View Submissions" {...a11yProps(1)} />
                                        </Tabs>
                                    </Box>
                                    <CustomTabPanel value={value} index={0}>
                                        No Questions Found
                                    </CustomTabPanel>
                                    <CustomTabPanel value={value} index={1}>
                                        No Submissions Found
                                    </CustomTabPanel>
                                </Box>

                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default DetailPage