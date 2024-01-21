import React from 'react';
import { Box, Typography, IconButton, Select, MenuItem } from '@mui/material';
import { ExpandMore as ExpandMoreIcon, Settings as SettingsIcon, AccessTime as ClockIcon, People as PeopleIcon, Event as EventIcon } from '@mui/icons-material';
import CloseIcon from "assets/images/close.svg"
const CustomBox = (props) => {
    const { isDroped ,removeItem ,index,item} = props
    console.log(item)
    const handleRemove = () => {
        console.log(index)
        removeItem(index)
    }
    const InnerBox = () => (
        <>
            <Box width={390} border="1px solid #ccc backgroundCoz" style={{ backgroundColor: '#FFF', marginBottom: 10, width: isDroped ? '100%' : 'full' }} p={2} borderRadius={2}>
                {/* Row with Title, Dropdown, and Gear Icon */}
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Box display="flex" alignItems="center">
                        <Typography variant="h6">{item ? item.title : 'Title'}</Typography>
                        <IconButton style={{ color: '#9BA0EF' }}>
                            <SettingsIcon />
                        </IconButton>
                    </Box>
                </Box>

                {/* Three items below the row */}
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    {/* Item 1 - Clock Icon */}
                    <Box display="flex" alignItems="center" flexDirection={'row'}>
                        <ClockIcon style={{ color: '#BFBFBF' }} />
                        <Typography ml={1} style={{ fontSize: 12 }}>1 Hr</Typography>
                    </Box>

                    {/* Item 2 - People Icon */}
                    <Box display="flex" alignItems="center" flexDirection={'row'}>
                        <PeopleIcon style={{ color: '#BFBFBF' }} />
                        <Typography ml={1} style={{ fontSize: 12 }} >3 Persons</Typography>
                    </Box>

                    {/* Item 3 - Calendar Icon */}
                    <Box display="flex" alignItems="center" flexDirection={'row'}>
                        <EventIcon style={{ color: '#BFBFBF' }} />
                        <Typography ml={1} style={{ fontSize: 12 }}>7 - 12 years</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
    return isDroped ? <Box border="1px solid #ccc backgroundCoz" style={{ backgroundColor: '#FFF', marginBottom: 10, width: 'full', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} px={2} borderRadius={2}>
        <Box width={340} border="1px solid #ccc backgroundCoz" style={{ backgroundColor: '#FFF', marginBottom: 10, }} borderRadius={2}>
            {/* Row with Title, Dropdown, and Gear Icon */}
            <Box display="flex" alignItems="start" justifyContent="space-between" >

                <Box display="flex" alignItems="center">
                    <Typography variant="h6">Basic Algebra</Typography>
                    <IconButton style={{ color: '#9BA0EF' }}>
                        <SettingsIcon />
                    </IconButton>
                </Box>
            </Box>

            {/* Three items below the row */}
            <Box display="flex" alignItems="center" justifyContent="space-between">
                {/* Item 1 - Clock Icon */}
                <Box display="flex" alignItems="center" flexDirection={'row'}>
                    <ClockIcon style={{ color: '#BFBFBF' }} />
                    <Typography ml={1} style={{ fontSize: 12 }}>1 Hr</Typography>
                </Box>

                {/* Item 2 - People Icon */}
                <Box display="flex" alignItems="center" flexDirection={'row'}>
                    <PeopleIcon style={{ color: '#BFBFBF' }} />
                    <Typography ml={1} style={{ fontSize: 12 }} >3 Persons</Typography>
                </Box>

                {/* Item 3 - Calendar Icon */}
                <Box display="flex" alignItems="center" flexDirection={'row'}>
                    <EventIcon style={{ color: '#BFBFBF' }} />
                    <Typography ml={1} style={{ fontSize: 12 }}>7 - 12 years</Typography>
                </Box>
            </Box>
        </Box>
        <img src={CloseIcon} alt='close' onClick={handleRemove} />
    </Box > : (
        <InnerBox />
    );
};

export default CustomBox;
