import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import RichTypography from "../../RichTypography";

const useStyles = makeStyles(() => ({
  root: {},
  about: {
    display: "block",
  },
}));

function AboutOrganization({ about, ...props }) {
  const classes = useStyles(props);
  return (
    <RichTypography variant="caption" className={classes.about}>
      {about}
    </RichTypography>
  );
}

AboutOrganization.propTypes = {
  about: PropTypes.node.isRequired,
};

export default AboutOrganization;
