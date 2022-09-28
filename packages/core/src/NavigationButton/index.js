/* eslint-disable react/no-danger, jsx-a11y/control-has-associated-label */
import { IconButton } from "@material-ui/core";
import { PropTypes } from "prop-types";
import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme();
import useStyles from "./useStyles";

function NavigationButton({ children, onClick, ...props }) {
  const classes = useStyles(props);

  return (
    <ThemeProvider theme={theme}>
      <IconButton className={classes.root} onClick={onClick} {...props}>
        {children}
      </IconButton>
    </ThemeProvider>
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
