import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useMaterialUIController, setFilterDrawer } from "context";
import { Typography } from '@mui/material';
import SearchFilter from './Select'
import SliderFilter from './Slider'
import RadioFilter from './Radio'
import CheckboxFilter from './Checkbox'

export default function TemporaryDrawer({ role, content }) {

  const [controller, dispatch] = useMaterialUIController();

  const { filterDrawer,resetFilter} = controller

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, ['right']: open });
  };

  const clearFilters = () => {
    console.log("clear all filters")
    //clear all filters here
  }

  React.useEffect(() => {
    if(resetFilter){
      clearFilters()
    }
  },[resetFilter])

  const closeFilterDrawer = () => setFilterDrawer(dispatch, false)

  const list = () => (
    <Box
      sx={{ width: 300, padding: "20px" }}
      role="presentation"
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'space-between' }}>
        <Typography style={{ fontSize: 24, fontWeight: 'bolder' }}>Filters</Typography>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'space-between', marginTop: 20 }}>
          {content.map((data,index) => {
            switch (data.type) {
              case 'select':
                return  <SearchFilter data={data}/>
                break;
              case 'slider':
                return <SliderFilter data={data}/>
                break;
              case 'checkbox':
                return <CheckboxFilter data={data}/>
                break;
              default:
                break;
            }
          })}
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      <Drawer
        anchor={'right'}
        PaperProps={{
          sx: { width: "30%" },
        }}
        open={filterDrawer}
        onClose={closeFilterDrawer}
      >
        {list()}
      </Drawer>
    </div>
  );
}