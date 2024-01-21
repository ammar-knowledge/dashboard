import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import CourseCard from './CourseCard'
import axiosHttp from "utils/axios";
import booking1 from "assets/images/home-decor-2.jpg";
import MDBox from "components/MDBox";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import MDTypography from "components/MDTypography";
import BookingCard from "examples/Cards/BookingCard";

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
const CourseListing = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axiosHttp.get('/api/courses').then((res) => {
      setCourses(res.data.courses);
    }).catch((err) => {
      if (err.response.status === 401) {
        navigate('/authentication/sign-in')
      }
      console.log(err.response)
    })
  }, [])

  return (
    <Grid container spacing={2} marginTop={2}>
      {/* {courses.map((course) => (
        <Grid item xs={12} sm={6} md={3} key={course.id}>
          <CourseCard course={course}/>
        </Grid>
      ))} */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <MDBox mt={3}>
            <BookingCard
              image={booking1}
              title="Cozy 5 Stars Apartment"
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam velit sapien, congue id'
              price="$899/night"
              location="Barcelona, Spain"
              action={actionButtons}
            />
          </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <MDBox mt={3}>
            <BookingCard
              image={booking1}
              title="Office Studio"
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam velit sapien, congue id'
              price="$1.119/night"
              location="London, UK"
              action={actionButtons}
            />
          </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <MDBox mt={3}>
            <BookingCard
              image={booking1}
              title="Beautiful Castle"
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam velit sapien, congue id'
              price="$459/night"
              location="Milan, Italy"
              action={actionButtons}
            />
          </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <MDBox mt={3}>
            <BookingCard
              image={booking1}
              title="Cozy 5 Stars Apartment"
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam velit sapien, congue id'
              price="$899/night"
              location="Barcelona, Spain"
              action={actionButtons}
            />
          </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <MDBox mt={3}>
            <BookingCard
              image={booking1}
              title="Office Studio"
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam velit sapien, congue id'
              price="$1.119/night"
              location="London, UK"
              action={actionButtons}
            />
          </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <MDBox mt={3}>
            <BookingCard
              image={booking1}
              title="Beautiful Castle"
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam velit sapien, congue id'
              price="$459/night"
              location="Milan, Italy"
              action={actionButtons}
            />
          </MDBox>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CourseListing;
