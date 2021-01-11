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
      paddingTop: "1rem",
    },
    "& > li:first-of-type": {
      paddingTop: 0,
    },
    [theme.breakpoints.up("md")]: {
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
  },
  link: {},
}));

function LegalLinks({ color, variant, linkComponent, links, ...props }) {
  const classes = useStyles(props);
  const LinkComponent = linkComponent || Link;

  return (
    <div className={classes.root}>
      <Typography
        variant={variant}
        color={color}
        className={clsx([classes.text, classes.list])}
        component="ul"
      >
        {links.map(({ label, ...others }) => (
          <li key={label}>
            <LinkComponent
              {...others}
              variant={variant}
              color={color}
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

LegalLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  linkComponent: PropTypes.elementType,
  variant: PropTypes.string,
  color: PropTypes.string,
};
LegalLinks.defaultProps = {
  linkComponent: undefined,
  variant: "caption",
  color: "textSecondary",
};

export default LegalLinks;
