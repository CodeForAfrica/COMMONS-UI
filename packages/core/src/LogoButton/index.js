import { IconButton } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(() => ({
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
  const classes = useStyles(props);

  if (!(childrenProp || src)) {
    return null;
  }
  const children = childrenProp || (
    <img {...imgProps} alt={alt || ""} src={src} className={classes.image} />
  );
  return (
    <IconButton
      {...props}
      className={clsx(classes.root, className)}
      size="large"
    >
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
