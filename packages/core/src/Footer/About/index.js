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
          classes={{ aboutInitiative: classes.initiative }}
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
  options: PropTypes.shape({
    about: PropTypes.shape({}),
    initiative: PropTypes.shape({}),
  }),
};
Index.defaultProps = {
  initiative: null,
  options: {},
};

export default Index;
