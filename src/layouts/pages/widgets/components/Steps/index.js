/**
=========================================================
* Material Dashboard 2 PRO React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

function Steps() {
  return (
    <Card>
      <MDBox p={3}>
        <MDTypography variant="body2" color="text">
          Steps
        </MDTypography>
        <MDBox mt={2} mb={1} lineHeight={0}>
          <MDTypography variant="h3" fontWeight="bold">
            11.4K
          </MDTypography>
        </MDBox>
        <MDBadge variant="contained" color="success" badgeContent="+4.3%" container />
      </MDBox>
    </Card>
  );
}

export default Steps;
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1f52f93c-947a-5898-9040-f1ae52ed441c")}catch(e){}}();
//# debugId=1f52f93c-947a-5898-9040-f1ae52ed441c
