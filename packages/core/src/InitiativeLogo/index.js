import React from "react";
import PropTypes from "prop-types";

import RichTypography from "../RichTypography";
import Logo from "../Logo";
import useStyles from "./useStyles";

function InitiativeLogo({ variant, image, url, children, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      {/* 	{options.map(option => <Logo key={option.url} image={option.image} src={option.url} />)} */}
      <Logo image={image} src={url} className={classes.img} />
      <RichTypography variant={variant} className={classes.support}>
        {children}
      </RichTypography>
    </div>
  );
}

InitiativeLogo.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  url: PropTypes.string.isRequired,
  variant: PropTypes.string,
  /* options: PropTypes.shape({
		images: PropTypes.shape({
			alt: PropTypes.string,
			src: PropTypes.string,
		}),
		url: PropTypes.string.isRequired,
	}), */
};

InitiativeLogo.defaultProps = {
  variant: "body2",
};

export default InitiativeLogo;
