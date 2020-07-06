import React from "react";
import PropTypes from "prop-types";

import { GridListTile, makeStyles } from "@material-ui/core";

import { ScrollableGridList as GridList } from "@commons-ui/core";

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
  spacing,
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
      height={height || cellHeight}
      lg={lg}
      md={md}
      sm={sm}
      spacing={spacing}
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
  cellHeight: PropTypes.number.isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // in px
  lg: PropTypes.number,
  md: PropTypes.number,
  minHeight: PropTypes.number,
  sm: PropTypes.number,
  spacing: PropTypes.number,
  stories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  xs: PropTypes.number.isRequired,
};

StoryList.defaultProps = {
  height: undefined,
  lg: undefined,
  md: undefined,
  minHeight: undefined,
  sm: undefined,
  spacing: undefined,
};

export default StoryList;
