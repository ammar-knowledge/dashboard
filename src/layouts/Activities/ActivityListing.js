import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import ActivityCard from './ActivityCard'
import axiosHttp from "utils/axios";

const CourseListing = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axiosHttp.get('/api/activities').then((res) => {
      setActivities(res.data.activities);
    }).catch((err) => {
      if (err.response.status === 401) {
        navigate('/authentication/sign-in')
      }
      console.log(err.response)
    })
  }, [])

  return (
    <Grid container spacing={2} marginTop={2}>
      {activities.map((activity) => (
        <Grid item xs={12} sm={6} md={3} key={activity.id}>
          <ActivityCard activity={activity} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CourseListing;
