import { Link } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

/**
 * anchor element that has `target="_blank" rel: "noopener noreferrer"`
 * see: https://material-ui.com/components/links/#security
 */

const theme = createMuiTheme();

const A = React.forwardRef(function A({ children, href, ...props }, ref) {
  return (
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
  );
});

A.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export default A;
