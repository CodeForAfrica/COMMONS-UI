import React from 'react';

import { makeStyles, Grid, Hidden } from '@material-ui/core';

import dataBackground from 'assets/images/bg/databg.png';
import Content from './Content';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#fff',
    backgroundImage: `url(${dataBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top left',
    backgroundSize: '65% 75%',
    marginTop: '5rem',
    marginBottom: '4.57rem',
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
  wrapper: {
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '66.59rem' // .75 of lg
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '81.3571429rem'
    }
  },
  dataWrapper: {
    paddingTop: '4.2rem',
    height: '35.713rem', // 500px / 16
    paddingLeft: '2.143rem',
    paddingRight: '2.143rem',
    [theme.breakpoints.up('md')]: {
      width: '35.7143rem',
      marginLeft: '-9.07143rem',
      paddingLeft: 0,
      paddingRight: 0
    }
  },
  highlight: {
    marginLeft: 0,
    height: '2.858rem',
    background: '#e7e452',
    [theme.breakpoints.up('md')]: {
      width: '16.6285rem' // 60% of img
    },
    [theme.breakpoints.up('lg')]: {
      width: '24.286rem' // 340px / 16
    }
  },
  documentData: {
    [theme.breakpoints.up('md')]: {
      paddingTop: '3.5625rem',
      paddingLeft: '5rem'
    }
  },
  datasetData: {
    paddingLeft: '2.143rem',
    paddingRight: '2.143rem',
    marginTop: '-9.143rem',
    [theme.breakpoints.up('md')]: {
      paddingTop: '8.02rem',
      paddingLeft: '11.423rem',
      paddingRight: 0,
      marginTop: 0
    }
  }
}));

function DocumentsAndDatasets(props) {
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
          <Grid item md={4} lg={4} className={classes.documentData}>
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
        </Grid>
        <Grid item md={4} lg={3} container className={classes.datasetData}>
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

export default DocumentsAndDatasets;
