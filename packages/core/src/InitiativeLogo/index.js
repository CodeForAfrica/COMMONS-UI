import PropTypes from "prop-types";
import React from "react";
import useStyles from "./useStyles";

import LogoButton from "@/commons-ui/core/LogoButton";
import RichTypography from "@/commons-ui/core/RichTypography";

function InitiativeLogo({ variant, img, href, children, ...props }) {
  const classes = useStyles(props);

  return (
        <div className={classes.root}>
          <LogoButton {...img} href={href} className={classes.img} />
          <RichTypography
            variant={variant}
            className={{ support: classes.support }}
          >
            {children}
          </RichTypography>
        </div>
  );
}

InitiativeLogo.propTypes = {
  children: PropTypes.node.isRequired,
  img: PropTypes.shape({}).isRequired,
  href: PropTypes.string,
  variant: PropTypes.string,
};

InitiativeLogo.defaultProps = {
  href: "",
  variant: "body2",
};

export default InitiativeLogo;
