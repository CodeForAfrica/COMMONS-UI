import React, { useState } from "react";
import { storiesOf } from "@storybook/react";

import { Grid } from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import { ProfileCarousel, Showcase } from "@commons-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import NavigationButton from "./NavigationButton";
import { getProfiles, fromTimestamp, useStories } from "./utils";

import "simplebar/dist/simplebar.min.css";

storiesOf("Components|Profile Carousel", module)
  .add("Default", () => {
    const profiles = getProfiles();
    return <ProfileCarousel profiles={profiles} />;
  })
  .add("Navigation", () => {
    const classes = makeStyles((theme) => ({
      root: {
        position: "relative",
      },
      backButton: {
        position: "absolute",
        left: 0,
      },
      forwardButton: {
        position: "absolute",
        right: 0,
      },
      profile: {
        background: "none",
        height: "auto",
        justifyContent: "flex-start",
        "&::after": {
          content: "none",
        },
      },
      profilePicture: {
        border: "6px solid transparent",
        boxSizing: "border-box",
        display: "initial",
        borderRadius: "50%",
      },
      profilePictureSelected: {
        border: `6px solid ${theme.palette.primary.main}`,
      },
    }))();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const profiles = getProfiles();
    const handleSelectedIndexChanged = (index) => setSelectedIndex(index);

    return (
      <Grid container justify="flex-end" className={classes.root}>
        <Grid item xs={12}>
          <ProfileCarousel
            classes={{
              profile: classes.profile,
              profilePicture: classes.profilePicture,
              profilePictureSelected: classes.profilePictureSelected,
            }}
            onSelectedIndexChanged={handleSelectedIndexChanged}
            profiles={profiles}
            selectedIndex={selectedIndex}
          />
        </Grid>
        <NavigationButton
          className={classes.backButton}
          onClick={() =>
            setSelectedIndex(
              (profiles.length + (selectedIndex - 1)) % profiles.length
            )
          }
        >
          <ArrowBack color="primary" />
        </NavigationButton>
        <NavigationButton
          className={classes.forwardButton}
          onClick={() =>
            setSelectedIndex((selectedIndex + 1) % profiles.length)
          }
        >
          <ArrowForward color="primary" />
        </NavigationButton>
      </Grid>
    );
  });

storiesOf("Components|Showcase", module).add("Default", () => {
  const foundStories = useStories(
    "https://pesacheck.org/tagged/public-finance"
  );
  const stories = foundStories.map((story) => ({
    ...story,
    createdAt: fromTimestamp(story.createdAt),
    image: {
      url: `https://cdn-images-1.medium.com/max/480/${story.virtuals.previewImage.imageId}`,
    },
  }));

  return (
    <Showcase
      stories={stories}
      title="Showcase"
      description="View and explore how we visualise Kenya’s budget data to show how much money each county has received from the national government, and how the money is allocated and utilized based on each county’spriorities"
    />
  );
});
