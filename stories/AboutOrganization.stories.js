import makeStyles from "@mui/styles/makeStyles";
import React from "react";

import { AboutOrganization } from "@/commons-ui/core";

const ABOUT = {
  about:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,\n" +
    "        sed diam nonumy eirmod tempor invidunt ut labore et dolore\n" +
    "        magna aliquyam erat, sed diam voluptua. At vero eos et\n" +
    "        accusam et justo duo dolores et ea rebum. Stet clita kasd\n" +
    "        gubergren, no sea takimata sanctus est",
  initiative:
    "This initiative was made possible with support \nfrom Pulitzer Center.",
};

export default {
  title: "Core/Components/AboutOrganization",
  argTypes: {
    initiative: {
      control: {
        type: "text",
      },
    },
    aboutVariant: {
      control: {
        type: "select",
      },
      options: ["caption", "body1"],
    },
    initiativeVariant: {
      control: {
        type: "select",
      },
      options: ["caption", "body1"],
    },
  },
};

const Template = ({ about, aboutVariant, initiativeVariant, ...args }) => {
  const classes = makeStyles()((theme) => ({
    section: {
      margin: "0 auto",
      [theme.breakpoints.up("md")]: {
        width: "85%",
      },
    },
  }))();

  return (
    <AboutOrganization
      {...args}
      options={{
        about: { variant: aboutVariant },
        initiative: { variant: initiativeVariant },
      }}
      classes={{ section: classes.section }}
    >
      {about}
    </AboutOrganization>
  );
};

export const Default = Template.bind({});

Default.args = {
  about: ABOUT.about,
  aboutVariant: "caption",
  initiative: ABOUT.initiative,
  initiativeVariant: "caption",
};
