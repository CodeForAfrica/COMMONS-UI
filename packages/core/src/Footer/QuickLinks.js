import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import { Link as MuiLink, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

import Title from "./Title";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "12.8125rem",
      paddingBottom: "0.5rem",
    },
  },
  text: {
    color: "#000",
  },
  list: {
    listStyle: "none",
    margin: "1.5rem 0 0 0",
    padding: 0,
    paddingTop: "1rem",
  },
  link: {
    fontSize: "0.9375rem",
    textDecoration: "none",
  },
  titleText: {},
}));

function QuickLinks({ links, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Title classes={{ text: classes.titleText }}>{links.title}</Title>
      <Typography
        variant="subtitle2"
        className={classNames([classes.text, classes.list])}
        component="ul"
      >
        {links.links.map((link) => (
          <li key={link.label}>
            {link.onClick ? (
              <MuiLink
                href={link.href}
                underline="always"
                className={classNames([classes.text, classes.link])}
                onClick={(e) => link.onClick(e)}
              >
                {link.label}
              </MuiLink>
            ) : (
              <Link
                href={link.href}
                underline="always"
                className={classNames([classes.text, classes.link])}
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </Typography>
    </div>
  );
}

QuickLinks.propTypes = {
  links: PropTypes.shape({
    title: PropTypes.string.isRequired,
    links: PropTypes.object.isRequired,
  }).isRequired,
};

export default QuickLinks;
