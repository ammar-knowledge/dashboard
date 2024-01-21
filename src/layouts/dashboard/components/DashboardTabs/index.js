import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Analytics from './Analytics'
import Timeline from './Timeline'

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1',marginTop:2,backgroundColor:"#f8f9fd" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Students" value="1" />
            <Tab label="Timeline" value="2" />
            <Tab label="Agenda" value="3" />
            <Tab label="Analytics" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">Students</TabPanel>
        <TabPanel style={{backgroundColor:'#f8f9fd'}} value="2"><Timeline/></TabPanel>
        <TabPanel value="3">Agenda</TabPanel>
        <TabPanel value="4"><Analytics/></TabPanel>
      </TabContext>
    </Box>
  );
}