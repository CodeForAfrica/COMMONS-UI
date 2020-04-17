import React, { useCallback } from "react";
import {
  Box,
  Grid,
  makeStyles,
  Toolbar as MuiToolbar,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    "& *": {
      pointerEvents: "all",
    },
  },
});

function ToolbarItems({ children, justify }) {
  const classes = useStyles();
  return (
    <Box
      width="100%"
      position="absolute"
      className={classes.root}
      style={{ pointerEvents: "none " }}
      clone
    >
      <Grid container spacing={1} alignItems="center" justify={justify}>
        {React.Children.toArray(children).map((child) => (
          <Grid item>{child}</Grid>
        ))}
      </Grid>
    </Box>
  );
}

function ToolbarItemsContainer({ children, height }) {
  return (
    <Box
      width="100%"
      height={height}
      display="flex"
      alignItems="center"
      position="relative"
    >
      {children}
    </Box>
  );
}

function Toolbar({ height, activeDrawer, toggleDrawer, children, ...props }) {
  const mapToggleProps = useCallback(
    (child) => {
      if (child.props.toggleDrawer) {
        return React.cloneElement(child, {
          onClick: () => toggleDrawer(child.props.toggleDrawer),
        });
      }
      return child;
    },
    [activeDrawer]
  );
  return (
    <MuiToolbar {...props}>
      <ToolbarItemsContainer height={height}>
        <ToolbarItems justify="flex-start">
          {React.Children.toArray(children)
            .filter((child) => !child.props.end && !child.props.center)
            .map(mapToggleProps)}
        </ToolbarItems>
        <ToolbarItems justify="center">
          {React.Children.toArray(children)
            .filter((child) => child.props.center)
            .map(mapToggleProps)}
        </ToolbarItems>
        <ToolbarItems justify="flex-end">
          {React.Children.toArray(children)
            .filter((child) => child.props.end)
            .map(mapToggleProps)}
        </ToolbarItems>
      </ToolbarItemsContainer>
    </MuiToolbar>
  );
}

export default Toolbar;
