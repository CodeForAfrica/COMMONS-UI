import React from "react";
import PropTypes from "prop-types";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  text: {
    fontSize: "1.125rem",
    lineHeight: "1.44",
    color: "#000",
  },
});

function Title({ children, ...props }) {
  const classes = useStyles(props);
  return (
    <Typography variant="subtitle1" className={classes.text}>
      {children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Title;
