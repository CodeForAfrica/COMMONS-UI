import MaterialDivider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: ".2rem",
    background: "#180f49",
  },
}));

export default function Divider(props) {
  const classes = useStyles(props);
  return <MaterialDivider classes={classes} {...props} />;
}
