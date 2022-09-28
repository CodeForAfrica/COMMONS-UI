import makeStyles from '@mui/styles/makeStyles';
import React from "react";

import { Copyright } from "@/commons-ui/core";

export default {
  title: "Core/Components/Copyright",
  argTypes: {
    copyright: {
      control: {
        type: "text",
      },
    },
    icon: {
      control: {
        type: "text",
      },
    },
    url: {
      control: {
        type: "text",
      },
    },
    variant: {
      control: {
        type: "select",
      },
      options: ["caption", "body1"],
    },
    year: {
      control: {
        type: "text",
      },
    },
  },
};

const Template = (args) => {
  const classes = makeStyles((theme) => ({
    section: {
      margin: "0 auto",
      [theme.breakpoints.up("md")]: {
        width: "85%",
      },
    },
  }))();

  return <Copyright {...args} classes={{ section: classes.section }} />;
};

export const Default = Template.bind({});

Default.args = {
  copyright: "Copyright",
  icon: undefined,
  url: undefined,
  variant: "caption",
  year: undefined,
};
