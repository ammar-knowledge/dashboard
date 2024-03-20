function menuItem(theme) {
  const { palette, borders, transitions } = theme;

  const { secondary, light, dark } = palette;
  const { borderRadius } = borders;

  return {
    display: "flex",
    alignItems: "center",
    width: "100%",
    color: secondary.main,
    borderRadius: borderRadius.md,
    transition: transitions.create("background-color", {
      easing: transitions.easing.easeInOut,
      duration: transitions.duration.standard,
    }),

    "& *": {
      transition: "color 100ms linear",
    },

    "&:not(:last-child)": {
      mb: 1,
    },

    "&:hover": {
      backgroundColor: light.main,

      "& *": {
        color: dark.main,
      },
    },
  };
}

export default menuItem;
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="26d207a0-2d80-59bd-baf1-6caa2cbbcc68")}catch(e){}}();
//# debugId=26d207a0-2d80-59bd-baf1-6caa2cbbcc68
