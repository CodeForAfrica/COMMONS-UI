import { Button, Grid } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import PropTypes from "prop-types";
import React from "react";

import RichTypography from "@/commons-ui/core/RichTypography";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {
    flexWrap: "nowrap",
    [breakpoints.up("md")]: {
      flexWrap: "wrap",
    },
  },
  contentType: {
    paddingTop: typography.pxToRem(14),
  },
  description: {
    paddingTop: typography.pxToRem(24),
  },
  icon: {},
  link: {},
}));

function DataSourceContent({
  children,
  contentType,
  description,
  icon,
  link,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <Grid container className={classes.root}>
      <Grid item xs="auto" md={12} className={classes.icon}>
        {icon}
      </Grid>
      <Grid item xs="auto" md={12} container>
        <Grid item xs={12}>
          <RichTypography
            variant="subtitle2"
            color="textSecondary"
            className={classes.contentType}
          >
            {contentType}
          </RichTypography>
        </Grid>
        <Grid item xs={12}>
          <RichTypography
            variant="body2"
            color="textSecondary"
            className={classes.description}
          >
            {children || description}
          </RichTypography>
        </Grid>
        {link && (
          <Grid item xs={12}>
            <Button
              href={link.href}
              variant="outlined"
              color="primary"
              className={classes.link}
            >
              {link.label || link.href}
            </Button>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

DataSourceContent.propTypes = {
  children: PropTypes.node,
  contentType: PropTypes.string.isRequired,
  description: PropTypes.string,
  icon: PropTypes.node.isRequired,
  link: PropTypes.shape({
    href: PropTypes.string.isRequired,
    label: PropTypes.string,
  }),
};

DataSourceContent.defaultProps = {
  children: undefined,
  description: undefined,
  link: { href: "#", label: "View More" },
};

export default DataSourceContent;
