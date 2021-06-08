import RichTypography from "@/commons-ui/core/RichTypography";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

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
