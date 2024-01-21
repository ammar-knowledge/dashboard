/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import MDBox from "components/MDBox";
import breakpoints from "assets/theme/base/breakpoints";
import Placeholder from 'assets/images/dataStructures.jpg'
import PeopleList from 'layouts/ActivityDetail/components/PeopleList'
import profilesListData from "layouts/ActivityDetail/data/profilesListData";
import SessionInfoCard from 'layouts/ActivityDetail/components/CourseInfoCard'
import SessionContent from 'layouts/ActivityDetail/components/CourseContent'

function Header({ children }) {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <MDBox position="relative" mb={5}>
      <Card
        sx={{
          py: 3,
          px: 2,
        }}
      >
        <Grid container spacing={3} alignItems="start">
          <Grid item xs={12} md={12} lg={3}>
            <img src={Placeholder} style={{ height: "240px", width: "240px", objectFit: 'cover' }} />
            <SessionInfoCard
              title="Data Structures and Algorithm"
              description="The course aims to provide general techniques for the design of efficient algorithms and, in parallel, develop appropriate mathematical tools for analysing their performance. "
              info={{
                Duration: "2 Hours 10 Minutes",
                Grades: "1 -12",
                Quiz: '5',
                Quests: '7',
                Assignments: '2'
              }}
              shadow={false}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={5}>
            <SessionContent />
          </Grid>
          <Grid item xs={12} md={12} lg={4} sx={{ ml: "auto" }}>
            <AppBar position="static">
              <PeopleList title="Resources" profiles={profilesListData} shadow={false} />
            </AppBar>
          </Grid>
        </Grid>
        {children}
      </Card>
    </MDBox>
  );
}

// Setting default props for the Header
Header.defaultProps = {
  children: "",
};

// Typechecking props for the Header
Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
