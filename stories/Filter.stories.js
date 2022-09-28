import makeStyles from '@mui/styles/makeStyles';
import React from "react";

import { Filter } from "@/commons-ui/core";

const mainTopics = [
  { name: "All", slug: "all" },
  { name: "Technology", slug: "technology" },
  { name: "Policy", slug: "policy" },
  { name: "Culture", slug: "culture" },
  { name: "Research", slug: "research" },
  { name: "Other", slug: "other" },
];

export default {
  title: "Core/Components/Filter",
  argTypes: {
    activeTopic: {
      control: {
        type: "select",
      },
      options: mainTopics.map(({ slug }) => slug),
    },
    mainTopics: {
      control: {
        type: "object",
      },
    },
    subTopics: {
      control: {
        type: "object",
      },
    },
  },
};

const Template = (args) => {
  const classes = makeStyles(({ palette }) => ({
    filterButton: {
      border: 0,
      borderRadius: 0,
      letterSpacing: 0,
    },
    filterActiveButton: {
      background: palette.primary.main,
      color: palette.common.white,
    },
    filterActiveSubButton: {},
    filterCaption: {},
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

  return (
    <div>
      <Filter
        {...args}
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
};

export const Default = Template.bind({});

Default.args = {
  activeTopic: "all",
  mainTopics,
  subTopics: [
    { name: "Complete", slug: "complete" },
    { name: "Active", slug: "active" },
    { name: "Stalled", slug: "stalled" },
    { name: "Unknown", slug: "unknown" },
  ],
};
