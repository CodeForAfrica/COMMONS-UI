import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";

import A from "../A";
import RichTypography from "../RichTypography";
import { Grid, Hidden, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

function OwnerLogo({ organizationLogo, ...props }) {
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

OwnerLogo.propTypes = {
  organizationLogo: PropTypes.shape({
    image: PropTypes.shape({
      alt: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default OwnerLogo;
