/* eslint-disable react/no-danger, jsx-a11y/control-has-associated-label */
import React from "react";
import { PropTypes } from "prop-types";

import useStyles from "./useStyles";

function Profile({ onClick, ...props }) {
  const classes = useStyles(props);

  return (
    <div
      role="button"
      tabIndex={0}
      className={classes.root}
      onClick={onClick}
      onKeyPress={undefined}
      {...props}
    />
  );
}

Profile.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Profile;
