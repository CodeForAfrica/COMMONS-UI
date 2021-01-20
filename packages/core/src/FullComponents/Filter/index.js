import React from "react";
import { PropTypes } from "prop-types";
import clsx from "clsx";

import { Grid, Button, ButtonBase } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: "1rem",
  },
  activeButton: {
    color: theme.palette.text.secondary,
  },
  activeSubButton: {},
  button: {
    fontFamily: theme.typography.fontFamily,
    textTransform: "capitalize",
    fontSize: "0.75rem",
    minWidth: "57px",
    padding: "0.5rem",
    "&:hover": {
      color: theme.palette.text.secondary,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
      padding: "auto 1rem",
      minWidth: "100px",
    },
  },
  caption: {
    fontWeight: 700,
    letterSpacing: 0,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
    fontSize: "0.75rem",
    marginRight: theme.typography.pxToRem(16),
    "&:last-of-type": {
      marginRight: 0,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "initial",
    },
  },
  itemContainer: {
    display: "flex",
    flexDirection: "column",
  },
  filter: {
    display: "flex",
    padding: "1.5rem 0rem",
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 1,
    flexWrap: "wrap",
    [theme.breakpoints.up("md")]: {
      flexGrow: 0,
      padding: 0,
    },
  },
  subtopic: {
    paddingTop: "1rem",
  },
}));

function Filter({
  activeTopic,
  activeSubTopic,
  onButtonClick,
  onSubTopicButtonClick,
  parentTopics,
  subTopics,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <Grid container className={classes.root}>
      <Grid item container spacing={2} className={classes.filter}>
        {parentTopics &&
          parentTopics.map((item) => (
            <Grid item key={item.slug}>
              <Button
                className={clsx(classes.button, {
                  [classes.activeButton]: item.slug === activeTopic,
                })}
                onClick={() => onButtonClick(item.slug)}
              >
                {item.name}
              </Button>
            </Grid>
          ))}
      </Grid>
      {subTopics && subTopics.length > 0 && (
        <Grid item xs={12} className={classes.subtopic}>
          {subTopics.map((item) => (
            <ButtonBase
              key={item.slug}
              variant="caption"
              onClick={() => onSubTopicButtonClick(item.slug)}
              className={clsx(classes.caption, {
                [classes.activeSubButton]: item.slug === activeSubTopic,
              })}
            >
              {item.name}
            </ButtonBase>
          ))}
        </Grid>
      )}
    </Grid>
  );
}

Filter.propTypes = {
  onButtonClick: PropTypes.func,
  onSubTopicButtonClick: PropTypes.func,
  parentTopics: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  subTopics: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  activeTopic: PropTypes.string,
  activeSubTopic: PropTypes.string,
};

Filter.defaultProps = {
  activeTopic: undefined,
  activeSubTopic: undefined,
  onButtonClick: undefined,
  onSubTopicButtonClick: undefined,
};
export default Filter;
