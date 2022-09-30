import React from "react";
import { makeStyles } from "tss-react/mui";

import { StayInTouch } from "@/commons-ui/core";

const socialMedia = [
  {
    url: "https://www.instagram.com/code4africa__/",
    image: {
      url: "https://dashboard.hurumap.org/promisetracker/wp-content/uploads/sites/2/2020/10/footer-social-ig.svg",
      alt: "Instagram",
    },
  },
  {
    url: "https://twitter.com/Code4Africa",
    image: {
      url: "https://dashboard.hurumap.org/promisetracker/wp-content/uploads/sites/2/2020/10/footer-social-tw.svg",
      alt: "Twitter",
    },
  },
  {
    url: "https://github.com/codeforafrica",
    image: {
      url: "https://dashboard.hurumap.org/promisetracker/wp-content/uploads/sites/2/2020/10/footer-social-gh.svg",
      alt: "Github",
    },
  },
  {
    url: "https://www.facebook.com/CodeForAfrica/",
    image: {
      url: "https://dashboard.hurumap.org/promisetracker/wp-content/uploads/sites/2/2020/10/footer-social-fb.svg",
      alt: "Facebook",
    },
  },
];

export default {
  title: "Core/Components/StayInTouch",
  argTypes: {
    socialLinks: {
      control: {
        type: "object",
      },
    },
  },
};

const Template = (args) => {
  const classes = makeStyles()(() => ({
    section: {},
  }))();

  return <StayInTouch {...args} classes={{ section: classes.section }} />;
};

export const Default = Template.bind({});

Default.args = {
  socialMedia,
};
