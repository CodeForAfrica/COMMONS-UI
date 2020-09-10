import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import A from "../A";
import { Grid, Typography } from "@material-ui/core";

import useStyles from "./useStyles";

function Logo({ organizationLogo, ...props }) {
  const classes = useStyles(props);

  return (
    <Grid container alignItems="baseline" className={classes.organization}>
      <Grid item>
        <Typography variant="h1">
          <A href={organizationLogo.url}>
            <img
              src={organizationLogo.image.url}
              alt={organizationLogo.image.alt}
              className={classes.organizationLogo}
            />
          </A>
        </Typography>
      </Grid>
      <div
        className={clsx(classes.grow, classes.divider, classes.dividerDesktop)}
      />
    </Grid>
  );
}

Logo.propTypes = {
  organizationLogo: PropTypes.shape({
    image: PropTypes.shape({
      alt: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Logo;
