import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Grid, Typography } from '@material-ui/core';

import Link from 'components/Link';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'left',
    [theme.breakpoints.up('md')]: {
      width: '11rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '21.45rem'
    }
  },
  title: {
    color: theme.palette.primary.dark,
    opacity: '0.6',
    [theme.breakpoints.up('md')]: {
      paddingTop: '1rem'
    }
  },
  button: {
    border: '1px solid black',
    '&:hover': {
      backgroundColor: 'white'
    }
  },
  subtitleGrid: {
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem'
  },
  contentCount: {
    fontSize: '3.125rem',
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.h1.fontSize
    }
  },
  contentText: {
    paddingTop: '1rem',
    width: '80%',
    [theme.breakpoints.up('md')]: {
      height: '4.76rem',
      width: 'auto'
    }
  },
  link: { textDecoration: 'none' },
  linkText: {
    fontWeight: 'bold',
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
    <Grid className={classes.root}>
      { children && 
        <Grid item xs={12}>
          {children}
        </Grid>
      }
      { title && 
        <Grid item xs={12} className={classes.subtitleGrid}>
            <Typography variant="body2" className={classes.title}>
              {title}
            </Typography>
        </Grid>
      }

      <Grid item xs={12}>
        { contentCount && <Typography variant="h1" className={classes.contentCount}>
          {contentCount}
          </Typography> 
        }
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h5">{contentType}</Typography>
        <div className={classes.contentText}>
          <Typography variant="body2" className={classes.title}>
            {description}
          </Typography>
        </div>

        <Link href={link} className={classes.link}>
          <Typography variant="subtitle2" className={classes.linkText}>
            {linkTitle}
          </Typography>
        </Link>
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
  children: null,
  title: undefined,
  contentCount: undefined,
  description: undefined,
  link: undefined,
  linkTitle: "View More"

};


export default Content;
