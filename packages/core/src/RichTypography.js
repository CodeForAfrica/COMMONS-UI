/* eslint-disable react/jsx-props-no-spreading */

import { Typography } from "@mui/material";
import { ThemeProvider, StyledEngineProvider, createTheme } from "@mui/material/styles";
import { makeStyles } from 'tss-react/mui';
import { PropTypes } from "prop-types";
import React from "react";

const theme = createTheme();
const useStyles = makeStyles()((theme) => ({
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
  const { classes } = useStyles(props, {
    props: props
  });

  if (!children) {
    return null;
  }
  if (typeof children === "string") {
    return (
      <StyledEngineProvider injectFirst>
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
      </StyledEngineProvider>
    );
  }
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Typography component={component} {...props} ref={ref}>
          {children}
        </Typography>
      </ThemeProvider>
    </StyledEngineProvider>
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
