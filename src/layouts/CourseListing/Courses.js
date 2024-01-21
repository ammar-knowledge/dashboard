import React from 'react'
import CourseListing from './CourseListing'
import Box from '@material-ui/core/Box';
import { Typography } from '@mui/material'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { Link, useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


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

const Courses = () => {
  const classes = useStyles();
  const navigate = useNavigate()
  const createCourses = () => {
    navigate('/content/course/create')
  }
  return (
    <div>
      <div style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography>Course Listing</Typography>
        <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} onClick={createCourses}>
          <AddCircleIcon className={classes.icon} />
          <Typography variant="16" className={classes.icon}>
            Add a New Course
          </Typography>
        </Box>
      </div>
      <CourseListing />
    </div>
  )
}

export default Courses