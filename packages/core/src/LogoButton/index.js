import { IconButton } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  root: {},
  image: {
    width: "100%",
    height: "auto",
  },
}));

function LogoButton({
  alt,
  children: childrenProp,
  className,
  imgProps,
  src,
  ...props
}) {
  const { classes, cx } = useStyles(props, {
    props,
  });

  if (!(childrenProp || src)) {
    return null;
  }
  const children = childrenProp || (
    <img {...imgProps} alt={alt || ""} src={src} className={classes.image} />
  );
  return (
    <IconButton {...props} className={cx(classes.root, className)} size="large">
      {children}
    </IconButton>
  );
}

LogoButton.propTypes = {
  alt: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  imgProps: PropTypes.shape({}),
  src: PropTypes.string,
};

LogoButton.defaultProps = {
  alt: undefined,
  children: undefined,
  className: undefined,
  imgProps: undefined,
  src: undefined,
};

export default LogoButton;
