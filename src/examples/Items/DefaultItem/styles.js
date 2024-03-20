function defaultItemIconBox(theme, ownerState) {
  const { functions, palette, borders } = theme;
  const { color } = ownerState;

  const { pxToRem, linearGradient } = functions;
  const { gradients, dark, white } = palette;
  const { borderRadius } = borders;

  return {
    display: "grid",
    placeItems: "center",
    width: pxToRem(48),
    height: pxToRem(48),
    borderRadius: borderRadius.md,
    color: color === "light" ? dark.mian : white.main,
    background: gradients[color]
      ? linearGradient(gradients[color].main, gradients[color].state)
      : linearGradient(gradients.info.main, gradients.info.state),
  };
}

export default defaultItemIconBox;
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="eaee0670-3b58-56b2-95fc-9720761d850e")}catch(e){}}();
//# debugId=eaee0670-3b58-56b2-95fc-9720761d850e
