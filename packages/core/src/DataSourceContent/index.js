import PropTypes from "prop-types";
import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import Content from "./Content";
import useStyles from "./useStyles";

const theme = createMuiTheme();

function DataSourceContent({ children, datasource, ...props }) {
  const classes = useStyles(props);

  return (
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
