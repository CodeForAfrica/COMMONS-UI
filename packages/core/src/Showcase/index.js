import React from "react";
import PropTypes from "prop-types";

import { makeStyles, Container, Grid, Typography } from "@material-ui/core";

import StoryList from "./StoryList";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "3.1875rem 1.875rem",
    [theme.breakpoints.up("md")]: {
      padding: "3.1875rem 0",
    },
  },
  heading: {
    width: "100%",
    marginBottom: "2rem",
    [theme.breakpoints.up("md")]: {
      width: "59.625rem",
    },
    [theme.breakpoints.up("lg")]: {
      width: "79.5rem",
    },
  },
  title: {
    textAlign: "left",
    paddingBottom: "1rem",
  },
  description: {
    textAlign: "left",
  },
  storyList: {},
  storyListScrollBar: {},
  storyListGridList: {},
}));

function Showcase({
  cellHeight,
  description,
  height,
  lg,
  md,
  minHeight,
  sm,
  stories,
  title,
  xs,
  ...props
}) {
  const classes = useStyles(props);

  if (!stories) {
    return null;
  }
  return (
    <Grid container className={classes.root} {...props}>
      <Grid
        item
        xs={12}
        container
        direction="row"
        className={classes.heading}
        justify="flex-start"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h2" className={classes.title}>
            {title}
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="body2" className={classes.description}>
            {description}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <StoryList
          classes={{
            root: classes.storyList,
            scrollBar: classes.storyListScrollBar,
            gridList: classes.storyListGridList,
          }}
          cellHeight={cellHeight}
          height={height}
          lg={lg}
          md={md}
          minHeight={minHeight}
          sm={sm}
          stories={stories}
          xs={xs}
        />
      </Grid>
    </Grid>
  );
}

Showcase.propTypes = {
  cellHeight: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  lg: PropTypes.number,
  md: PropTypes.number,
  minHeight: PropTypes.number.isRequired,
  sm: PropTypes.number,
  stories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  title: PropTypes.string.isRequired,
  xs: PropTypes.number,
};

export default Showcase;
