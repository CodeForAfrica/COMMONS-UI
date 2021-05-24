import React from "react";
import PropTypes from "prop-types";

import Content from "./Content";
import useStyles from "./useStyles";

function DataSourceContent({ children, datasource, ...props }) {
  const classes = useStyles(props);

  return (
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
