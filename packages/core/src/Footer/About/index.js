import React from "react";
import PropTypes from "prop-types";

import useStyles from "../useStyles";

import About from "./About";
import Initiative from "./Initiative";

function Index({ about, initiative, ...props }) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <About classes={{ about: classes.about }}>{about}</About>
      <br />
      <Initiative classes={{ initiative: classes.initiative }}>
        {initiative}
      </Initiative>
    </div>
  );
}

Index.propTypes = {
  about: PropTypes.string.isRequired,
  initiative: PropTypes.node.isRequired,
};

export default Index;
export { About as FooterAbout };
export { Initiative as FooterInitiative };
