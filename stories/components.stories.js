import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { select, withKnobs, text, object } from "@storybook/addon-knobs";

import {
  ArrowBack,
  ArrowForward,
  DescriptionOutlined as DescriptionIcon,
  StorageOutlined as StorageIcon,
} from "@material-ui/icons";
import { Grid, Button } from "@material-ui/core";
import {
  DocumentsAndDatasets,
  Filter,
  ProfileList,
  StoryList,
  LegalLinks,
} from "@commons-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import NavigationButton from "./NavigationButton";
import { getProfiles, useStories } from "./utils";

import imgHighlight from "./assets/illo-02.png";
import linkedIn from "./assets/Icon awesome-linkedin.png";
import twitter from "./assets/Icon awesome-twitter.png";
import website from "./assets/icon web.png";

import "simplebar/dist/simplebar.min.css";

const LEGAL_LINKS = {
  links: [
    { href: "/legal/privacy", label: "PRIVACY POLICY" },
    { href: "/legal/terms", label: "TERMS OF SERVICES" },
  ],
};

storiesOf("Components/DataDisplay", module).add("Legal Links", () => {
  const classes = makeStyles((theme) => ({
    section: {
      margin: "0 auto",
      [theme.breakpoints.up("md")]: {
        width: "85%",
      },
    },
  }))();
  const color = text("color", "black");
  const variant = select("variant", ["caption", "body1"], "caption");

  return (
    <LegalLinks
      variant={variant}
      color={color}
      linkComponent={Button}
      {...LEGAL_LINKS}
      classes={classes}
    />
  );
});

storiesOf("Components/Profile List", module)
  .add("Default", () => {
    const classes = makeStyles(({ palette }) => ({
      root: {
        position: "relative",
      },
      profileContentsRoot: {
        "&:after": {
          bottom: 0,
          content: '""',
          left: 0,
          mixBlendMode: "multiply",
          opacity: 0.3,
          position: "absolute",
          right: 0,
          top: 0,
        },
        "&.profile-contents-root-0": {
          "&:after": {
            backgroundColor: `${palette.primary.main}`,
          },
        },
        "&.profile-contents-root-1": {
          "&:after": {
            backgroundColor: `${palette.secondary.main}`,
          },
        },
        "&.profile-contents-root-2": {
          "&:after": {
            backgroundColor: "yellow",
          },
        },
      },
    }))();
    const icons = {
      linkedIn: {
        image: {
          url: linkedIn,
        },
      },
      twitter: {
        image: {
          url: twitter,
        },
      },
      website: {
        image: {
          url: website,
        },
      },
    };

    const profiles = getProfiles();
    return (
      <div style={{ margin: "0 auto", width: "80%", overflow: "visible" }}>
        <ProfileList
          contactIcons={icons}
          profiles={profiles}
          classes={{ profileContentsRoot: classes.profileContentsRoot }}
        />
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
  const classes = makeStyles(({ palette }) => ({
    root: {
      position: "relative",
    },
    storyContentsRoot: {
      "&:after": {
        bottom: 0,
        content: '""',
        left: 0,
        mixBlendMode: "multiply",
        opacity: 0.3,
        position: "absolute",
        right: 0,
        top: 0,
      },
      "&.story-contents-root-0": {
        "&:after": {
          backgroundColor: `${palette.primary.main}`,
        },
      },
      "&.story-contents-root-1": {
        "&:after": {
          backgroundColor: `${palette.secondary.main}`,
        },
      },
      "&.story-contents-root-2": {
        "&:after": {
          backgroundColor: "yellow",
        },
      },
    },
  }))();
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
      <StoryList
        classes={{ storyContentsRoot: classes.storyContentsRoot }}
        md={3.3}
        spacing={0}
        stories={stories}
        xs={1.3}
      />
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

storiesOf("Components/Filter", module)
  .addDecorator(withKnobs)
  .add("Default", () =>
    React.createElement(() => {
      const classes = makeStyles(() => ({
        filterButton: {
          color: "#818080",
          background: "#F0EFEF",
          border: 0,
          borderRadius: 0,
          boxShadow: "0.125rem 0.125rem 0.25rem #00000026",
          letterSpacing: 0,
          "&:hover": {
            background: "#DD4C1A",
          },
        },
        filterActiveButton: {
          border: "1px solid #DD4C1A",
          background: "#DD4C1A",
          color: "white",
        },
        filterActiveSubButton: {
          color: "#DD4C1A",
          borderBottom: "2px solid #DD4C1A",
        },
        filterCaption: {
          color: "#6A6A6A",
        },
        filterContainer: {
          justifyContent: "center",
        },
        filterSubCategory: {
          display: "flex",
          justifyContent: "center",
          paddingTop: 0,
          marginTop: "1rem",
        },
      }))();

      const parentTopics = object("parentTopics", [
        { name: "All", slug: "all" },
        { name: "Technology", slug: "technology" },
        { name: "Policy", slug: "Policy" },
        { name: "Culture", slug: "Culture" },
        { name: "Research", slug: "Research" },
        { name: "Other", slug: "other" },
      ]);
      const subTopics = object("subTopics", [
        { name: "Complete", slug: "complete" },
        { name: "Active", slug: "active" },
        { name: "Stalled", slug: "stalled" },
        { name: "Unknown", slug: "unknown" },
      ]);

      return (
        <div>
          <Filter
            activeTopic={text("activeTopic", "all")}
            parentTopics={parentTopics}
            subTopics={subTopics}
            classes={{
              activeButton: classes.filterActiveButton,
              activeSubButton: classes.filterActiveSubButton,
              button: classes.filterButton,
              caption: classes.filterCaption,
              filter: classes.filterContainer,
              subtopic: classes.filterSubCategory,
            }}
          />
        </div>
      );
    })
  );
