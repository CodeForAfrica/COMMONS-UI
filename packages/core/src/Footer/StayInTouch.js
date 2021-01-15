import React from "react";
import PropTypes from "prop-types";

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

function StayInTouch({ options, support, socialMedia, title, ...props }) {
  const classes = useStyles(props);

  return (
    <Grid
      container
      justify="flex-start"
      alignItems="center"
      className={classes.root}
    >
      {title && (
        <Grid item xs={12} md="auto" className={classes.title}>
          <RichTypography
            variant={options.title.variant}
            color={options.title.color}
            className={classes.text}
          >
            {title}
          </RichTypography>
        </Grid>
      )}
      <Grid
        item
        xs={12}
        md="auto"
        container
        justify="center"
        className={classes.links}
      >
        {support && (
          <A
            href={`mailto:${support.email}`}
            color={options.support.color}
            className={classes.link}
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
            color={options.socialMedia.color}
            className={classes.link}
          >
            <img
              src={media.image.url}
              alt={media.image.alt}
              className={classes.icon}
            />
          </A>
        ))}
      </Grid>
    </Grid>
  );
}

StayInTouch.propTypes = {
  options: PropTypes.shape({
    socialMedia: PropTypes.shape({
      color: PropTypes.string,
    }),
    support: PropTypes.shape({
      color: PropTypes.string,
    }),
    title: PropTypes.shape({
      color: PropTypes.string,
      variant: PropTypes.string,
    }),
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
  options: {
    socialMedia: {
      color: "textSecondary",
    },
    support: {
      color: "textSecondary",
    },
    title: {
      color: "textSecondary",
      variant: "caption",
    },
  },
  support: undefined,
  title: "Stay in touch with us @ &nbsp;",
};

export default StayInTouch;
