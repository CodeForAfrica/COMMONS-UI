/* eslint-disable react/jsx-props-no-spreading */
import Layout from "@/commons-ui/core/Layout";
import RichTypography from "@/commons-ui/core/RichTypography";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
  },
  title: {
    margin: "1.375rem 0",
    [theme.breakpoints.up("md")]: {
      width: "51.125rem",
    },
  },
}));

const Section = React.forwardRef(function Section(
  { children, classes: classesProp, title, titleProps, ...props },
  ref
) {
  const classes = useStyles({ classes: classesProp });

  return (
    <Layout {...props} classes={{ root: classes.root }} ref={ref}>
      <RichTypography variant="h2" {...titleProps} className={classes.title}>
        {title}
      </RichTypography>
      {children}
    </Layout>
  );
});

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string,
    title: PropTypes.string,
  }),
  title: PropTypes.string,
  titleProps: PropTypes.shape({}),
};

Section.defaultProps = {
  classes: undefined,
  title: undefined,
  titleProps: undefined,
};

export default Section;
