import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import RichTypography from "../RichTypography";

const useStyles = makeStyles((theme) => ({
  root: {},
  about: {
    display: "block",
  },
  initiative: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
      marginTop: "1.5rem",
    },
  },
}));

function About({ about, initiative, ...props }) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <RichTypography variant="caption" className={classes.about}>
        {about}
      </RichTypography>
      <br />
      <RichTypography variant="caption" className={classes.initiative}>
        {initiative}
      </RichTypography>
    </div>
  );
}

About.propTypes = {
  about: PropTypes.string.isRequired,
  initiative: PropTypes.node.isRequired,
};

export default About;
