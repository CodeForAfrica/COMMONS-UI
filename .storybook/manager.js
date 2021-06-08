import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";

import logo from "../stories/assets/cfa.png";

addons.setConfig({
  theme: {
    brandImage: logo,
    brandTitle: "COMMONS UI",
    brandUrl: "https://codeforafrica.org",
    ...themes.light,
  },
  panelPosition: "bottom",
  selectedPanel: "storybook/roundtrip",
});
