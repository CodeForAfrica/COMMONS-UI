/* eslint-disable react/jsx-props-no-spreading */
import { ThemeProvider, StyledEngineProvider, createTheme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import Layout from "@/commons-ui/core/Layout";
import RichTypography from "@/commons-ui/core/RichTypography";

const theme = createTheme();
const useStyles = makeStyles(({ typography }) => ({
  /* Styles applied to the root element. */
  root: {
    boxSizing: "border-box",
    display: "block", // Fix IE 11 layout when used with main.
    marginLeft: "auto",
    marginRight: "auto",
    minWidth: typography.pxToRem(360),
    padding: `0 ${typography.pxToRem(15)}`,
    width: "100%",
  },
  title: {},
}));

const Section = React.forwardRef(function Section(
  { children, className, title, titleProps, ...props },
  ref
) {
  const classes = useStyles(props);

  if (!children) {
    return null;
  }
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Layout {...props} className={clsx(classes.root, className)} ref={ref}>
          {title?.length ? (
            <RichTypography
              variant="h2"
              className={classes.title}
              {...titleProps}
            >
              {title}
            </RichTypography>
          ) : null}

          {children}
        </Layout>
      </ThemeProvider>
    </StyledEngineProvider>
  );
});

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string,
    fixed: PropTypes.string,
  }),
  title: PropTypes.string,
  titleProps: PropTypes.shape({}),
};

Section.defaultProps = {
  classes: undefined,
  className: undefined,
  title: undefined,
  titleProps: undefined,
};

export default Section;
