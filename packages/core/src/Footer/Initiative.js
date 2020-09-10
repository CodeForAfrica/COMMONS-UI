import React from "react";
import PropTypes from "prop-types";

import A from "../A";
import RichTypography from "../RichTypography";

import useStyles from "./useStyles";

function Initiative({ logo, children, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <A href={logo.url}>
        <img
          src={logo.image.url}
          alt={logo.image.alt}
          className={classes.supporterLogo}
        />
      </A>
      <RichTypography variant="caption" className={classes.support}>
        {children}
      </RichTypography>
    </div>
  );
}

Initiative.propTypes = {
  children: PropTypes.node.isRequired,
  logo: PropTypes.shape({
    image: PropTypes.shape({
      alt: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Initiative;
