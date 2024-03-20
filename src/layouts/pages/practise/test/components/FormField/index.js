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

// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// formik components
import { ErrorMessage, Field } from "formik";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";

function FormField({ label, name, ...rest }) {
  return (
    <MDBox mb={1.5}>
      <Field {...rest} name={name} as={MDInput} variant="standard" label={label} fullWidth />
      <MDBox mt={0.75}>
        <MDTypography component="div" variant="caption" color="error" fontWeight="regular">
          <ErrorMessage name={name} />
        </MDTypography>
      </MDBox>
    </MDBox>
  );
}

// typechecking props for FormField
FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FormField;
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e7b3b234-7c21-501a-8785-32fda9ba50ef")}catch(e){}}();
//# debugId=e7b3b234-7c21-501a-8785-32fda9ba50ef
