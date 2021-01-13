import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import { Typography } from "@material-ui/core";
import A from "../A";

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {},
  organization: {
    marginBottom: "2.243125rem",
    [breakpoints.up("md")]: {
      marginBottom: "4.305625rem",
    },
  },
  organizationLogo: {
    width: "13.875rem",
    height: "auto",
    [breakpoints.up("md")]: {
      width: "18.3175rem",
    },
  },
  copyright: {
    marginTop: "1.618125rem",
    order: 3,
    textAlign: "center",
    [breakpoints.up("md")]: {
      marginTop: 0,
      order: 2,
    },
  },
  copyrightLogo: {
    marginLeft: "0.80375rem",
    verticalAlign: "middle",
  },
  text: {},
}));

function Copyright({ copyright, icon, year, url, ...props }) {
  const classes = useStyles(props);

  return (
    <>
      {(copyright || icon || year) && (
        <div className={clsx(classes.copyright, classes.root)}>
          {copyright && (
            <Typography className={clsx(classes.text, classes.copyrightText)}>
              {copyright}
            </Typography>
          )}
          {icon && (
            <A href={url} className="copyrightLogo">
              <img
                src={icon}
                alt={copyright}
                className={classes.copyrightIcon}
              />
            </A>
          )}
          {year && (
            <Typography className={clsx(classes.text, classes.copyrightYear)}>
              {year}
            </Typography>
          )}
        </div>
      )}
    </>
  );
}

Copyright.propTypes = {
  copyright: PropTypes.string,
  icon: PropTypes.string,
  url: PropTypes.string,
  year: PropTypes.string,
};

Copyright.defaultProps = {
  copyright: "",
  icon: undefined,
  year: undefined,
  url: undefined,
};
export default Copyright;
