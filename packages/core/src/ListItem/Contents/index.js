/* eslint-disable react/no-danger, jsx-a11y/control-has-associated-label */
import React from "react";
import { PropTypes } from "prop-types";

import clsx from "clsx";

import {
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

import useStyles from "../useStyles";

function Contents({
  children,
  description,
  link,
  linkComponent,
  name,
  selected,
  title,
  variant,
  ...props
}) {
  const classes = useStyles(props);
  const LinkComponent = link && (linkComponent || Button);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const hasContents = name || title || description || link;
  const showTitle = !isDesktop || variant === "story";
  const showDescription = !isDesktop || variant === "story";
  const showLink = !isDesktop || variant === "story";

  if (!hasContents) {
    return null;
  }
  return (
    <Grid container alignContent="space-between" className={classes.contents}>
      <Grid item xs={12} container>
        {name && name.length > 0 && (
          <Grid item xs={12} className={classes.content}>
            <Typography
              variant="button"
              className={clsx(classes.name, {
                [classes.nameSelected]: selected,
              })}
            >
              {name}
            </Typography>
          </Grid>
        )}
        {title && title.length > 0 && showTitle && (
          <Grid item xs={12} className={classes.content}>
            <Typography variant="subtitle2" className={classes.title}>
              {title}
            </Typography>
          </Grid>
        )}
        {description && description.length > 0 && showDescription && (
          <Grid item xs={12} className={classes.content}>
            <Typography variant="caption" className={classes.description}>
              {description}
            </Typography>
          </Grid>
        )}
        {link && link.url && showLink && (
          <Grid item xs={12} className={classes.content}>
            <LinkComponent
              href={link.url}
              variant="outlined"
              size="small"
              className={classes.link}
            >
              {link.title || link.url}
            </LinkComponent>
          </Grid>
        )}
      </Grid>
      {children && (
        <Grid item xs={12} className={classes.content}>
          {children}
        </Grid>
      )}
    </Grid>
  );
}

Contents.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
  }),
  linkComponent: PropTypes.elementType,
  name: PropTypes.string,
  selected: PropTypes.bool,
  title: PropTypes.string,
  variant: PropTypes.string.isRequired,
};

Contents.defaultProps = {
  children: undefined,
  description: undefined,
  link: undefined,
  linkComponent: undefined,
  name: undefined,
  selected: false,
  title: undefined,
};

export default Contents;
