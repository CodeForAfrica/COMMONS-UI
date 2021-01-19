import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import { Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      paddingBottom: "0.5rem",
    },
  },
  list: {
    listStyle: "none",
    padding: 0,
    paddingTop: "1rem",
    "& > li": {
      marginTop: "2.3125rem",
    },
    [theme.breakpoints.up("md")]: {
      "& > li": {
        marginTop: "1.5rem",
      },
    },
  },
  link: {
    ...theme.typography.caption,
    textDecoration: "none",
  },
  title: {
    lineHeight: "inherit",
  },
}));

function QuickLinks({ options, linkComponent, links, title, ...props }) {
  const classes = useStyles(props);
  const LinkComponent = linkComponent || Link;

  return (
    <div className={classes.root}>
      <Typography variant={options.title.variant} className={classes.title}>
        {title}
      </Typography>
      <Typography
        variant={options.link.variant}
        className={clsx([classes.text, classes.list])}
        component="ul"
      >
        {links.map(({ label, ...others }) => (
          <li key={label}>
            <LinkComponent
              {...others}
              color={options.link.color}
              variant={options.link.variant}
              underline="none"
              className={classes.link}
            >
              {label}
            </LinkComponent>
          </li>
        ))}
      </Typography>
    </div>
  );
}

QuickLinks.propTypes = {
  linkComponent: PropTypes.elementType,
  links: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  options: PropTypes.shape({
    link: PropTypes.shape({
      color: PropTypes.string,
      variant: PropTypes.string,
    }),
    title: PropTypes.shape({
      color: PropTypes.string,
      variant: PropTypes.string,
    }),
  }),
  title: PropTypes.string.isRequired,
};
QuickLinks.defaultProps = {
  linkComponent: undefined,
  options: {
    link: {
      color: "textSecondary",
      variant: "caption",
    },
    title: {
      color: "textSecondary",
      variant: "caption",
    },
  },
};

export default QuickLinks;
