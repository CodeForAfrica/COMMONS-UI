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
export { default as AboutOrganization } from "../AboutOrganization";
export { default as Copyright } from "../Copyright";
export { default as FooterInitiativeLogo } from "./Initiative";
export { default as LegalLinks } from "../LegalLinks";
export { default as QuickLinks } from "../QuickLinks";
