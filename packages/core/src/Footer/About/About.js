import React from "react";
import PropTypes from "prop-types";

import useStyles from "../useStyles";

import RichTypography from "../../RichTypography";

function About({ children, variant, ...props }) {
  const classes = useStyles(props);
  return (
    <RichTypography variant={variant} className={classes.about}>
      {children}
    </RichTypography>
  );
}

About.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};

About.defaultProps = {
  variant: "caption",
};
export default About;
