import React from "react";
import PropTypes from "prop-types";

import { Button, Grid, makeStyles } from "@material-ui/core";

import RichTypography from "../RichTypography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "left",
    marginTop: "1rem",
  },
  title: {
    paddingTop: "1rem",
  },
  description: {
    [theme.breakpoints.up("md")]: {
      paddingTop: "1rem",
    },
  },
  iconGrid: {
    paddingTop: "1rem",
  },
  subtitleGrid: {
    display: "none",
  },
  countGrid: {
    display: "none",
  },
  contentCount: {
    fontSize: "3.125rem",
    [theme.breakpoints.up("md")]: {
      fontSize: theme.typography.h1.fontSize,
    },
  },
  contentText: {
    paddingTop: "1rem",
    paddingBottom: "3rem",
  },
}));

function Content({
  children,
  contentCount,
  contentType,
  description,
  link,
  linkTitle,
  title,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <Grid container direction="column" className={classes.root}>
      {children && (
        <Grid item xs={12} className={classes.iconGrid}>
          {children}
        </Grid>
      )}

      <Grid item xs={12}>
        <RichTypography variant="subtitle2" color="textSecondary">
          {contentType}
        </RichTypography>
      </Grid>
      <Grid item xs={12}>
        <RichTypography
          variant="body2"
          color="textSecondary"
          className={classes.description}
        >
          {description}
        </RichTypography>
      </Grid>
      <Grid item xs={12} container alignItems="space-between">
        <Button href={link} variant="outlined" color="primary">
          {linkTitle}
        </Button>
      </Grid>
    </Grid>
  );
}

Content.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  contentCount: PropTypes.string,
  contentType: PropTypes.string.isRequired,
  description: PropTypes.string,
  link: PropTypes.string,
  linkTitle: PropTypes.string,
};

Content.defaultProps = {
  children: undefined,
  title: undefined,
  contentCount: undefined,
  description: undefined,
  link: "#",
  linkTitle: "View More",
};

export default Content;
