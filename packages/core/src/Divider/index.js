import MaterialDivider from "@material-ui/core/Divider";
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";

import React from "react";

const theme = createMuiTheme();
const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: ".2rem",
    background: "#180f49",
  },
}));

export default function Divider(props) {
  const classes = useStyles(props);
  return (
    <ThemeProvider theme={theme}>
      <MaterialDivider classes={classes} {...props} />
    </ThemeProvider>
  );
}
