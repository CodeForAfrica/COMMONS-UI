import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, select, number } from "@storybook/addon-knobs";
import { Navigation, SecondaryNavigation } from "@commons-ui/core";
import {
  Button,
  Container,
  Box,
  Popover,
  Menu,
  MenuItem,
  MenuList,
} from "@material-ui/core";

import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

storiesOf("COMMONS UI/Navigation", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Navigation>
      <Button>Left</Button>
      <Button>Left</Button>
      <Button center>Center</Button>
      <Button center>Center</Button>
      <Button toggleDrawer="search" end>
        End
      </Button>
    </Navigation>
  ))
  .add("Scrolling", () => (
    <>
      <Navigation
        scrolling={select("scrolling", ["hide", "elevate", ""], "hide")}
        scrollThreshold={number("scrollThreshold", 0)}
        elevation={number("elevation", 4)}
      >
        <Button>Main Navigation Bar</Button>
        <Button center>Center</Button>
        <Button center>Center</Button>
        <Button toggleDrawer="search" end>
          End
        </Button>
      </Navigation>
      <Container>
        <Box my={2}>
          {[...new Array(100)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box>
      </Container>
    </>
  ))
  .add("Secondary Navigation", () => (
    <>
      <Navigation
        elevation={number("elevation", 4)}
        scrollThreshold={number("scrollThreshold", 0)}
        enableSecondaryNavbar
      >
        <Button>Main Navigation Bar</Button>
        <Button center>Center</Button>
        <PopupState variant="popover" popupId="demoPopover" center>
          {(popupState) => (
            <div>
              <Button variant="contained" {...bindTrigger(popupState)}>
                Open Popover
              </Button>
              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <MenuList>
                  <MenuItem onClick={popupState.close}>Cake</MenuItem>
                  <MenuItem onClick={popupState.close}>Death</MenuItem>
                </MenuList>
              </Popover>
            </div>
          )}
        </PopupState>
        <Button toggleDrawer="search" end>
          End
        </Button>
      </Navigation>
      <SecondaryNavigation>
        <Button>Secondary Navigation Bar</Button>
        <Button center>Center</Button>
      </SecondaryNavigation>
      <Container>
        <Box my={2}>
          {[...new Array(100)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box>
      </Container>
    </>
  ));
