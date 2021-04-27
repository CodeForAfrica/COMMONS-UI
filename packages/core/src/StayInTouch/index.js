import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import A from "../A";
import RichTypography from "../RichTypography";

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  },
  icon: {
    width: "1.375rem",
    height: "1.375rem",
    objectFit: "contain",
  },

  link: {
    display: "inline-block",
    padding: "0 0.625rem",
  },
  links: {
    "& > a": {
      display: "inline-block",
      borderRight: "1px solid white",
    },
    "& > a:last-of-type": {
      border: "none",
    },
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-start",
      width: "auto",
    },
  },
  text: {},
}));

function StayInTouch({ support, socialMedia, title, ...props }) {
  const classes = useStyles(props);

  return (
    <Grid container className={classes.root}>
      {title && (
        <Grid item xs={12} md="auto" className={classes.title}>
          <RichTypography className={clsx(classes.text)}>
            {title}
          </RichTypography>
        </Grid>
      )}
      <Grid item xs={12} md="auto" container className={classes.links}>
        {support && (
          <A
            href={`mailto:${support.email}`}
            className={clsx(classes.link, classes.supportLink)}
          >
            <img
              src={support.image.url}
              alt={support.image.alt}
              className={clsx(classes.icon, classes.supportIcon)}
            />
          </A>
        )}
        {socialMedia.map((media) => (
          <A
            key={media.url}
            href={media.url}
            className={clsx(classes.link, classes.socialLink)}
          >
            <img
              src={media.image.url}
              alt={media.image.alt}
              className={clsx(classes.icon, classes.socialIcon)}
            />
          </A>
        ))}
      </Grid>
    </Grid>
  );
}

StayInTouch.propTypes = {
  socialMedia: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      image: PropTypes.shape({
        url: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
  support: PropTypes.shape({
    email: PropTypes.string.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
  }),
  title: PropTypes.string,
};

StayInTouch.defaultProps = {
  support: undefined,
  title: "Stay in touch with us @ &nbsp;",
};

export default StayInTouch;
