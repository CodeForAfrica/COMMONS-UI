import makeStyles from '@mui/styles/makeStyles';
import React from "react";

import cfaLogo from "./assets/cfa.png";

import { A, Divider, LogoButton } from "@/commons-ui/core";

const CFA = {
  alt: "Code for Africa",
  href: "https://codeforafrica.org",
  src: cfaLogo,
};

export default {
  title: "Core/Components/LogoButton",
  argTypes: {
    alt: {
      control: {
        type: "text",
      },
    },
    href: {
      control: {
        type: "text",
      },
    },
    src: {
      control: {
        type: "text",
      },
    },
  },
};

const Template = (args) => {
  const classes = makeStyles(({ breakpoints }) => ({
    section: {
      margin: "0 auto",
      [breakpoints.up("md")]: {
        width: "85%",
      },
    },
    divider: {
      height: ".2rem",
      background: "#180f49",
      marginLeft: "19rem",
      marginTop: "-.6rem",
    },
  }))();

  return (
    <>
      <LogoButton
        {...args}
        component={A}
        classes={{ section: classes.section }}
      />
      <Divider classes={{ root: classes.divider }} />
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  ...CFA,
};
