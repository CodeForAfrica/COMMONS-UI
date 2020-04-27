import React from "react";
import PropTypes from "prop-types";

import { Grid } from "@material-ui/core";

import RichTypography from "../RichTypography";
import Content from "./Content";
import useStyles from "./useStyles";

function DocumentsAndDatasets({
  highlightChildren,
  title,
  description,
  datasetContent,
  documentContent,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <Grid container className={classes.root}>
      <Grid
        item
        xs={12}
        md={5}
        container
        justify="center"
        className={classes.imageHighlight}
      >
        {highlightChildren}
      </Grid>
      <Grid item xs={12} md={7} container justify="space-between">
        <Grid item xs={12} className={classes.heading}>
          <RichTypography variant="h2" color="textSecondary">
            {title}
          </RichTypography>
          <RichTypography variant="body1" color="textSecondary">
            {description}
          </RichTypography>
        </Grid>
        <Grid item xs={12} container>
          <Grid item xs={12} md={6}>
            <Content
              title={documentContent.title}
              contentCount={documentContent.contentCount}
              contentType={documentContent.contentType}
              description={documentContent.description}
              linkTitle={documentContent.linkTitle}
              link={documentContent.link}
              classes={{
                root: classes.documentContentRoot,
                title: classes.documentContentTitle,
                description: classes.documentDescription,
                iconGrid: classes.documentIconGrid,
                subtitleGrid: classes.documentSubtitleGrid,
                countGrid: classes.documentCountGrid,
                contentCount: classes.documentContentCount,
                contentText: classes.documentContentText,
                link: classes.documentLink,
                linkText: classes.documentLinkText,
              }}
            >
              {documentContent.children}
            </Content>
          </Grid>
          <Grid item xs={12} md={6}>
            <Content
              title={datasetContent.title}
              contentCount={datasetContent.contentCount}
              contentType={datasetContent.contentType}
              description={datasetContent.description}
              linkTitle={datasetContent.linkTitle}
              link={datasetContent.link}
              classes={{
                root: classes.datasetContentRoot,
                title: classes.datasetContentTitle,
                description: classes.datasetDescription,
                iconGrid: classes.datasetIconGrid,
                subtitleGrid: classes.datasetSubtitleGrid,
                countGrid: classes.datasetCountGrid,
                contentCount: classes.datasetContentCount,
                contentText: classes.datasetContentText,
                link: classes.datasetLink,
                linkText: classes.datasetLinkText,
              }}
            >
              {datasetContent.children}
            </Content>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

DocumentsAndDatasets.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  highlightChildren: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  datasetContent: PropTypes.shape({
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    title: PropTypes.string,
    contentCount: PropTypes.string,
    contentType: PropTypes.string.isRequired,
    description: PropTypes.string,
    link: PropTypes.string,
    linkTitle: PropTypes.string,
  }),
  documentContent: PropTypes.shape({
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    title: PropTypes.string,
    contentCount: PropTypes.string,
    contentType: PropTypes.string.isRequired,
    description: PropTypes.string,
    link: PropTypes.string,
    linkTitle: PropTypes.string,
  }),
};

DocumentsAndDatasets.defaultProps = {
  title: undefined,
  description: undefined,
  highlightChildren: null,
  documentContent: {
    children: null,
    contentType: "Documents",
  },
  datasetContent: {
    children: null,
    contentType: "Datasets",
  },
};

export default DocumentsAndDatasets;
