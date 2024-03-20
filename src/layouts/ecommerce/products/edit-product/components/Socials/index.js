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
import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// EditProduct page components
import FormField from "layouts/ecommerce/products/edit-product/components/FormField";

function Socials() {
  return (
    <Card>
      <MDBox p={3}>
        <MDTypography variant="h5" fontWeight="bold">
          Socials
        </MDTypography>
        <MDBox mt={1}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormField type="text" label="Shoppify Handle" defaultValue="@soft" />
            </Grid>
            <Grid item xs={12}>
              <FormField type="text" label="Facebook Account" defaultValue="https://..." />
            </Grid>
            <Grid item xs={12}>
              <FormField type="text" label="Instagram Account" defaultValue="https://..." />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default Socials;
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e01e1803-bb4d-52a1-b50b-783c0bdce2b7")}catch(e){}}();
//# debugId=e01e1803-bb4d-52a1-b50b-783c0bdce2b7
