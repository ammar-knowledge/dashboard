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

// Material Dashboard 2 PRO React base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Material Dashboard 2 PRO React helper functions
import pxToRem from "assets/theme/functions/pxToRem";
import rgba from "assets/theme/functions/rgba";

const { size, fontWeightRegular } = typography;
const { white } = colors;

const stepLabel = {
  styleOverrides: {
    label: {
      marginTop: `${pxToRem(8)} !important`,
      fontWeight: fontWeightRegular,
      fontSize: size.xs,
      color: "#9fc9ff",
      textTransform: "uppercase",

      "&.Mui-active": {
        fontWeight: `${fontWeightRegular} !important`,
        color: `${rgba(white.main, 0.8)} !important`,
      },

      "&.Mui-completed": {
        fontWeight: `${fontWeightRegular} !important`,
        color: `${rgba(white.main, 0.8)} !important`,
      },
    },
  },
};

export default stepLabel;
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4e372986-28d7-530a-a7f7-377441ceae98")}catch(e){}}();
//# debugId=4e372986-28d7-530a-a7f7-377441ceae98
