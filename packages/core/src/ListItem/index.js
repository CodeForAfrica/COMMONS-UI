/* eslint-disable react/no-danger, jsx-a11y/control-has-associated-label */
import React from "react";
import { PropTypes } from "prop-types";

import clsx from "clsx";

import { Grid, useMediaQuery, useTheme } from "@material-ui/core";

import Contents from "./Contents";
import useStyles from "./useStyles";

const DEFAULT_VARIANT = "story";

function ListItem({
  image,
  children,
  name,
  onClick,
  selected,
  title,
  variant: variantProp,
  ...props
}) {
  const variant = variantProp || DEFAULT_VARIANT;
  const classes = useStyles({ ...props, image, onClick, variant });
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isMobile = !isDesktop;
  const isProfile = variant === "profile";
  const buttonProps = onClick
    ? { role: "button", tabIndex: 0, onClick, onKeyUp: undefined }
    : {};

  return (
    <Grid container {...buttonProps} className={classes.root}>
      {isMobile && isProfile && (
        <Grid item xs={6} container>
          <Contents
            name={name}
            selected={selected}
            title={title}
            variant={variant}
            {...props}
          >
            {children}
          </Contents>
        </Grid>
      )}
      <Grid
        item
        xs={isMobile && isProfile ? 6 : 12}
        container
        className={classes.contentsRoot}
      >
        <img
          alt={image.description || name || title}
          src={image.url}
          className={clsx(classes.picture, {
            [classes.pictureSelected]: selected,
          })}
        />
        {(!isProfile || isDesktop) && (
          <Contents
            name={name}
            selected={selected}
            title={title}
            variant={variant}
            {...props}
          >
            {children}
          </Contents>
        )}
      </Grid>
    </Grid>
  );
}

ListItem.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  image: PropTypes.shape({
    description: PropTypes.string,
    url: PropTypes.string.isRequired,
  }).isRequired,
  href: PropTypes.string,
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
  }),
  linkComponent: PropTypes.elementType,
  name: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  title: PropTypes.string,
  variant: PropTypes.oneOf(["profile", "story"]),
};
ListItem.defaultProps = {
  description: undefined,
  href: undefined,
  link: undefined,
  children: undefined,
  linkComponent: undefined,
  name: undefined,
  onClick: undefined,
  selected: false,
  title: undefined,
  variant: DEFAULT_VARIANT,
};

export default ListItem;
