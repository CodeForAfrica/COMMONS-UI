import React from "react";
import PropTypes from "prop-types";

import RichTypography from "../../RichTypography";
import Logo from "../../Logo";
import useStyles from "./useStyles";

function Initiative({ variant, image, url, children, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Logo image={image} url={url} />
      <RichTypography variant={variant} className={classes.support}>
        {children}
      </RichTypography>
    </div>
  );
}

Initiative.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  url: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

Initiative.defaultProps = {
  variant: "caption",
};

export default Initiative;
