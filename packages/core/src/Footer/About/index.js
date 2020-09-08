import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import RichTypography from "../../RichTypography";
import AboutOrganization from "./AboutOrganization";
import AboutInitiative from "./AboutInitiative";

const useStyles = makeStyles((theme) => ({
  root: {},
}));
function About({ about, initiative, ...props }) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <AboutOrganization
        about={about}
        classes={{ about: initiativeclasses.about }}
      />
      <br />
      <AboutInitiative
        initiative={initiative}
        classes={{ initiative: classes.initiative }}
      />
    </div>
  );
}

About.propTypes = {
  about: PropTypes.string.isRequired,
  initiative: PropTypes.node.isRequired,
};

export default About;
export { AboutOrganization };
export { AboutInitiative };
