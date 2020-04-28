import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import { Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "3.666666667rem",
    textAlign: "center",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      marginTop: 0,
      width: "auto",
      textAlign: "right",
    },
  },
  list: {
    listStyle: "none",
    padding: 0,
    "& > li": {
      borderRight: `1px solid ${theme.palette.text.secondary}`,
      display: "inline",
      padding: "0 2rem",
    },
    "& > li:last-of-type": {
      border: "none",
      paddingRight: 0,
    },
  },
  link: {},
}));

function LegalLinks({ linkComponent, links, ...props }) {
  const classes = useStyles(props);
  const LinkComponent = linkComponent || Link;

  return (
    <div className={classes.root}>
      <Typography
        variant="caption"
        color="textSecondary"
        className={clsx([classes.text, classes.list])}
        component="ul"
      >
        {links.map(({ onClick, href, label, ...others }) => (
          <li key={href}>
            {onClick ? (
              <Link
                href={href}
                color="textSecondary"
                variant="caption"
                underline="none"
                className={classes.link}
                onClick={(e) => onClick(e)}
              >
                {label}
              </Link>
            ) : (
              <LinkComponent
                {...others}
                color="textSecondary"
                href={href}
                variant="caption"
                underline="none"
                className={classes.link}
              >
                {label}
              </LinkComponent>
            )}
          </li>
        ))}
      </Typography>
    </div>
  );
}

LegalLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  linkComponent: PropTypes.elementType,
};
LegalLinks.defaultProps = {
  linkComponent: undefined,
};

export default LegalLinks;
