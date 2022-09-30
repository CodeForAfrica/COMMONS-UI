import { Button } from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";

import { QuickLinks } from "@/commons-ui/core";

const QUICK_LINKS = [
  {
    title: "MORE",
    links: [
      { href: "/about", label: "About" },
      { href: "/faqs", label: "FAQs" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
  {
    title: "CONTACTS",
    links: [
      { href: "/about", label: "About" },
      { href: "/faqs", label: "FAQs" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
];

export default {
  title: "Core/Components/QuickLinks",
  argTypes: {
    title: {
      control: {
        type: "text",
      },
    },
    links: {
      control: {
        type: "object",
      },
    },
  },
};

const Template = (args) => {
  const classes = makeStyles()((theme) => ({
    section: {
      margin: "0 auto",
      [theme.breakpoints.up("md")]: {
        width: "85%",
      },
    },
    title: {},
    link: {},
  }))();

  return (
    <QuickLinks
      {...args}
      linkComponent={Button}
      classes={{
        section: classes.section,
        title: classes.title,
        link: classes.link,
      }}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  ...QUICK_LINKS[0],
};
