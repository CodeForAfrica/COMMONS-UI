import A from "@/commons-ui/core/A";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {},
}));
function Logo({ image, textVariant, url, ...props }) {
  const classes = useStyles(props);

  return (
    // What happens to textVariant if user isnt using material ui?
    <Typography className={classes.text} variant={textVariant}>
      <A href={url}>
        <img src={image.src} alt={image.alt} className={classes.root} />
      </A>
    </Typography>
  );
}

Logo.propTypes = {
  image: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  url: PropTypes.string.isRequired,
  textVariant: PropTypes.string,
};

Logo.defaultProps = {
  textVariant: "body1",
};
export default Logo;
