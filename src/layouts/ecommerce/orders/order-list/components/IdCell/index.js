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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function IdCell({ id, checked }) {
  return (
    <MDBox display="flex" alignItems="center">
      <Checkbox defaultChecked={checked} />
      <MDBox ml={1}>
        <MDTypography variant="caption" fontWeight="medium" color="text">
          {id}
        </MDTypography>
      </MDBox>
    </MDBox>
  );
}

// Setting default value for the props of IdCell
IdCell.defaultProps = {
  checked: false,
};

// Typechecking props for the IdCell
IdCell.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

export default IdCell;
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c5b667e4-75e8-58b3-b68b-bc722210c310")}catch(e){}}();
//# debugId=c5b667e4-75e8-58b3-b68b-bc722210c310
