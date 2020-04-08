/* eslint-disable react/no-danger, jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

import NavigationButton from "./NavigationButton";
import Profile from "./Profile";
import useStyles from "./useStyles";

function ProfileCarousel({ initialIndex, onIndexChanged, profiles, ...props }) {
  const classes = useStyles(props);
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);
  useEffect(() => {
    if (onIndexChanged) {
      onIndexChanged(selectedIndex);
    }
  }, [onIndexChanged, selectedIndex]);

  if (!profiles.length) {
    return null;
  }
  return (
    <div className={classes.root}>
      <div className={classes.carousel}>
        <NavigationButton
          classes={{ root: classes.navigationButton }}
          onClick={() =>
            setSelectedIndex(
              (profiles.length - (selectedIndex - 1)) % profiles.length
            )
          }
        />
        <div className={classes.divider} />

        <div className={classes.profiles}>
          {profiles.map((profile, index) => (
            <Profile
              key={profile.title}
              id={`profile-${index}`}
              classes={{
                root: classes.profile,
                description: classes.profileDescription,
                name: classes.profileName,
                nameSelected: classes.profileNameSelected,
                picture: classes.profilePicture,
                pictureSelected: classes.profilePictureSelected,
                title: classes.profileTitle,
              }}
              onClick={() => setSelectedIndex(index)}
              description={profile.description}
              image={profile.image}
              name={profile.name}
              title={profile.title}
            />
          ))}
        </div>

        <NavigationButton
          classes={{ roo: classes.navigationButton }}
          onClick={() => setSelectedIndex((selectedIndex + 1) % profiles.count)}
        />
      </div>
    </div>
  );
}

ProfileCarousel.propTypes = {
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
  initialIndex: PropTypes.number,
  onIndexChanged: PropTypes.func,
};

ProfileCarousel.defaultProps = {
  initialIndex: 0,
  onIndexChanged: undefined,
};

export default ProfileCarousel;
