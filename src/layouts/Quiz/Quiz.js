import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Box from '@material-ui/core/Box';
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import { useNavigate } from 'react-router-dom';
import axiosHttp from 'utils/axios';
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import MDTypography from "components/MDTypography";
import BookingCard from "examples/Cards/BookingCard";
import booking1 from "assets/images/home-decor-2.jpg";
import booking2 from "assets/images/home-decor-1.jpg";
import booking3 from "assets/images/home-decor-3.jpg";
import { getInteractiveTypeId } from 'utils/interactiveTypes';

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
  const navigate = useNavigate()
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [quizData, setQuizData] = useState([])


  useEffect(() => {
    const interactivTypeId = getInteractiveTypeId('quiz')
    axiosHttp.get(`/api/interactives`).then((res) => {
      console.log(res.data.interactive)
      if (res.data.interactive) {
        const quizArr = res.data.interactive.filter((interactive) => {
          if (interactive.interactive_type.id === interactivTypeId) {
            return interactive
          }
        })
        console.log(quizArr)
        setQuizData(quizArr)

      }
    }).catch((err) => {
      console.log(err.response)
    })
  }, [])

  const navigateToCreate = () => {
    navigate('/interactives/quiz/create')
  };
  const closeOverlay = () => {
    setIsOverlayOpen(false)
  }
  return (
    <>
      <Backdrop className={classes.backdrop} open={isOverlayOpen} >
      </Backdrop>
      <div style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography>Quiz Listing</Typography>
        <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} onClick={navigateToCreate}>
          <AddCircleIcon className={classes.icon} />
          <Typography variant="16" className={classes.icon}>
            Add a New Quiz
          </Typography>
        </Box>
      </div>
      <Grid container spacing={3} mt={3}>
        {
          quizData && quizData.length > 1 ? quizData.map((quiz, index) => {
            return (<Grid item xs={12} md={6} lg={3} key={index}>
              <MDBox mt={3}>
                <BookingCard
                  image={booking1}
                  title={quiz.title}
                  description={quiz.description}
                  grades={`${quiz.from_grade} - ${quiz.to_grade}`}
                  duration={quiz.duration > 60 ? `${Math.round(quiz.duration / 60)}H ${Math.round(quiz.duration - (quiz.duration / 60))}m` : `${quiz.duration}m`}
                  action={actionButtons}
                />
              </MDBox>
            </Grid>)
          }) : <></>
        }
      </Grid>

    </>

  )
}

export default Quiz