import React from "react";
import PropTypes from "prop-types";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import A from "../A";

const useStyles = makeStyles({
  root: {},
  icon: {
    width: "1.5625rem",
    height: "1.5625rem",
    objectFit: "contain",
    marginRight: "0.9375rem",
  },
  iconContainer: {},
  links: {},
});

function StayInTouch({ support, socialMedia, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Grid container justify="flex-start" alignItems="center">
        <Typography>Stay in touch with us @&nbsp;</Typography>
        <div className={classes.iconContainer}>
          <A
            href={`mailto:${support.email}`}
            className={classes.links}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img
              src={support.image.url}
              alt={support.image.alt}
              className={classes.icon}
            />
          </A>
        </div>
        {socialMedia.map((media) => (
          <div className={classes.iconContainer}>
            <A href={media.url} className={classes.links}>
              <img
                src={media.image.url}
                alt={media.image.alt}
                className={classes.icon}
              />
            </A>
          </div>
        ))}
      </Grid>
    </div>
  );
}

StayInTouch.propTypes = {
  support: PropTypes.shape({
    email: PropTypes.string.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  socialMedia: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      image: PropTypes.shape({
        url: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
};

export default StayInTouch;
