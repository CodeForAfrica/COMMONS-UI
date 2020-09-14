import React from "react";
import PropTypes from "prop-types";

import useStyles from "../useStyles";

import About from "./About";
import Initiative from "./Initiative";

function Index({ options, children, initiative, ...props }) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <About {...options.about} classes={{ about: classes.about }}>
        {children}
      </About>
      {initiative && (
        <Initiative
          {...options.initiative}
          classes={{ initiative: classes.initiative }}
        >
          {initiative}
        </Initiative>
      )}
    </div>
  );
}

Index.propTypes = {
  children: PropTypes.string.isRequired,
  initiative: PropTypes.node,
};
Index.defaultProps = {
  initiative: null,
};

export default Index;
export { About as FooterAbout };
export { Initiative as FooterInitiative };
