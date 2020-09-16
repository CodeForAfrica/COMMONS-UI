import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Typography } from "@material-ui/core";
import A from "../A";

import useStyles from "./useStyles";

function Copyright({
  variant,
  color,
  copyright,
  copyrightLogo,
  copyrightYear,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <>
      {(copyright || copyrightLogo || copyrightYear) && (
        <div className={classes.copyright}>
          {copyright && (
            <Typography
              variant={variant}
              color={color}
              className={clsx(classes.text, "copyrightOrganization")}
            >
              {copyright}
            </Typography>
          )}
          {copyrightLogo && (
            <A href={copyrightLogo.url} className="copyrightLogo">
              <img
                src={copyrightLogo.image.url}
                alt={copyrightLogo.image.alt || copyright}
                className={classes.copyrightLogo}
              />
            </A>
          )}
          {copyrightYear && (
            <Typography
              variant={variant}
              color={color}
              className={clsx(classes.text, "copyrightYear")}
            >
              {copyrightYear}
            </Typography>
          )}
        </div>
      )}
    </>
  );
}

Copyright.propTypes = {
  copyright: PropTypes.string,
  copyrightLogo: PropTypes.shape({
    image: PropTypes.shape({
      alt: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
    url: PropTypes.string.isRequired,
  }),
  copyrightYear: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
};

Copyright.defaultProps = {
  copyright: "Outbreak.Africa",
  copyrightLogo: undefined,
  copyrightYear: undefined,
  variant: "caption",
  color: "textSecondary",
};
export default Copyright;
