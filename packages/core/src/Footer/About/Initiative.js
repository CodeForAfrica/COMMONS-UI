import React from "react";
import PropTypes from "prop-types";

import useStyles from "../useStyles";

import RichTypography from "../../RichTypography";

function Initiative({ children, variant, ...props }) {
  const classes = useStyles(props);
  return (
    <RichTypography variant={variant} className={classes.aboutInitiative}>
      {children}
    </RichTypography>
  );
}

Initiative.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};

Initiative.defaultProps = {
  variant: "caption",
};

export default Initiative;
