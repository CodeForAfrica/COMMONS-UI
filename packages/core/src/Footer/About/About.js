import React from "react";
import PropTypes from "prop-types";

import useStyles from "../useStyles";

import RichTypography from "../../RichTypography";

function About({ variant = "caption", children, ...props }) {
  const classes = useStyles(props);
  return (
    <RichTypography variant={variant} className={classes.about}>
      {children}
    </RichTypography>
  );
}

About.propTypes = {
  about: PropTypes.node.isRequired,
};

export default About;
