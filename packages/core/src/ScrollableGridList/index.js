import { Box, ImageList, useMediaQuery, useTheme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import PropTypes from "prop-types";
import React from "react";

import ScrollBar from "@/commons-ui/core/ScrollBar";

const useStyles = makeStyles(() => ({
  root: {
    overflow: "hidden",
    /**
     * The mixture of rem and px set by ImageList is
     * causing height issues resulting in overflow.
     * Stick to px for this component to function correctly.
     */
    height: (props) => props.height,
  },
  gridList: {
    flexWrap: "nowrap",
    // TODO(nyokabi): Material-ui documentation for Grid list component
    //                promote the list into its own layer on Chrome. This cost
    //                memory but helps keeping high FPS.
    transform: "translateZ(0)",
    height: "100%",
    margin: "0 !important",
    overflow: "initial",
    width: "100%",
  },
  scrollBar: {},
}));

function ScrollableGridList({
  autoHide,
  cellHeight,
  children,
  height,
  lg,
  md,
  sm,
  spacing,
  xs,
  ...props
}) {
  const classes = useStyles({ ...props, height: height || cellHeight });
  const theme = useTheme();
  let cols = xs || sm || md || lg;
  // NOTE: Can't use if/else here since useMediaQuery is a hook & all hooks
  //       must be called.
  if (useMediaQuery(theme.breakpoints.up("sm"))) {
    cols = sm || xs;
  }
  if (useMediaQuery(theme.breakpoints.up("md"))) {
    cols = md || sm || xs;
  }
  if (useMediaQuery(theme.breakpoints.up("lg"))) {
    cols = lg || md || sm || xs;
  }

  if (!children) {
    return null;
  }
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="space-around"
      className={classes.root}
    >
      <ScrollBar
        autoHide={autoHide}
        classes={{ root: classes.scrollBar }}
        height={height}
      >
        <ImageList
          cellHeight={cellHeight}
          className={classes.gridList}
          cols={cols}
          spacing={spacing}
        >
          {children}
        </ImageList>
      </ScrollBar>
    </Box>
  );
}

ScrollableGridList.propTypes = {
  autoHide: PropTypes.bool,
  cellHeight: PropTypes.number,
  children: PropTypes.node,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, // in px
  lg: PropTypes.number,
  md: PropTypes.number,
  sm: PropTypes.number,
  spacing: PropTypes.number,
  xs: PropTypes.number.isRequired,
};

ScrollableGridList.defaultProps = {
  autoHide: false,
  cellHeight: undefined,
  children: undefined,
  lg: undefined,
  md: undefined,
  sm: undefined,
  spacing: 16,
};

export default ScrollableGridList;
