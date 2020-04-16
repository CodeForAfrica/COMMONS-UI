import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Grid, Typography } from '@material-ui/core';

import Link from '../Link';

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
    paddingBottom: '2rem'
  },
  link: { textDecoration: 'underline' },
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
    <Grid className={classes.root}>
      { children && 
        <Grid item xs={12}>
          {children}
        </Grid>
      }
      <>
      { title && 
        <Grid item xs={12} className={classes.subtitleGrid}>
            <Typography variant="body2" className={classes.title}>
              {title}
            </Typography>
        </Grid>
      }
      </>
      <Grid item xs={12}>
        { contentCount && <Typography variant="h1" className={classes.contentCount}>
          {contentCount}
          </Typography> 
        }
      </Grid>

      <Grid item xs={12} className={classes.contentText} >
        <Typography variant="h5">{contentType}</Typography>

        <Typography variant="body2" className={classes.description}>
          {description}
        </Typography>

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
  children: undefined,
  title: undefined,
  contentCount: undefined,
  description: undefined,
  link: undefined,
  linkTitle: "View More"

};


export default Content;
