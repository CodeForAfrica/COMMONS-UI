import makeStyles from "@mui/styles/makeStyles";
import React from "react";

import { getProfiles } from "./utils";

import { ListItem } from "@/commons-ui/core";

export default {
  title: "Core/Components/ListItem",
  argTypes: {
    name: {
      control: {
        type: "text",
      },
    },
    image: {
      control: {
        type: "object",
      },
    },
  },
};

const profiles = getProfiles();

const Template = (args) => {
  const classes = makeStyles(() => ({
    section: {},
    profilePicture: {
      position: "relative",
      height: "auto",
    },
  }))();

  return (
    <div>
      <ListItem
        {...args}
        classes={{
          picture: classes.profilePicture,
        }}
      />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...profiles[0],
};
