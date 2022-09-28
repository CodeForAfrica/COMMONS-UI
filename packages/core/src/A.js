import { Link } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { ThemeProvider, StyledEngineProvider, createTheme } from "@mui/material/styles";

/**
 * anchor element that has `target="_blank" rel: "noopener noreferrer"`
 * see: https://material-ui.com/components/links/#security
 */

const theme = createTheme();

const A = React.forwardRef(function A({ children, href, ...props }, ref) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Link
          {...props}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          ref={ref}
        >
          {children}
        </Link>
      </ThemeProvider>
    </StyledEngineProvider>
  );
});

A.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export default A;
