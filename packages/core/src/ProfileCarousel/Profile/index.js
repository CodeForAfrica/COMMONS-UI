/* eslint-disable react/no-danger, jsx-a11y/control-has-associated-label */
import React from "react";
import { PropTypes } from "prop-types";

import clsx from "clsx";

import { Typography } from "@material-ui/core";

import useStyles from "./useStyles";

function Profile({
  description,
  image,
  name,
  onClick,
  selected,
  title,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <div
      role="button"
      tabIndex={0}
      className={classes.profile}
      onClick={onClick}
      onKeyUp={undefined}
      {...props}
    >
      <img
        alt={image.description || name || title}
        src={image.url}
        className={clsx(classes.profilePicture, {
          [classes.profilePictureSelected]: selected,
        })}
      />
      {name && name.length > 0 && (
        <Typography
          className={clsx(classes.profileName, {
            [classes.profileNameSelected]: selected,
          })}
        >
          {name}
        </Typography>
      )}
      <Typography className={classes.profileTitle}>{title}</Typography>
      {description && description.length > 0 && (
        <Typography
          className={clsx(classes.description, {
            [classes.descriptionSelected]: selected,
          })}
        >
          {description}
        </Typography>
      )}
    </div>
  );
}

Profile.propTypes = {
  description: PropTypes.string,
  image: PropTypes.shape({
    description: PropTypes.string,
    url: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.string,
  title: PropTypes.string.isRequired,
};
Profile.defaultProps = {
  description: undefined,
  name: undefined,
  onClick: undefined,
  selected: false,
};

export default Profile;
