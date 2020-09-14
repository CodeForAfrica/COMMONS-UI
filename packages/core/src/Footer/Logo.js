import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Grid, Typography } from "@material-ui/core";
import A from "../A";

import useStyles from "./useStyles";

function Logo({ hasDivider, image, url, ...props }) {
  const classes = useStyles(props);

  return (
    <Grid container alignItems="baseline" className={classes.organization}>
      <Grid item>
        <Typography variant="h1">
          <A href={url}>
            <img
              src={image.url}
              alt={image.alt}
              className={classes.organizationLogo}
            />
          </A>
        </Typography>
      </Grid>
      {hasDivider && (
        <div
          className={clsx(
            classes.grow,
            classes.divider,
            classes.dividerDesktop
          )}
        />
      )}
    </Grid>
  );
}

Logo.propTypes = {
  image: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  url: PropTypes.string.isRequired,
  hasDivider: PropTypes.bool,
  options: PropTypes.shape({}),
};

Logo.defaultProps = {
  hasDivider: true,
  options: {},
};
export default Logo;
