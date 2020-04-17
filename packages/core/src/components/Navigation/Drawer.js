import React, { useCallback } from "react";
import {
  Drawer as MUIDrawer,
  Grid,
  MenuList as MUIMenuList,
  MenuItem,
  makeStyles,
} from "@material-ui/core";

function MenuList({ links }) {
  return (
    <MUIMenuList>
      {links.map((link) => (
        <MenuItem component="a" href={link.href}>
          {link.title}
        </MenuItem>
      ))}
    </MUIMenuList>
  );
}

const renderComponent = (component, props) => {
  if (component === "MenuList") {
    return <MenuList {...props} />;
  }
  return;
};

const useStyles = makeStyles({
  paperAnchorTop: ({ offsetTop }) => ({
    top: offsetTop,
  }),
});

function Drawer({
  items: itemsProp,
  offsetTop = "50px",
  anchor = "top",
  open,
  ...props
}) {
  const classes = useStyles({ offsetTop });
  const renderItems = useCallback(
    (items) =>
      items.map(
        ({ items, render, component, props: componentProps, ...itemProps }) => (
          <Grid item {...itemProps}>
            {render && render()}
            {component && renderComponent(component, componentProps)}
            {items && <Grid container>{renderItems(items)}</Grid>}
          </Grid>
        )
      ),
    []
  );
  return (
    <MUIDrawer
      style={{ top: offsetTop }}
      classes={{ paperAnchorTop: classes.paperAnchorTop }}
      BackdropProps={{
        style: {
          top: offsetTop,
        },
      }}
      anchor={anchor}
      open={open}
      {...props}
    >
      <Grid container role="presentation">
        {renderItems(itemsProp)}
      </Grid>
    </MUIDrawer>
  );
}

export default Drawer;
