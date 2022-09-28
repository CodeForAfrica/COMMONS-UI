import { Typography } from "@mui/material";
import { ThemeProvider, StyledEngineProvider, createTheme } from "@mui/material/styles";
import { makeStyles } from 'tss-react/mui';
import PropTypes from "prop-types";
import React from "react";

import A from "@/commons-ui/core/A";

const theme = createTheme();

const useStyles = makeStyles()(({ breakpoints }) => ({
  root: {},
  organization: {
    marginBottom: "2.243125rem",
    [breakpoints.up("md")]: {
      marginBottom: "4.305625rem",
    },
  },
  organizationLogo: {
    width: "13.875rem",
    height: "auto",
    [breakpoints.up("md")]: {
      width: "18.3175rem",
    },
  },
  copyright: {
    marginTop: "1.618125rem",
    order: 3,
    textAlign: "center",
    [breakpoints.up("md")]: {
      marginTop: 0,
      order: 2,
    },
  },
  copyrightLogo: {
    marginLeft: "0.80375rem",
    verticalAlign: "middle",
  },
  text: {},
}));

function Copyright({ copyright, icon, variant, year, url, ...props }) {
  const { classes, cx } = useStyles(props, {
    props: props
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        {(copyright || icon || year) && (
          <div className={cx(classes.copyright, classes.root)}>
            {copyright && (
              <Typography
                variant={variant}
                className={cx(classes.text, classes.copyrightText)}
              >
                {copyright}
              </Typography>
            )}
            {icon && (
              <A href={url} className="copyrightLogo">
                <img
                  src={icon}
                  alt={copyright}
                  className={classes.copyrightIcon}
                />
              </A>
            )}
            {year && (
              <Typography
                variant={variant}
                className={cx(classes.text, classes.copyrightYear)}
              >
                {year}
              </Typography>
            )}
          </div>
        )}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

Copyright.propTypes = {
  copyright: PropTypes.string,
  icon: PropTypes.string,
  variant: PropTypes.string,
  url: PropTypes.string,
  year: PropTypes.string,
};

Copyright.defaultProps = {
  copyright: "Copyright",
  icon: undefined,
  year: undefined,
  variant: "body1",
  url: "",
};
export default Copyright;
