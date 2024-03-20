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
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export default styled(Box)(({ theme, ownerState }) => {
  const { palette, typography, borders, functions } = theme;
  const { darkMode } = ownerState;

  const { text, white, dark, inputBorderColor, transparent } = palette;
  const { size } = typography;
  const { borderRadius, borderWidth } = borders;
  const { rgba } = functions;

  return {
    display: "flex",
    alignItems: "center",
    border: `${borderWidth[1]} solid ${inputBorderColor} !important`,
    borderRadius: borderRadius.md,

    "&.dropzone": {
      background: `${transparent.main} !important`,
    },

    "& .dz-default": {
      margin: "0 auto !important",
    },

    "& .dz-default .dz-button": {
      color: `${text.main} !important`,
      fontSize: `${size.sm} !important`,
    },

    "& .dz-preview.dz-image-preview": {
      background: `${transparent.main} !important`,
    },

    "& .dz-preview .dz-details": {
      color: `${dark.main} !important`,
      opacity: "1 !important",

      "& .dz-size span, & .dz-filename span": {
        backgroundColor: `${rgba(white.main, 0.7)} !important`,
      },
    },

    "& .dz-error-message": {
      display: "none !important",
    },

    "& .dz-remove": {
      color: `${darkMode ? white.main : dark.main} !important`,
      textDecoration: "none",

      "&:hover, &:focus": {
        textDecoration: "none !important",
      },
    },
  };
});
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2c211ea8-4cee-5b59-aed2-e101f253b969")}catch(e){}}();
//# debugId=2c211ea8-4cee-5b59-aed2-e101f253b969
