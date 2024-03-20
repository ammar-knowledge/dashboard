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
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";

// NewProduct page components
import FormField from "layouts/ecommerce/products/new-product/components/FormField";

function Pricing() {
  return (
    <MDBox>
      <MDTypography variant="h5">Pricing</MDTypography>
      <MDBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <FormField type="text" label="Price" placeholder="99.00" />
          </Grid>
          <Grid item xs={12} sm={4} sx={{ mt: 2 }}>
            <Autocomplete
              defaultValue="USD"
              options={["BTC", "CNY", "EUR", "GBP", "INR", "USD"]}
              renderInput={(params) => <MDInput {...params} variant="standard" />}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <FormField type="text" label="SKU" placeholder="71283476591" />
          </Grid>
        </Grid>
      </MDBox>
      <MDBox mt={1}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <MDBox my={2} display="inline-block">
              <MDTypography component="label" variant="button" fontWeight="regular" color="text">
                Tags
              </MDTypography>
            </MDBox>
            <Autocomplete
              multiple
              defaultValue={["In Stock", "Out of Stock"]}
              options={["Black Friday", "Expired", "Out of Stock", "In Stock", "Sale"]}
              renderInput={(params) => <MDInput {...params} variant="standard" />}
            />
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

export default Pricing;
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ff6df91c-5fde-5a3f-aa54-b2482cd908bb")}catch(e){}}();
//# debugId=ff6df91c-5fde-5a3f-aa54-b2482cd908bb
