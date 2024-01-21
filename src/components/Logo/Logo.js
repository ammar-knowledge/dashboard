// material-ui


/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={logo} alt="Mantis" width="100" />
     *
     */
    <>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="129"
      height="24"
      fill="none"
      viewBox="0 0 129 24"
    >
      <path fill="url(#pattern0)" d="M0 0H128.571V24H0z"></path>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use
            transform="scale(.00333 .01786)"
            xlinkHref="#image0_13505_1229"
          ></use>
        </pattern>
        <image
          id="image0_13505_1229"
          width="300"
          height="56"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
    </>
  );
};

export default Logo;
