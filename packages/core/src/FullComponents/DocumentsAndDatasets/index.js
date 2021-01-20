import React from "react";

import { useMediaQuery, useTheme } from "@material-ui/core";

import Mobile from "./Mobile";
import Desktop from "./Desktop";

/**
 * Biggest difference between Mobile & Desktop is how background and Section
 * are handled.
 *
 * @param {*} props
 */
function DocumentsAndDatasets(props) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const Component = isDesktop ? Desktop : Mobile;

  return <Component {...props} />;
}
export default DocumentsAndDatasets;
