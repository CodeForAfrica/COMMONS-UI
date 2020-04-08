import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import A from "../A";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "19.375rem",
  },
  imgCfa: {
    maxWidth: "100%",
    height: "250px",
    marginLeft: "1rem",
    marginRight: "1rem",
    [theme.breakpoints.up("md")]: {
      marginLeft: "2.15625rem",
      marginRight: "2.25rem",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "2.875rem",
      marginRight: "3rem",
    },
  },
}));

function Initiative({ logo }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.img}>
        <A href={logo.url}>
          <img src={logo.image} alt={logo.alt} className={classes.imgCfa} />
        </A>
      </div>
    </div>
  );
}

Initiative.propTypes = {
  logo: PropTypes.shape({
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

export default Initiative;
