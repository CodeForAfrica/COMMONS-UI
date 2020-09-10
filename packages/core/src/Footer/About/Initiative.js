import React from "react";
import PropTypes from "prop-types";

import useStyles from "../useStyles";

import RichTypography from "../../RichTypography";

function Initiative({ variant = "caption", children, ...props }) {
  const classes = useStyles(props);
  return (
    <RichTypography variant={variant} className={classes.initiative}>
      {children}
    </RichTypography>
  );
}

Initiative.propTypes = {
  about: PropTypes.string.isRequired,
  initiative: PropTypes.node.isRequired,
};

export default Initiative;
