import React, { useEffect, useState, useContext } from "react";
import ReactDOM from "react-dom";
import { AppBar, useScrollTrigger, useTheme, Slide } from "@material-ui/core";

import Drawer from "./Drawer";
import Toolbar from "./Toolbar";
import NavigationContext, { withNavigationProvider } from "./Context";

export const SECONDARY_NAVIGATION_ID = "nav--secondary";

function SecondaryNavigationComponent({ children, height = "60px" }) {
  const { activeDrawer, toggleDrawer } = useContext(NavigationContext);
  const [node, setNode] = useState(null);
  useEffect(() => {
    setNode(
      document.getElementById(SECONDARY_NAVIGATION_ID) &&
        ReactDOM.createPortal(
          <Toolbar
            secondary
            variant="dense"
            height={height}
            activeDrawer={activeDrawer}
            toggleDrawer={toggleDrawer}
          >
            {children}
          </Toolbar>,
          document.getElementById(SECONDARY_NAVIGATION_ID)
        )
    );
  }, [children]);
  return node;
}

export const SecondaryNavigation = withNavigationProvider(
  SecondaryNavigationComponent
);

function Navigation({
  enableSecondaryNavbar,
  scrollThreshold = 0,
  scrollTarget,
  elevation: elevationProp = 4,
  children = [],
  position = "fixed",
  height = "60px",
  scrolling,
  ...props
}) {
  const theme = useTheme();
  const { activeDrawer, toggleDrawer } = useContext(NavigationContext);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: scrollThreshold,
    target: scrollTarget || window ? scrollTarget || window : undefined,
  });

  const elevation =
    theme.props.MuiAppBar && theme.props.MuiAppBar.elevation
      ? theme.props.MuiAppBar.elevation
      : elevationProp;

  return (
    <>
      {enableSecondaryNavbar && (
        <Slide direction="down" in={trigger}>
          <AppBar
            style={{ zIndex: 9999 }}
            id={SECONDARY_NAVIGATION_ID}
          ></AppBar>
        </Slide>
      )}
      <Slide
        appear={false}
        direction="down"
        in={enableSecondaryNavbar || scrolling !== "hide" || !trigger}
      >
        <AppBar
          position={position}
          elevation={scrolling !== "elevate" || trigger ? elevation : 0}
          {...props}
        >
          <Toolbar
            variant="dense"
            height={height}
            activeDrawer={activeDrawer}
            toggleDrawer={toggleDrawer}
          >
            {children}
          </Toolbar>
        </AppBar>
      </Slide>
      {/*
       * https://material-ui.com/components/app-bar/#fixed-placement
       * When you render the app bar position fixed, it can cause some part of your content to be invisible, behind the app bar.
       */}
      {position === "fixed" && <div style={{ marginTop: height }} />}

      {/* Navigation drawer */}
      <Drawer
        open={activeDrawer !== null}
        onClose={() => setActiveDrawer(null)}
        items={[
          {
            xs: 4,
            component: "MenuList",
            props: {
              links: [{ title: "Test", href: "#test" }],
            },
          },
          {
            xs: 4,
            items: [
              {
                xs: 12,
                component: "MenuList",
                props: {
                  links: [{ title: "Test", href: "#test" }],
                },
              },
              {
                xs: 12,
                component: "MenuList",
                props: {
                  links: [{ title: "Test", href: "#test" }],
                },
              },
              {
                xs: 12,
                component: "MenuList",
                props: {
                  links: [{ title: "Test", href: "#test" }],
                },
              },
            ],
          },
          {
            xs: 4,
            component: "MenuList",
            props: {
              links: [{ title: "Test", href: "#test" }],
            },
          },
        ]}
      />
    </>
  );
}

export default withNavigationProvider(Navigation);
