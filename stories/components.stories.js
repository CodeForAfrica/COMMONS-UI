import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from '@storybook/addon-knobs';

import { Grid } from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import { DocumentsAndDatasets, ProfileList, StoryList } from "@commons-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import NavigationButton from "./NavigationButton";
import { getProfiles, fromTimestamp, useStories } from "./utils";

import plugIcon from './assets/images/icons/group-6.png';
import menuIcon from './assets/images/icons/group-7.png';
import imgHighlight from './assets/images/illo-02.png';

import "simplebar/dist/simplebar.min.css";

storiesOf("Components|Profile List", module)
  .add("Default", () => {
    const profiles = getProfiles();
    return <ProfileList profiles={profiles} />;
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

storiesOf("Components|Story List", module).add("Default", () => {
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
    <StoryList
      description="View and explore how we visualise Kenya’s budget data to show how much money each county has received from the national government, and how the money is allocated and utilized based on each county’spriorities"
      md={3.3}
      spacing={0}
      stories={stories}
      title="Showcase"
      xs={1.3}
    />
  );
});

storiesOf('Components|DocumentsAndDatasets', module)
  .addDecorator(withKnobs)
  .add('Default', () => 
  React.createElement(() => {
    const classes = makeStyles(({breakpoints}) => ({
      dataWrapper: {
        background: '#0050FF 0% 0% no-repeat padding-box'
      },
      datasetData: {
        backgroundColor: '#4933ff',
      },
      img: {
        width: '100%',
        background: `transparent url(${imgHighlight}) 50% 50% no-repeat`,
        backgroundSize: 'cover',
        height: '20rem',
        [breakpoints.up('md')]: {
          width: '27.7143rem',
          height: '28rem'
        },
        [breakpoints.up('lg')]: {
          width: '37.7143rem',
          height: '38rem'
        }
      }
    }))();
    return (
      <div>
        <DocumentsAndDatasets
          title={text('title', 'Featured Research')}
          highlightChildren={<div className={classes.img} />}
          description={text(
            'description', 
            'Get access to the best original scientific and medical research by African experts who understand local context.')}
          documentContent={
            { 
              contentType: 'Document',
              description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
              linkTitle: 'LEARN MORE',
              children: <img src={menuIcon} alt="Menu Icon" />
            }
          }
          datasetContent={{
              contentType: 'Dataset',
              description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
              linkTitle: 'LEARN MORE',
              children: <img src={plugIcon} alt="Plug Icon" />
          }}
          classes={{
            datasetData: classes.datasetData,
            dataWrapper: classes.dataWrapper,
            imageHighlight: classes.imageHighlight
          }}
        />
      </div>
    );
  }
  ))