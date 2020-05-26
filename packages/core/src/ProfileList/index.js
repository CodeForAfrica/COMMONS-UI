/* eslint-disable react/no-danger, jsx-a11y/control-has-associated-label */
import React, { useCallback, useEffect, useRef } from "react";
import { PropTypes } from "prop-types";

import clsx from "clsx";

import { GridListTile } from "@material-ui/core";

import GridList from "../ScrollableGridList";
import Profile from "../ListItem";
import useStyles from "./useStyles";

function ProfileList({
  cellHeight,
  height,
  onSelectedIndexChanged,
  linkComponent,
  lg,
  md,
  profileClassCount,
  profileClassPrefix,
  profiles,
  scrollOnSelectedIndexChange: scrollOnSelectedIndexChangeProp,
  selectedIndex: selectedIndexProp,
  sm,
  xs,
  ...props
}) {
  const classes = useStyles(props);
  const rootRef = useRef(null);
  const handleClick = useCallback(
    (selectedIndex, scrollOnSelectedIndexChange) => {
      const profileEls = rootRef.current.getElementsByClassName(
        classes.profile
      );
      const profileEl = profileEls[selectedIndex];
      if (profileEl && scrollOnSelectedIndexChange) {
        profileEl.scrollIntoView({ behavior: "smooth" });
      }
      if (onSelectedIndexChanged) {
        onSelectedIndexChanged(selectedIndex);
      }
    },
    [classes.profile, onSelectedIndexChanged]
  );
  useEffect(() => {
    handleClick(selectedIndexProp, scrollOnSelectedIndexChangeProp);
  }, [handleClick, scrollOnSelectedIndexChangeProp, selectedIndexProp]);

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
              classes={{
                root: clsx(classes.profile, {
                  [`${profileClassPrefix}${
                    index % profileClassCount
                  }`]: profileClassCount,
                }),
                description: classes.profileDescription,
                link: classes.profileLink,
                name: classes.profileName,
                nameSelected: classes.profileNameSelected,
                picture: classes.profilePicture,
                pictureSelected: classes.profilePictureSelected,
                title: classes.profileTitle,
              }}
              height={cellHeight}
              onClick={
                onSelectedIndexChanged && (() => handleClick(index, true))
              }
              description={profile.description}
              image={profile.image}
              link={profile.link}
              itemChildren={profile.itemChildren}
              linkComponent={linkComponent}
              name={profile.name}
              title={profile.title}
              selected={selectedIndexProp === index}
              {...profile}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

ProfileList.propTypes = {
  cellHeight: PropTypes.number,
  height: PropTypes.number,
  linkComponent: PropTypes.elementType,
  lg: PropTypes.number,
  md: PropTypes.number,
  onSelectedIndexChanged: PropTypes.func,
  profileClassCount: PropTypes.number,
  profileClassPrefix: PropTypes.string,
  profiles: PropTypes.arrayOf(
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
  scrollOnSelectedIndexChange: PropTypes.bool,
  selectedIndex: PropTypes.number,
  sm: PropTypes.number,
  xs: PropTypes.number,
};

ProfileList.defaultProps = {
  cellHeight: 320,
  height: 370, // 23.125rem
  linkComponent: undefined,
  lg: undefined,
  md: 4.3,
  onSelectedIndexChanged: undefined,
  profileClassCount: 3,
  profileClassPrefix: "profile-",
  scrollOnSelectedIndexChange: false,
  selectedIndex: 0,
  sm: undefined,
  xs: 1,
};

export default ProfileList;
