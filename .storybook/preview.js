import { muiTheme } from "storybook-addon-material-ui5";
import { createTheme } from "@mui/material/styles";

import "./styles.css";

const theme = createTheme();

export const decorators = [muiTheme([theme])];

const size = (px) => `${Number.parseFloat(theme.typography.pxToRem(px))}rem`;

const VIEWPORTS = {
  mobile: {
    name: "Mobile",
    styles: {
      height: size(760),
      width: size(360),
    },
    type: "mobile",
  },
  desktop: {
    name: "Desktop",
    styles: {
      height: size(900),
      width: size(1280),
    },
    type: "desktop",
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen",
  viewport: {
    viewports: VIEWPORTS,
    defaultViewport: "desktop",
  },
};
