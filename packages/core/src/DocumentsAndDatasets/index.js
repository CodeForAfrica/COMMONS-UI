import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Grid, Hidden, Typography } from '@material-ui/core';

import Content from './Content';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#fff',
    // backgroundImage: `url(${dataBackground})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'top left',
    // backgroundSize: '65% 75%',
    [theme.breakpoints.up('md')]: {
      backgroundSize: '69% 100%',
      paddingLeft: 0, // 30px / 16
      marginBottom: '9.143rem'
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 0, // 30px / 16
      backgroundSize: '65% 100%',
      marginBottom: '9.143rem'
    }
  },
  featuredDiv: {
    position: 'absolute',
    width: '28%'
  },
  featuredTitle: {
    fontSize: '2rem'
  },
  featuredDescription: {
    marginTop: '1rem'
  },
  wrapper: {},
  dataWrapper: {
    paddingTop: '4.2rem',
    height: '35.713rem', // 500px / 16
    paddingLeft: '2.143rem',
    paddingRight: '2.143rem',
    [theme.breakpoints.up('md')]: {
      //width: '35.7143rem',
      paddingLeft: 0,
      paddingRight: 0
    }
  },
  documentData: {
    [theme.breakpoints.up('md')]: {
      paddingTop: '9rem',
      paddingRight: '0.5rem',
    }
  },
  datasetData: {
    [theme.breakpoints.up('md')]: {
      paddingTop: '13.1rem',
      paddingLeft: '0.5rem',
      marginTop: 0
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
        <Grid item md={9} container className={classes.dataWrapper}>
          <Hidden smDown>
              <Grid
                  item
                  md={8}
                  container
                  direction="column"
                  className={classes.imageHighlight}
              >
                  {highlightChildren}
              </Grid>
          </Hidden>
          <Grid item md={4} lg={4}>
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
              <div className={classes.documentData}>
              <Content
                  children={documentContent.children}
                  title={documentContent.title}
                  contentCount={documentContent.contentCount}
                  contentType={documentContent.contentType}
                  description={documentContent.description}
                  linkTitle={documentContent.linkTitle}
                  link={documentContent.link}
                  />
              </div>
          </Grid>
        </Grid>
        <Grid item md={3} container className={classes.datasetData}>
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
