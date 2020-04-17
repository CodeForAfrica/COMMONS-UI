/* eslint-disable react/no-danger, jsx-a11y/control-has-associated-label */
import React, { useCallback, useEffect, useRef } from "react";
import { PropTypes } from "prop-types";

import { GridListTile } from "@material-ui/core";

import GridList from "../ScrollableGridList";
import Profile from "./Profile";
import useStyles from "./useStyles";

function ProfileCarousel({
  cellHeight,
  height,
  selectedIndex: selectedIndexProp,
  onSelectedIndexChanged,
  lg,
  md,
  profiles,
  sm,
  xs,
  ...props
}) {
  const classes = useStyles(props);
  const rootRef = useRef(null);
  const handleClick = useCallback(
    (selectedIndex) => {
      const profileEls = rootRef.current.getElementsByClassName(
        classes.profile
      );
      const profileEl = profileEls[selectedIndex];
      if (profileEl) {
        profileEl.scrollIntoView({ behavior: "smooth" });
      }
      if (onSelectedIndexChanged) {
        onSelectedIndexChanged(selectedIndex);
      }
    },
    [classes.profile, onSelectedIndexChanged]
  );
  useEffect(() => {
    handleClick(selectedIndexProp);
  }, [handleClick, selectedIndexProp]);

  if (!profiles.length) {
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
        {profiles.map((profile, index) => (
          <GridListTile key={profile.id}>
            <Profile
              key={profile.title}
              classes={{
                root: classes.profile,
                description: classes.profileDescription,
                name: classes.profileName,
                nameSelected: classes.profileNameSelected,
                picture: classes.profilePicture,
                pictureSelected: classes.profilePictureSelected,
                title: classes.profileTitle,
              }}
              height={cellHeight}
              onClick={onSelectedIndexChanged && (() => handleClick(index))}
              description={profile.description}
              image={profile.image}
              name={profile.name}
              title={profile.title}
              selected={selectedIndexProp === index}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

ProfileCarousel.propTypes = {
  cellHeight: PropTypes.number,
  height: PropTypes.number,
  selectedIndex: PropTypes.number,
  lg: PropTypes.number,
  md: PropTypes.number,
  onSelectedIndexChanged: PropTypes.func,
  profiles: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      image: PropTypes.shape({
        description: PropTypes.string,
        url: PropTypes.string.isRequired,
      }),
      name: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
  sm: PropTypes.number,
  xs: PropTypes.number,
};

ProfileCarousel.defaultProps = {
  cellHeight: 320,
  height: 370, // 23.125rem
  selectedIndex: 0,
  lg: undefined,
  md: 4.3,
  onSelectedIndexChanged: undefined,
  sm: undefined,
  xs: 1,
};

export default ProfileCarousel;
