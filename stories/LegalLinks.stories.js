import { Button } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import React from "react";

import { LegalLinks } from "@/commons-ui/core";

const LEGAL_LINKS = {
  links: [
    { href: "/legal/privacy", label: "PRIVACY POLICY" },
    { href: "/legal/terms", label: "TERMS OF SERVICES" },
  ],
};

export default {
  title: "Core/Components/LegalLinks",
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: ["textPrimary", "textSecondary"],
    },
    variant: {
      control: {
        type: "select",
      },
      options: ["caption", "body1"],
    },
    links: {
      control: {
        type: "object",
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

  return <LegalLinks {...args} linkComponent={Button} classes={classes} />;
};

export const Default = Template.bind({});

Default.args = {
  ...LEGAL_LINKS,
  color: "textPrimary",
  variant: "caption",
};
