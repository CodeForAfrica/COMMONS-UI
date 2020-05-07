import React from "react";
import PropTypes from "prop-types";

import { Button, Grid, makeStyles } from "@material-ui/core";

import RichTypography from "../RichTypography";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    textAlign: "left",
    marginTop: "1rem",
  },
  contentType: {
    paddingTop: "1rem",
    paddingBottom: "3rem",
  },
  description: {},
  icon: {
    paddingTop: "1rem",
  },
  link: {},
}));

function Content({ children, contentType, description, icon, link, ...props }) {
  const classes = useStyles(props);

  return (
    <Grid container className={classes.root}>
      {icon && (
        <Grid item xs={2} sm={1} md={12} className={classes.icon}>
          {icon}
        </Grid>
      )}
      <Grid item xs={icon ? 10 : 12} sm={icon ? 11 : 12} md={12} container>
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

Content.propTypes = {
  children: PropTypes.node,
  contentType: PropTypes.string.isRequired,
  description: PropTypes.string,
  icon: PropTypes.node,
  link: PropTypes.shape({
    href: PropTypes.string.isRequired,
    label: PropTypes.string,
  }),
};

Content.defaultProps = {
  children: undefined,
  description: undefined,
  icon: undefined,
  link: { href: "#", label: "View More" },
};

export default Content;
