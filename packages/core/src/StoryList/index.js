import React from "react";
import PropTypes from "prop-types";

import { Grid, Typography, makeStyles } from "@material-ui/core";

import List from "./StoryList";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  heading: {
    width: "100%",
    marginBottom: "2rem",
  },
  title: {},
  description: {},
  stories: {},
  storiesGridList: {},
  storiesScrollBar: {},
}));

function StoryList({
  cellHeight,
  description,
  height,
  lg,
  md,
  minHeight,
  sm,
  spacing,
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
        <List
          classes={{
            root: classes.stories,
            gridList: classes.storiesGridList,
            scrollBar: classes.storiesScrollBar,
          }}
          cellHeight={cellHeight}
          height={height}
          lg={lg}
          md={md}
          minHeight={minHeight}
          sm={sm}
          spacing={spacing}
          stories={stories}
          xs={xs}
        />
      </Grid>
    </Grid>
  );
}

StoryList.propTypes = {
  cellHeight: PropTypes.number,
  description: PropTypes.string.isRequired,
  height: PropTypes.number,
  lg: PropTypes.number,
  md: PropTypes.number,
  minHeight: PropTypes.number,
  sm: PropTypes.number,
  spacing: PropTypes.number,
  stories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  title: PropTypes.string.isRequired,
  xs: PropTypes.number,
};

StoryList.defaultProps = {
  cellHeight: 320,
  height: 370, // 23.125rem
  lg: undefined,
  md: 3.3,
  minHeight: undefined,
  sm: undefined,
  spacing: undefined,
  xs: 1.3,
};

export default StoryList;
