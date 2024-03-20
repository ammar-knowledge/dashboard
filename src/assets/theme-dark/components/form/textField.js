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

// Material Dashboard 2 PRO React Base Styles
import colors from "assets/theme-dark/base/colors";

const { transparent, white } = colors;

const textField = {
  styleOverrides: {
    root: {
      backgroundColor: transparent.main,

      "& .MuiFormHelperText-root": {
        color: `${white.main} !important`,
      },
    },
  },
};

export default textField;
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d5b70ab1-19ec-5b8b-a795-9b17b1f542b2")}catch(e){}}();
//# debugId=d5b70ab1-19ec-5b8b-a795-9b17b1f542b2
