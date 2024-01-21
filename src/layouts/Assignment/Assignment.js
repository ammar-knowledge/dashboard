import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Box from '@material-ui/core/Box';
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { makeStyles } from '@material-ui/core/styles';
import CreateAssignmentOverlay from './CreateAssignment';
import Backdrop from '@material-ui/core/Backdrop';
import { useNavigate } from 'react-router-dom';
import axiosHttp from 'utils/axios';
import { getInteractiveTypeId } from 'utils/interactiveTypes';
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import MDTypography from "components/MDTypography";
import BookingCard from "examples/Cards/BookingCard";
import booking1 from "assets/images/home-decor-2.jpg";
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

const actionButtons = (
  <>
    <Tooltip title="Refresh" placement="bottom">
      <MDTypography
        variant="body1"
        color="primary"
        lineHeight={1}
        sx={{ cursor: "pointer", mx: 3 }}
      >
        <Icon color="inherit">refresh</Icon>
      </MDTypography>
    </Tooltip>
    <Tooltip title="Edit" placement="bottom">
      <MDTypography variant="body1" color="info" lineHeight={1} sx={{ cursor: "pointer", mx: 3 }}>
        <Icon color="inherit">edit</Icon>
      </MDTypography>
    </Tooltip>
  </>
);
const Assignment = () => {
  const classes = useStyles();
  const navigate = useNavigate()
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [assignmentData, setAssignmentData] = useState([])


  useEffect(() => {
    const interactivTypeId = getInteractiveTypeId('assignment')
    axiosHttp.get('/api/interactives').then((res) => {
      console.log(res.data.interactive)
      if (res.data.interactive) {
        const assignmentArr = res.data.interactive.filter((interactive) => {
          if (interactive.interactive_type.id === interactivTypeId) {
            return interactive
          }
        })
        console.log(assignmentArr)
        setAssignmentData(assignmentArr)

      }
    }).catch((err) => {
      if (err.response.status === 401) {
        navigate('/authentication/sign-in')
      }
      console.log(err.response)
    })
  }, [])
  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };
  const closeOverlay = () => {
    setIsOverlayOpen(false)
  }

  const navigateToCreate = () => {
    navigate('/interactives/assignment/create')
  }
  return (
    <>
      <Backdrop className={classes.backdrop} open={isOverlayOpen} >
      </Backdrop>
      <div style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
        <Typography>Assignment Listing</Typography>
        <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} onClick={navigateToCreate}>
          <AddCircleIcon className={classes.icon} />
          <Typography variant="16" className={classes.icon}>
            Add a New Assignment
          </Typography>
        </Box>
      </div>
      <Grid container spacing={3} mt={3}>
        {
          assignmentData && assignmentData.length > 1 ? assignmentData.map((assignment, index) => {
            return (<Grid item xs={12} md={6} lg={3} key={index}>
              <MDBox mt={3}>
                <BookingCard
                  image={booking1}
                  title={assignment.title}
                  description={assignment.description}
                  grades={`${assignment.from_grade} - ${assignment.to_grade}`}
                  duration={assignment.duration > 60 ? `${Math.round(assignment.duration / 60)}H ${Math.round(assignment.duration - (assignment.duration / 60))}m` : `${assignment.duration}m`}
                  action={actionButtons}
                />
              </MDBox>
            </Grid>)
          }) : <></>
        }
      </Grid>
      {/* <CreateAssignmentOverlay open={isOverlayOpen} onClose={toggleOverlay} closeOverlay={closeOverlay} /> */}
    </>

  )
}

export default Assignment