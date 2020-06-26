import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import {
  ArrowBack,
  ArrowForward,
  DescriptionOutlined as DescriptionIcon,
  StorageOutlined as StorageIcon,
} from "@material-ui/icons";
import { Grid } from "@material-ui/core";
import { DocumentsAndDatasets, ProfileList, StoryList } from "@commons-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import NavigationButton from "./NavigationButton";
import { getProfiles, useStories } from "./utils";

import imgHighlight from "./assets/illo-02.png";

import "simplebar/dist/simplebar.min.css";

storiesOf("Components/Profile List", module)
  .add("Default", () => {
    const profiles = getProfiles();
    return (
      <div style={{ margin: "0 auto", width: "80%", overflow: "visible" }}>
        <ProfileList profiles={profiles} />
      </div>
    );
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
        textAlign: "center",
      },
      profilePicture: {
        border: "6px solid transparent",
        boxSizing: "border-box",
        borderRadius: "50%",
        display: "block",
        margin: "0 auto",
        width: "8rem",
        height: "8rem",
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
          <ProfileList
            cellHeight={400}
            height={425}
            classes={{
              profile: classes.profile,
              profilePicture: classes.profilePicture,
              profilePictureSelected: classes.profilePictureSelected,
            }}
            onSelectedIndexChanged={handleSelectedIndexChanged}
            profiles={profiles}
            scrollOnSelectedIndexChange
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

storiesOf("Components/Story List", module).add("Default", () => {
  const foundStories = useStories(
    "https://pesacheck.org/tagged/public-finance"
  );
  const stories = foundStories.map((story) => ({
    ...story,
    description: story.subtitle,
    link: { url: story.uniqueSlug, title: "Learn More" },
    image: {
      url: `https://cdn-images-1.medium.com/max/480/${story.virtuals.previewImage.imageId}`,
    },
  }));

  return (
    <div style={{ margin: "0 auto", width: "80%", overflow: "visible" }}>
      <StoryList md={3.3} spacing={0} stories={stories} xs={1.3} />
    </div>
  );
});

storiesOf("Components/DocumentsAndDatasets", module)
  .addDecorator(withKnobs)
  .add("Default", () =>
    React.createElement(() => {
      const classes = makeStyles(({ breakpoints }) => ({
        section: {
          margin: "0 auto",
          width: "90%",
        },
        img: {
          width: "100%",
          background: `transparent url(${imgHighlight}) 50% 50% no-repeat`,
          backgroundSize: "cover",
          height: "20rem",
          [breakpoints.up("md")]: {
            width: "27.7143rem",
            height: "28rem",
          },
          [breakpoints.up("lg")]: {
            width: "37.7143rem",
            height: "38rem",
          },
        },
        datasetsLink: {
          marginTop: "2rem",
        },
        documentsLink: {
          marginTop: "2rem",
        },
      }))();

      return (
        <div>
          <DocumentsAndDatasets
            title={text("title", "Featured Research")}
            subtitle={text(
              "subtitle",
              "Get access to the best original scientific and medical research by African experts who understand local context."
            )}
            datasets={{
              contentType: "Datasets",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              icon: <StorageIcon fontSize="large" />,
            }}
            documents={{
              contentType: "Documents",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              icon: <DescriptionIcon fontSize="large" />,
            }}
            classes={{
              section: classes.section,
              datasetsLink: classes.datasetsLink,
              documentsLink: classes.documentsLink,
            }}
          >
            <div className={classes.img} />
          </DocumentsAndDatasets>
        </div>
      );
    })
  );
