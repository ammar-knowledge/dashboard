import React from 'react'
import PlaceHolder from 'assets/images/ivana-square.jpg'
import { Typography } from '@mui/material'
import { AccountCircle, AccountCircleOutlined } from '@mui/icons-material'

const index = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: "#d4f0e2" }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start', padding: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={PlaceHolder} style={{ width: 200, height: 200, borderRadius: "100%" }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'flex-start', marginLeft: 20, height: '100%' }}>
                    <Typography style={{ fontWeight: 'bold' }}>
                        John Smith
                    </Typography>
                    <Typography style={{ fontSize: 12,marginTop:20,marginBottom:20 }}>
                        JohnSmith123@Gmail.com
                    </Typography>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'space-betweem' }}>
                            <Typography style={{ fontSize: 14 }}>Age</Typography>
                            <span style={{ backgroundColor: '#fff', borderRadius: '20px', paddingLeft: 5, paddingRight: 5 }}>
                                <Typography style={{ fontSize: 12 }}>
                                    56 Years
                                </Typography>
                            </span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'space-betweem', marginLeft: 20 }}>
                            <Typography style={{ fontSize: 14 }}>Experties</Typography>
                            <span style={{ backgroundColor: '#fff', borderRadius: '20px', paddingLeft: 5, paddingRight: 5 }}>
                                <Typography style={{ fontSize: 12 }}>
                                    Computer Science
                                </Typography>
                            </span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',marginTop:20 }}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <AccountCircle style={{color:"#24c1a6"}}/>
                            <Typography style={{ fontSize: 14, color:'#24c1a6',marginLeft:10 }}>
                                View Profile
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default index