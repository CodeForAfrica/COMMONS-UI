import PropTypes from "prop-types";
import React from "react";
import { ThemeProvider, StyledEngineProvider, createTheme } from "@mui/material/styles";

import About from "./About";
import Initiative from "./Initiative";
import useStyles from "./useStyles";

const theme = createTheme();

function AboutOrganization({ options, children, initiative, ...props }) {
  const classes = useStyles(props);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <About {...options.about} classes={{ about: classes.about }}>
            {children}
          </About>
          {initiative && (
            <Initiative
              {...options.initiative}
              classes={{ aboutInitiative: classes.initiative }}
            >
              {initiative}
            </Initiative>
          )}
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

AboutOrganization.propTypes = {
  children: PropTypes.string.isRequired,
  initiative: PropTypes.node,
  options: PropTypes.shape({
    about: PropTypes.shape({}),
    initiative: PropTypes.shape({}),
  }),
};

AboutOrganization.defaultProps = {
  initiative: null,
  options: {},
};

export default AboutOrganization;
