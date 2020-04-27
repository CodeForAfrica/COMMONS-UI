import React, { useRef } from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import { GridListTile, makeStyles } from "@material-ui/core";

import GridList from "../ScrollableGridList";
import Story from "../ListItem";

const useStyles = makeStyles(() => ({
  root: {
    zIndex: 1,
    width: "calc(((100vw - 100%) / 2) + 100%)",
  },
  title: {},
  description: {},
  story: {},
  storyDescription: {},
  storyLink: {},
  storyName: {},
  storyPicture: {},
  storyTitle: {},
  stories: {},
  storiesGridList: {},
  storiesScrollBar: {},
}));

function StoryList({
  cellHeight,
  height,
  lg,
  md,
  onClick,
  sm,
  storyClassCount,
  storyClassPrefix,
  stories,
  xs,
  ...props
}) {
  const classes = useStyles(props);
  const rootRef = useRef(null);

  if (!stories) {
    return null;
  }
  return (
    <div className={classes.root} ref={rootRef}>
      <GridList
        classes={{
          root: classes.profiles,
          gridList: classes.profilesGridList,
          scrollBar: classes.profilesScrollBar,
        }}
        cellHeight={cellHeight}
        height={height}
        lg={lg}
        md={md}
        sm={sm}
        xs={xs}
      >
        {stories.map((story, index) => (
          <GridListTile key={story.id}>
            <Story
              key={story.title}
              classes={{
                root: clsx(classes.story, {
                  [`${storyClassPrefix}${
                    index % storyClassCount
                  }`]: storyClassCount,
                }),
                description: classes.storyDescription,
                link: classes.storyLink,
                name: classes.storyName,
                picture: classes.storyPicture,
                title: classes.storyTitle,
              }}
              height={cellHeight}
              onClick={() => onClick && onClick(index)}
              description={story.description}
              image={story.image}
              link={story.link}
              name={story.name}
              title={story.title}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

StoryList.propTypes = {
  cellHeight: PropTypes.number,
  height: PropTypes.number,
  lg: PropTypes.number,
  md: PropTypes.number,
  onClick: PropTypes.func,
  storyClassCount: PropTypes.number,
  storyClassPrefix: PropTypes.string,
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      image: PropTypes.shape({
        description: PropTypes.string,
        url: PropTypes.string.isRequired,
      }),
      link: PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string.isRequired,
      }),
      name: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
  sm: PropTypes.number,
  xs: PropTypes.number,
};

StoryList.defaultProps = {
  cellHeight: 320,
  height: 370, // 23.125rem
  lg: undefined,
  md: 3.3,
  onClick: undefined,
  sm: undefined,
  storyClassCount: 3,
  storyClassPrefix: "story-",
  xs: 1.3,
};

export default StoryList;
