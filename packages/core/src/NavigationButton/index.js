/* eslint-disable react/no-danger, jsx-a11y/control-has-associated-label */
import { IconButton } from "@mui/material";
import { PropTypes } from "prop-types";
import React from "react";
import { ThemeProvider, StyledEngineProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();
import useStyles from "./useStyles";

function NavigationButton({ children, onClick, ...props }) {
  const classes = useStyles(props);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <IconButton className={classes.root} onClick={onClick} {...props} size="large">
          {children}
        </IconButton>
      </ThemeProvider>
    </StyledEngineProvider>
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
