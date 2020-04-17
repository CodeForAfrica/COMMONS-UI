import React from "react";
import PropTypes from "prop-types";

import { GridListTile, makeStyles } from "@material-ui/core";

import GridList from "../ScrollableGridList";
import StoryCard from "./StoryCard";

const useStyles = makeStyles({
  root: {},
  scrollBar: {},
  gridList: {},
});

function StoryList({
  cellHeight,
  height,
  lg,
  md,
  minHeight,
  sm,
  stories,
  xs,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <GridList
      classes={{
        root: classes.root,
        gridList: classes.gridList,
        scrollBar: classes.simpleBar,
      }}
      cellHeight={cellHeight}
      height={height}
      lg={lg}
      md={md}
      sm={sm}
      xs={xs}
    >
      {stories.map((story) => (
        <GridListTile key={story.id}>
          <StoryCard story={story} minHeight={minHeight} />
        </GridListTile>
      ))}
    </GridList>
  );
}

StoryList.propTypes = {
  cellHeight: PropTypes.number,
  height: PropTypes.oneOfType(PropTypes.number, PropTypes.string), // in px
  lg: PropTypes.number,
  md: PropTypes.number,
  minHeight: PropTypes.number,
  sm: PropTypes.number,
  stories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  xs: PropTypes.number,
};

StoryList.defaultProps = {
  cellHeight: 320,
  height: 370, // 23.125rem
  lg: 4,
  md: 2,
  minHeight: 20,
  sm: undefined,
  xs: 1,
};

export default StoryList;
