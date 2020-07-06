import React, { useRef } from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import { GridListTile } from "@material-ui/core";

import { ScrollableGridList as GridList } from "@commons-ui/core";

import Story from "../ListItem";

import useStyles from "./useStyles";

function StoryList({
  cellHeight,
  height,
  linkComponent,
  lg,
  md,
  onClick,
  sm,
  storyContentsRootClassCount,
  storyContentsRootClassPrefix,
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
          root: classes.stories,
          gridList: classes.storiesGridList,
          scrollBar: classes.storiesScrollBar,
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
              classes={{
                root: classes.story,
                contentsRoot: clsx(
                  classes.storyContentsRoot,
                  `${storyContentsRootClassPrefix}${
                    index % storyContentsRootClassCount
                  }`
                ),
                contents: classes.storyContents,
                content: classes.storyContent,
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
              linkComponent={linkComponent}
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
  linkComponent: PropTypes.elementType,
  lg: PropTypes.number,
  md: PropTypes.number,
  onClick: PropTypes.func,
  storyContentsRootClassCount: PropTypes.number,
  storyContentsRootClassPrefix: PropTypes.string,
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
  linkComponent: undefined,
  lg: undefined,
  md: 3.3,
  onClick: undefined,
  sm: undefined,
  storyContentsRootClassCount: 3,
  storyContentsRootClassPrefix: "story-contents-root-",
  xs: 1.3,
};

export default StoryList;
