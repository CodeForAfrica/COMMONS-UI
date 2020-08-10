import React, { useCallback, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import { GridListTile } from "@material-ui/core";

import { ScrollableGridList as GridList } from "@commons-ui/core";

import Contacts from "./Contacts";
import Profile from "../ListItem";
import useStyles from "./useStyles";

function ProfileList({
  cellHeight,
  contactIcons,
  height,
  onSelectedIndexChanged,
  linkComponent,
  lg,
  md,
  profileContentsRootClassCount,
  profileContentsRootClassPrefix,
  profiles,
  profileVariant,
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
                root: classes.profile,
                contentsRoot: clsx(
                  classes.profileContentsRoot,
                  `${profileContentsRootClassPrefix}${
                    index % profileContentsRootClassCount
                  }`
                ),
                contents: classes.profileContents,
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
              image={profile.image}
              link={profile.link}
              linkComponent={linkComponent}
              name={profile.name}
              selected={selectedIndexProp === index}
              variant={profileVariant}
              {...profile}
            >
              <Contacts icons={contactIcons} profile={profile} />
            </Profile>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

ProfileList.propTypes = {
  cellHeight: PropTypes.number,
  contactIcons: PropTypes.shape({}),
  height: PropTypes.number,
  linkComponent: PropTypes.elementType,
  lg: PropTypes.number,
  md: PropTypes.number,
  onSelectedIndexChanged: PropTypes.func,
  profileContentsRootClassCount: PropTypes.number,
  profileContentsRootClassPrefix: PropTypes.string,
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
  profileVariant: PropTypes.oneOf(["profile", "story"]),
  scrollOnSelectedIndexChange: PropTypes.bool,
  selectedIndex: PropTypes.number,
  sm: PropTypes.number,
  xs: PropTypes.number,
};

ProfileList.defaultProps = {
  cellHeight: 320,
  contactIcons: undefined,
  height: 370, // 23.125rem
  linkComponent: undefined,
  lg: undefined,
  md: 4.3,
  profileContentsRootClassCount: 3,
  profileContentsRootClassPrefix: "profile-contents-root-",
  profileVariant: "profile",
  onSelectedIndexChanged: undefined,
  scrollOnSelectedIndexChange: false,
  selectedIndex: 0,
  sm: undefined,
  xs: 1,
};

export { Contacts };
export default ProfileList;
