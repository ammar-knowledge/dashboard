import React from 'react';
import { Card, CardContent, Typography, Box, Grid } from '@mui/material';
import PlaceHolder from 'assets/images/marie.jpg';
import Play from 'assets/images/play.svg';
import Link from 'assets/images/link.svg';
import Date from 'assets/images/date.svg'

const Frame = () => {
    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
                fontSize: '16px',
                color: '#545abb',
                fontFamily: 'DM Sans',
                borderRadius: '4px',
                boxShadow: '0px 2px 14px rgba(238, 247, 253, 0.35)',
                border: '1px solid #f0f1f2',
                overflow: 'hidden',
                height: '369px',
            }}
        >
            <Box sx={{ flex: '1 0 250px', position: 'relative', overflow: 'hidden' }}>
                <img
                    src={PlaceHolder}
                    alt="profile"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
                <img
                    src={Play}
                    alt=""
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '61.5px',
                        height: '61.1px',
                        objectFit: 'cover',
                    }}
                />
            </Box>
            <CardContent>
                <Typography variant="h4" fontWeight="500">
                    Quest video dummy title...
                </Typography>
                <Box sx={{ fontSize: '12px', color: '#666', marginTop: '12px', display:'flex',flexDirection:'row', alignItems:'center', }}>
                    <img
                        src={Date}
                        alt=""
                        style={{
                            height: '25 px',
                            width: '25px',
                            objectFit: 'cover',
                            maxWidth: '100%',
                            overflow: 'hidden',
                            maxHeight: '100%',
                        }}
                    />
                    <Typography lineHeight="163.5%">Due Date: 23 Mar 2021</Typography>

                </Box>
                <div
                    style={{
                        position: "absolute",
                        top: "14px",
                        left: "320px",
                        width: "105px",
                        height: "30px",
                        fontSize: "12px",
                        color: "#fff",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            borderRadius: "3px",
                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                            width: "105px",
                            height: "30px",
                        }}
                    />
                    <b
                        style={{
                            position: "absolute",
                            top: "16.67%",
                            left: "32.38%",
                            letterSpacing: "0.29px",
                            lineHeight: "163.5%",
                        }}
                    >
                        2 Sessions
                    </b>
                    <img
                        style={{
                            position: "absolute",
                            top: "3px",
                            left: "6px",
                            width: "24px",
                            height: "24px",
                            overflow: "hidden",
                            objectFit: "cover",
                        }}
                        alt=""
                        src={Link}
                    />
                </div>
            </CardContent>
        </Card>
    );
};

export default Frame;
