import React from "react";
import PropTypes from "prop-types";

import PrimaryFooter from "./PrimaryFooter";
import SecondaryFooter from "./SecondaryFooter";

import useStyles from "./useStyles";

const DEFAULT_VARIANT = "full";

function Footer({ variant: variantProp, ...props }) {
  const classes = useStyles(props);
  const variant = variantProp || DEFAULT_VARIANT;

  return (
    <div className={classes.root}>
      {variant === "full" && <PrimaryFooter {...props} />}
      <SecondaryFooter {...props} />
    </div>
  );
}

Footer.propTypes = {
  variant: PropTypes.oneOf(["full", "compact"]),
};

Footer.defaultProps = {
  variant: DEFAULT_VARIANT,
};

export default Footer;

// Expose components
export { default as FooterAbout } from "./About";
export { default as FooterCopyright } from "./Copyright";
export { default as FooterLogo } from "./Logo";
export { default as FooterInitiativeLogo } from "./Initiative";
export { default as FooterLegalLinks } from "./LegalLinks";
export { default as FooterQuickLinks } from "./QuickLinks";
export { default as FooterStayInTouch } from "./StayInTouch";
