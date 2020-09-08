import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import RichTypography from "../../RichTypography";

const useStyles = makeStyles((theme) => ({
  initiative: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
      marginTop: "1.5rem",
    },
  },
}));

function AboutInitiative({ about, initiative, ...props }) {
  const classes = useStyles(props);
  return (
    <RichTypography variant="caption" className={classes.initiative}>
      {initiative}
    </RichTypography>
  );
}

AboutInitiative.propTypes = {
  about: PropTypes.string.isRequired,
  initiative: PropTypes.node.isRequired,
};

export default AboutInitiative;
