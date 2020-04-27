import React from "react";
import PropTypes from "prop-types";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import A from "../A";

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  },
  text: {
    fontWeight: "bold",
    lineHeight: 4.3125,
    "& > a": {
      display: "inline-block",
      padding: "0 1rem",
      borderRight: "1px solid white",
    },
    "& > a:last-of-type": {
      border: "none",
    },
  },
  icon: {
    width: "2rem",
    height: "2rem",
    objectFit: "contain",
    verticalAlign: "middle",
  },
  iconContainer: {},
  links: {},
}));

function StayInTouch({ support, socialMedia, ...props }) {
  const classes = useStyles(props);

  return (
    <Grid
      container
      justify="flex-start"
      alignItems="center"
      className={classes.root}
    >
      <Grid item xs={12} md="auto" className={classes.content}>
        <Typography
          variant="caption"
          color="textSecondary"
          className={classes.text}
        >
          Stay in touch with us &nbsp;
        </Typography>
      </Grid>
      <Grid item xs={12} md="auto" className={classes.content}>
        <Typography variant="caption" className={classes.text}>
          {support && (
            <A
              href={`mailto:${support.email}`}
              color="textSecondary"
              className={classes.links}
            >
              <img
                src={support.image.url}
                alt={support.image.alt}
                className={classes.icon}
              />
            </A>
          )}
          {socialMedia.map((media) => (
            <A
              key={media.url}
              href={media.url}
              color="textSecondary"
              className={classes.links}
            >
              <img
                src={media.image.url}
                alt={media.image.alt}
                className={classes.icon}
              />
            </A>
          ))}
        </Typography>
      </Grid>
    </Grid>
  );
}

StayInTouch.propTypes = {
  support: PropTypes.shape({
    email: PropTypes.string.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
  }),
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
