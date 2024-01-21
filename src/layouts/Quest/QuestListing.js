import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import QuestCard from './QuestCard'
import axiosHttp from 'utils/axios';
import MDTypography from "components/MDTypography";
import BookingCard from "examples/Cards/BookingCard";
import booking1 from "assets/images/home-decor-2.jpg";
import MDBox from "components/MDBox";
import { getInteractiveTypeId } from 'utils/interactiveTypes';
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";


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

const QustListing = ({ isOverlayOpen }) => {
  const [questData, setQuestData] = useState([])

  const getQuestData = () => {
    const interactivTypeId = getInteractiveTypeId('quest')
    axiosHttp.get('/api/interactives').then((res) => {
      console.log(res.data.interactive)
      if (res.data.interactive) {
        const questArr = res.data.interactive.filter((interactive) => {
          if (interactive.interactive_type.id === interactivTypeId) {
            return interactive
          }
        })
        console.log(questArr)
        setQuestData(questArr)

      }
    }).catch((err) => {
      console.log(err.response)
      if (err.response.status === 401) {
        navigate('/authentication/sign-in')
      }
    })
  }
  useEffect(() => {
    getQuestData()
  }, [])

  useEffect(() => {
    getQuestData()
  }, [isOverlayOpen])
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackBar(false);
  };

  return (
    <Grid container spacing={3} marginTop={2}>
      {questData && questData.length > 1 ? questData.map((quest, index) => {
        return (<Grid item xs={12} md={6} lg={3} key={index}>
          <MDBox mt={3}>
            <BookingCard
              image={booking1}
              title={quest.title}
              description={quest.description}
              grades={`${quest.from_grade} - ${quest.to_grade}`}
              duration={quest.duration > 60 ? `${Math.round(quest.duration / 60)}H ${Math.round(quest.duration - (quest.duration / 60))}m` : `${quest.duration}m`}
              action={actionButtons}
            />
          </MDBox>
        </Grid>)
      }) : <></>}
    </Grid>
  );
};

export default QustListing;
