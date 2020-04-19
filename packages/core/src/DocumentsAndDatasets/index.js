import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Grid, Typography } from '@material-ui/core';

import Content from './Content';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.up('md')]: {
      backgroundSize: '69% 100%',
      paddingLeft: 0,
      paddingRight: 0,
      marginBottom: '9.143rem'
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 0, // 30px / 16
      backgroundSize: '65% 100%',
      marginBottom: '9.143rem'
    }
  },
  featuredDiv: {
    display: 'block',
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      top: '10%',
      width: '28%'
    }
  },
  featuredTitle: {
    width: '100%',
    fontSize: '2rem'
  },
  featuredDescription: {
    width: '100%',
    marginTop: '1rem'
  },
  wrapper: {},
  documentData: {
    backgroundColor: '#0050FF',
    paddingLeft: '1.25rem',
    paddingRight: '1.25rem',
    [theme.breakpoints.up('md')]: {
      paddingTop: '14.9rem',
      paddingLeft: '0.5rem',
      marginTop: 0
    }
  },
  datasetData: {
    paddingLeft: '1.25rem',
    paddingRight: '1.25rem',
    [theme.breakpoints.up('md')]: {
      paddingTop: '14.9rem',
      paddingLeft: '0.5rem',
      marginTop: 0
    }
  },
  imageHighlight: {
    width: '100%',
    paddingLeft: '1.25rem',
    paddingRight: '1.25rem',
    [theme.breakpoints.up('md')]: {
      width: '60%',
      display: 'flex',
      alignItems: 'flex-end',
      paddingLeft: 0,
      paddingRight: 0
    }
  }
}));

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
    <div className={classes.root}>
      <Grid container className={classes.wrapper}>
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
                />
        </Grid>
        <Grid item sm={12} md={4} container className={classes.datasetData}>
            <Content 
                children={datasetContent.children}
                title={datasetContent.title}
                contentCount={datasetContent.contentCount}
                contentType={datasetContent.contentType}
                description={datasetContent.description}
                linkTitle={datasetContent.linkTitle}
                link={datasetContent.link}
            />
        </Grid>
      </Grid>
    </div>
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
