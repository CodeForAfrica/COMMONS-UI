/* eslint-disable react/jsx-props-no-spreading */
import { Box } from "@mui/material";
import { makeStyles } from 'tss-react/mui';
import PropTypes from "prop-types";
import React from "react";

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
        <Box {...props} className={cx(classes.root, className)} ref={ref}>
          {children}
        </Box>
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
