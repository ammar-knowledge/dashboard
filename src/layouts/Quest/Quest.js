import { Typography } from '@mui/material'
import React, { useState } from 'react'
import Box from '@material-ui/core/Box';
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { makeStyles } from '@material-ui/core/styles';
import CreateQuizOverlay from './CreateQuest';
import Backdrop from '@material-ui/core/Backdrop';
import QuestListing from './QuestListing'
const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: 19,
    marginRight: theme.spacing(1),
    color: '#9BA0EF',
    cursor: 'pointer'
  },
  backdrop: {
    zIndex: 100,
    color: '#fff',
    backdropFilter: 'blur(5px)',
},
}));
const Quiz = () => {
  const classes = useStyles();
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };
  const closeOverlay = () => {
    setIsOverlayOpen(false)
  }
  return (
    <>
      <Backdrop className={classes.backdrop} open={isOverlayOpen} >
      </Backdrop>
      <div style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop:20 }}>
        <Typography>Quest Listing</Typography>
        <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} onClick={toggleOverlay}>
          <AddCircleIcon className={classes.icon} />
          <Typography variant="16" className={classes.icon}>
            Add a New Quest
          </Typography>
        </Box>
      </div>
      <div>
        <QuestListing isOverlayOpen={isOverlayOpen}/>
      </div>
      <CreateQuizOverlay open={isOverlayOpen} onClose={toggleOverlay} closeOverlay={closeOverlay} />
    </>

  )
}

export default Quiz