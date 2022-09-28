import PropTypes from "prop-types";
import React from "react";
import { ThemeProvider, StyledEngineProvider, createTheme } from "@mui/material/styles";

import Content from "./Content";
import useStyles from "./useStyles";

const theme = createTheme();

function DataSourceContent({ children, datasource, ...props }) {
  const classes = useStyles(props);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Content
          {...datasource}
          classes={{
            root: classes.documents,
            contentType: classes.documentsContentType,
            description: classes.documentsDescription,
            icon: classes.documentsIcon,
            link: classes.documentsLink,
          }}
        />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

DataSourceContent.propTypes = {
  children: PropTypes.node,
  datasource: PropTypes.shape({
    icon: PropTypes.node,
  }),
};

DataSourceContent.defaultProps = {
  children: null,
  datasource: {
    contentType: "datasource",
  },
};

export default DataSourceContent;
