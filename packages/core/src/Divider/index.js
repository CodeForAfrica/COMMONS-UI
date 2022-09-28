import MaterialDivider from "@mui/material/Divider";
import { ThemeProvider, StyledEngineProvider, createTheme } from "@mui/material/styles";

import { makeStyles } from 'tss-react/mui';

import React from "react";

const theme = createTheme();
const useStyles = makeStyles()(() => ({
  root: {
    width: "100%",
    height: ".2rem",
    background: "#180f49",
  },
}));

export default function Divider(props) {
  const { classes } = useStyles(props, {
    props: props
  });
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <MaterialDivider classes={classes} {...props} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
