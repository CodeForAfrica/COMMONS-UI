import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Grid, Typography } from '@material-ui/core';

import A from '../A';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'left',
    marginTop: '1rem'
  },
  title: {
    paddingTop: '1rem'
  },
  description: {
    [theme.breakpoints.up('md')]: {
      paddingTop: '1rem'
    }
  },
  iconGrid: {
    paddingTop: '1rem'
  },
  subtitleGrid: {
    display: 'none'
  },
  countGrid: {
    display: 'none'
  },
  contentCount: {
    fontSize: '3.125rem',
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.h1.fontSize
    }
  },
  contentText: {
    paddingTop: '1rem',
    paddingBottom: '3rem'
  },
  link: { textDecoration: 'underline', color: '#F9FF71' },
  linkText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingTop: '1rem',
    [theme.breakpoints.up('md')]: {
      paddingTop: '2.7rem'
    }
  }
}));

function Content({
  children,
  title,
  contentCount,
  contentType,
  description,
  link,
  linkTitle,
  target,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <Grid container className={classes.root}>
      { children && 
        <Grid item xs={3} md={12} className={classes.iconGrid}>
          {children}
        </Grid>
      }
      <>
      { title && 
        <Grid item md={12} className={classes.subtitleGrid}>
            <Typography variant="body2" className={classes.title}>
              {title}
            </Typography>
        </Grid>
      }
      </>
      <Grid item md={12} className={classes.countGrid}>
        { contentCount && <Typography variant="h1" className={classes.contentCount}>
          {contentCount}
          </Typography> 
        }
      </Grid>

      <Grid item xs={9} md={12} className={classes.contentText} >
        <Typography variant="h5">{contentType}</Typography>

        <Typography variant="body2" className={classes.description}>
          {description}
        </Typography>

        <A href={link} className={classes.link}>
          <Typography variant="subtitle2" className={classes.linkText}>
            {linkTitle}
          </Typography>
        </A>
      </Grid>
    </Grid>
  );
}

Content.propTypes = {
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
};

Content.defaultProps = {
  children: undefined,
  title: undefined,
  contentCount: undefined,
  description: undefined,
  link: undefined,
  linkTitle: "View More"

};


export default Content;
