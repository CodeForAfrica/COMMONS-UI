/* eslint-disable react/jsx-props-no-spreading */
import { Box } from "@mui/material";
import { ThemeProvider, StyledEngineProvider, createTheme } from "@mui/material/styles";
import { makeStyles } from 'tss-react/mui';
import PropTypes from "prop-types";
import React from "react";

const theme = createTheme();

const useStyles = makeStyles()({
  root: {
    width: "100%",
  },
});

const Layout = React.forwardRef(function Layout(
  { children, classes: classesProp, className, ...props },
  ref
) {
  const { classes, cx } = useStyles(undefined, {
    props: {
      classes: classesProp
    }
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Box {...props} className={cx(classes.root, className)} ref={ref}>
          {children}
        </Box>
      </ThemeProvider>
    </StyledEngineProvider>
  );
});

Layout.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  className: undefined,
};

export default Layout;
