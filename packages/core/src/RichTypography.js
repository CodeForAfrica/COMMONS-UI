/* eslint-disable react/jsx-props-no-spreading */

import { Typography } from "@material-ui/core";
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";
import { PropTypes } from "prop-types";
import React from "react";

const theme = createMuiTheme();
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
  if (typeof children === "string") {
    return (
      <ThemeProvider theme={theme}>
        <Typography
          // We default to `div` to allow other block elements like <p> to be used inside
          // `children`
          component={component || "div"}
          dangerouslySetInnerHTML={{
            __html: children,
          }}
          {...props}
          ref={ref}
          classes={classes}
        />
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <Typography component={component} {...props} ref={ref}>
        {children}
      </Typography>
    </ThemeProvider>
  );
});

RichTypography.propTypes = {
  children: PropTypes.node,
  component: PropTypes.elementType,
};

RichTypography.defaultProps = {
  children: null,
  component: undefined,
};

export default RichTypography;
