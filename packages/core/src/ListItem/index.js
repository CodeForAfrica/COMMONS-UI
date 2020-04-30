/* eslint-disable react/no-danger, jsx-a11y/control-has-associated-label */
import React from "react";
import { PropTypes } from "prop-types";

import clsx from "clsx";

import { Button, Grid, Typography } from "@material-ui/core";

import useStyles from "./useStyles";

function ListItem({
  description,
  image,
  link,
  name,
  onClick,
  selected,
  title,
  ...props
}) {
  const classes = useStyles({ ...props, image });

  return (
    <Grid
      container
      direction="column"
      justify="flex-end"
      role="button"
      tabIndex={0}
      className={classes.root}
      onClick={onClick}
      onKeyUp={undefined}
    >
      <img
        alt={image.description || name || title}
        src={image.url}
        className={clsx(classes.picture, {
          [classes.pictureSelected]: selected,
        })}
      />
      {name && name.length > 0 && (
        <Typography
          variant="h3"
          className={clsx(classes.name, {
            [classes.nameSelected]: selected,
          })}
        >
          {name}
        </Typography>
      )}
      <Typography variant="subtitle2" className={classes.title}>
        {title}
      </Typography>
      {description && description.length > 0 && (
        <Typography variant="caption" className={classes.description}>
          {description}
        </Typography>
      )}
      {link && link.url && (
        <Button
          href={link.url}
          variant="outlined"
          size="small"
          className={classes.link}
        >
          {link.title || link.url}
        </Button>
      )}
    </Grid>
  );
}

ListItem.propTypes = {
  description: PropTypes.string,
  image: PropTypes.shape({
    description: PropTypes.string,
    url: PropTypes.string.isRequired,
  }).isRequired,
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
  }),
  name: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  title: PropTypes.string.isRequired,
};
ListItem.defaultProps = {
  description: undefined,
  link: undefined,
  name: undefined,
  onClick: undefined,
  selected: false,
};

export default ListItem;