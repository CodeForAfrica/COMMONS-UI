import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core";

import SimpleBarReact from "simplebar-react";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  root: {
    width: "100%",
    "& .simplebar-wrapper": {
      height: (props) => props.height,
    },
    "& .simplebar-track": {
      width: "50%",
      backgroundColor: "#f1f1ed", // off-white
      height: typography.pxToRem(8),
    },
    "& .simplebar-track.simplebar-horizontal": {
      [breakpoints.up("md")]: {
        marginLeft: "25%",
      },
    },
    "& .simplebar-track.simplebar-horizontal .simplebar-scrollbar": {
      backgroundColor: palette.primary.light,
      height: typography.pxToRem(8),
      top: 0,
      "&::before": {
        backgroundColor: palette.primary.light,
      },
    },
  },
}));

function ScrollBar({ autoHide, children, height, ...props }) {
  const classes = useStyles({ ...props, height });

  if (!children) {
    return null;
  }
  return (
    <SimpleBarReact
      autoHide={autoHide}
      className={classes.root}
      height={height}
    >
      {children}
    </SimpleBarReact>
  );
}

ScrollBar.propTypes = {
  autoHide: PropTypes.bool,
  children: PropTypes.node,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, // in px
};

ScrollBar.defaultProps = {
  autoHide: false,
  children: undefined,
};

export default ScrollBar;
