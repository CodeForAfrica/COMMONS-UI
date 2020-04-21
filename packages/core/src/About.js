import React from "react";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "19.5625rem",
  },
  text: {
    fontSize: "0.9375rem",
    color: "#000",
  },
  subTitle: {
    marginTop: "2.3125rem",
    fontSize: "0.9375rem",
    color: "#000",
  },
});

function About({ about, ...props }) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Typography variant="subtitle2" className={classes.text}>
        {about.about}
      </Typography>
      <Typography variant="subtitle2" className={classes.subTitle}>
        {about.initiative}
      </Typography>
    </div>
  );
}

About.propTypes = {
  about: PropTypes.shape({
    about: PropTypes.string.isRequired,
    initiative: PropTypes.string.isRequired,
  }).isRequired,
};

export default About;
