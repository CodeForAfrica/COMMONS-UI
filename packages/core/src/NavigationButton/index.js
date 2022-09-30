/* eslint-disable react/no-danger, jsx-a11y/control-has-associated-label */
import { IconButton } from "@mui/material";
import { PropTypes } from "prop-types";
import React from "react";

import useStyles from "./useStyles";

function NavigationButton({ children, onClick, ...props }) {
  const classes = useStyles(props);

  return (
    <IconButton
      className={classes.root}
      onClick={onClick}
      {...props}
      size="large"
    >
      {children}
    </IconButton>
  );
}

NavigationButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};

NavigationButton.defaultProps = {
  children: undefined,
};

export default NavigationButton;
