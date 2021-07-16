import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import cfaLogo from "./assets/cfa.png";

import { A, Divider, LogoButton } from "@/commons-ui/core";

const CFA = {
  image: {
    src: cfaLogo,
    alt: "Code for Africa",
  },
  href: "https://codeforafrica.org",
};

export default {
  title: "Core/Components/Logo",
  argTypes: {
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
