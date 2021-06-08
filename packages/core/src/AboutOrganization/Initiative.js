import RichTypography from "@/commons-ui/core/RichTypography";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

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
