import React from "react";
import PropTypes from "prop-types";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import A from "../A";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  supporterLogo: {
    width: "9.6275rem",
    height: "auto",
    [theme.breakpoints.up("md")]: {
      width: "13.7375rem",
    },
  },
  support: {
    display: "block",
    marginBottom: "1.618125rem",
    marginTop: "1.708rem",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

function Initiative({ logo, about }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <A href={logo.url}>
        <img
          src={logo.image.url}
          alt={logo.image.alt}
          className={classes.supporterLogo}
        />
      </A>
      <Typography variant="caption" className={classes.support}>
        {about.initiative}
      </Typography>
    </div>
  );
}

Initiative.propTypes = {
  about: PropTypes.shape({
    initiative: PropTypes.node,
  }).isRequired,
  logo: PropTypes.shape({
    image: PropTypes.shape({
      alt: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Initiative;
