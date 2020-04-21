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

function StayInTouch({ settings: { support, socialMedia }, ...props }) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Grid container justify="flex-start" alignItems="center">
        <Typography>Stay in touch with us @&nbsp;</Typography>
        <div className={classes.iconContainer}>
          <A
            href={`mailto:${support.hello}`}
            className={classes.links}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <support.component alt="" className={classes.icon} />
          </A>
        </div>
        <div className={classes.iconContainer}>
          <A href={socialMedia.twitter.link} className={classes.links}>
            <socialMedia.twitter.component alt="" className={classes.icon} />
          </A>
        </div>
        <div className={classes.iconContainer}>
          <A href={socialMedia.facebook.link} className={classes.links}>
            <socialMedia.facebook.component alt="" className={classes.icon} />
          </A>
        </div>
        <div className={classes.iconContainer}>
          <A href={socialMedia.medium.link} className={classes.links}>
            <socialMedia.medium.component alt="" className={classes.icon} />
          </A>
        </div>
        <div className={classes.iconContainer}>
          <A href={socialMedia.linkedin.link} className={classes.links}>
            <socialMedia.linkedin.component alt="" className={classes.icon} />
          </A>
        </div>
      </Grid>
    </div>
  );
}

StayInTouch.propTypes = {
  settings: PropTypes.shape({
    support: PropTypes.shape({
      hello: PropTypes.string.isRequired,
      component: PropTypes.func.isRequired,
    }).isRequired,
    socialMedia: PropTypes.shape({
      facebook: PropTypes.shape({
        link: PropTypes.string.isRequired,
        component: PropTypes.func.isRequired,
      }).isRequired,
      linkedin: PropTypes.shape({
        link: PropTypes.string.isRequired,
        component: PropTypes.func.isRequired,
      }).isRequired,
      medium: PropTypes.shape({
        link: PropTypes.string.isRequired,
        component: PropTypes.func.isRequired,
      }).isRequired,
      twitter: PropTypes.shape({
        link: PropTypes.string.isRequired,
        component: PropTypes.func.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default StayInTouch;
