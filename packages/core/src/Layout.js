/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

const Layout = React.forwardRef(function Layout({ children, ...props }, ref) {
  const classes = useStyles(props);
  return (
    <div className={classes.root} {...props} ref={ref}>
      {children}
    </div>
  );
});

Layout.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.shape({}),
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
