/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { PropTypes } from "prop-types";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& a": {
      color: theme.palette.primary.main,
    },
  },
}));

const RichTypography = React.forwardRef(function RichTypography(
  { children, component, ...props },
  ref
) {
  const classes = useStyles(props);

  if (!children) {
    return null;
  }
  return (
    <Typography
      component={component}
      dangerouslySetInnerHTML={{
        __html: children,
      }}
      {...props}
      ref={ref}
      className={classes.root}
    />
  );
});

RichTypography.propTypes = {
  children: PropTypes.string,
  component: PropTypes.elementType,
};

RichTypography.defaultProps = {
  children: null,
  // We default to `div` to allow other block elements like <p> to be used inside
  // `children`
  component: "div",
};

export default RichTypography;
