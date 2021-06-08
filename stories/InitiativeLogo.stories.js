import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import pulitzer from "./assets/pulitzer.png";

import { InitiativeLogo } from "@/commons-ui/core";

const ABOUT = {
  about:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,\n" +
    "        sed diam nonumy eirmod tempor invidunt ut labore et dolore\n" +
    "        magna aliquyam erat, sed diam voluptua. At vero eos et\n" +
    "        accusam et justo duo dolores et ea rebum. Stet clita kasd\n" +
    "        gubergren, no sea takimata sanctus est",
};

const INITIATIVE_LOGO = {
  image: {
    src: pulitzer,
    alt: "Pulitzer Center",
  },
  url: "https://pulitzercenter.org/",
};

export default {
  title: "Core/Components/InitiativeLogo",
  argTypes: {
    description: {
      control: {
        type: "text",
      },
    },
    image: {
      control: {
        type: "object",
      },
    },
    url: {
      control: {
        type: "text",
      },
    },
  },
};

const Template = ({ description, ...args }) => {
  const classes = makeStyles(({ breakpoints }) => ({
    section: {
      margin: "0 auto",
      [breakpoints.up("md")]: {
        width: "85%",
      },
    },
  }))();
  return (
    <InitiativeLogo
      {...args}
      classes={{
        section: classes.section,
        support: classes.support,
      }}
    >
      {description}
    </InitiativeLogo>
  );
};

export const Default = Template.bind({});

Default.args = {
  description: ABOUT.about,
  image: INITIATIVE_LOGO.image,
  ur: INITIATIVE_LOGO.url,
};
