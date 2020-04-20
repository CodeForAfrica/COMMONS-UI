import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';

import Content from './Content';
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
            md={5}
            sm={12}
            container
            justify="center"
            className={classes.imageHighlight}
        >
            {highlightChildren}
        </Grid>
        <Grid item sm={12} md={3} lg={3} className={classes.documentData}>
          { (title || description) && 
            <div className={classes.featuredDiv}>
                <Typography className={classes.featuredTitle}>
                    {title}
                </Typography>
                <Typography variant="body2" className={classes.featuredDescription}>
                    {description}
                </Typography>
            </div>
          }
            <Content
                children={documentContent.children}
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
                  linkText: classes.documentLinkText
                }}
                />
        </Grid>
        <Grid item sm={12} md={4} className={classes.datasetData}>
            <Content 
                children={datasetContent.children}
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
                  linkText: classes.datasetLinkText
                }}
            />
        </Grid>
      </Grid>
  );
}

DocumentsAndDatasets.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    highlightChildren: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
        ]),
    datasetContent: PropTypes.shape({
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
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
            PropTypes.node
          ]),
          title: PropTypes.string,
          contentCount: PropTypes.string,
          contentType: PropTypes.string.isRequired,
          description: PropTypes.string,
          link: PropTypes.string,
          linkTitle: PropTypes.string,
    })
}

DocumentsAndDatasets.defaultProps = {
  title: undefined,
  description: undefined,
  highlightChildren: null,
  documentContent: {
    children: null,
    contentType: "Documents"
  },
  datasetContent: {
    children: null,
    contentType: "Datasets"
  }
}

export default DocumentsAndDatasets;
