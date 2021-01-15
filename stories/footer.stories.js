import React from "react";

import { storiesOf } from "@storybook/react";
import { select, text, withKnobs } from "@storybook/addon-knobs";

import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import {
  Footer,
  FooterAbout,
  FooterCopyright,
  FooterInitiativeLogo,
  FooterLogo,
  FooterLegalLinks,
  FooterQuickLinks,
} from "@commons-ui/core";
import pulitzer from "./assets/pulitzer.png";
import cfaLogo from "./assets/cfa.png";

const QUICK_LINKS = [
  {
    title: "MORE",
    links: [
      { href: "/about", label: "About About" },
      { href: "/faqs", label: "FAQs" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
  {
    title: "CONTACTS",
    links: [
      { href: "/about", label: "About About" },
      { href: "/faqs", label: "FAQs" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
];
const options = {
  about: {
    about: {
      variant: "caption",
    },
    initiative: {
      variant: "caption",
    },
  },
};
const LEGAL_LINKS = {
  links: [
    { href: "/legal/privacy", label: "PRIVACY POLICY" },
    { href: "/legal/terms", label: "TERMS OF SERVICES" },
  ],
};

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

const INITIATIVE_LOGO = {
  image: {
    url: pulitzer,
    alt: "Plutizer Center",
  },
  url: "https://link.url",
};

const CFA = {
  image: {
    url: cfaLogo,
    alt: "Code for Africa",
  },
  url: "https://codeforafrica.org",
};

storiesOf("Components/Footer", module)
  .addDecorator(withKnobs)
  .add("Default", () => {
    const classes = makeStyles((theme) => ({
      section: {
        margin: "0 auto",
        [theme.breakpoints.up("md")]: {
          width: "85%",
        },
      },
    }))();

    const variant = select("variant", ["full", "compact"], "full");

    return (
      <Footer
        about={ABOUT}
        initiativeLogo={INITIATIVE_LOGO}
        legalLinks={LEGAL_LINKS}
        quickLinks={QUICK_LINKS}
        organizationLogo={CFA}
        variant={variant}
        options={options}
        classes={{ section: classes.section }}
      />
    );
  })
  .add("Copyright", () => {
    const classes = makeStyles((theme) => ({
      section: {
        margin: "0 auto",
        [theme.breakpoints.up("md")]: {
          width: "85%",
        },
      },
    }))();
    const color = text("color", "black");
    const variant = select("variant", ["caption", "body1"], "caption");

    return (
      <FooterCopyright
        variant={variant}
        color={color}
        classes={{ section: classes.section }}
      />
    );
  })
  .add("Custom Link", () => {
    const classes = makeStyles((theme) => ({
      section: {
        margin: "0 auto",
        [theme.breakpoints.up("md")]: {
          width: "85%",
        },
      },
    }))();

    const variant = select("variant", ["full", "compact"], "full");

    return (
      <Footer
        about={ABOUT}
        initiativeLogo={INITIATIVE_LOGO}
        legalLinks={{ ...LEGAL_LINKS, linkComponent: Button }}
        quickLinks={QUICK_LINKS.map((q) => ({ ...q, linkComponent: Button }))}
        organizationLogo={CFA}
        variant={variant}
        classes={{ section: classes.section }}
      />
    );
  })
  .add("Organization", () => {
    const classes = makeStyles((theme) => ({
      section: {
        margin: "0 auto",
        [theme.breakpoints.up("md")]: {
          width: "85%",
        },
      },
    }))();
    options.about.about.variant = select(
      "About variant",
      ["caption", "body1"],
      "caption"
    );
    options.about.initiative.variant = select(
      "Initiative variant",
      ["caption", "body1"],
      "caption"
    );

    return (
      <FooterAbout
        initiative={text("initiative", ABOUT.initiative)}
        options={options.about}
        classes={{ section: classes.section }}
      >
        {text("children", ABOUT.about)}
      </FooterAbout>
    );
  })

  .add("Logo", () => {
    const classes = makeStyles((theme) => ({
      section: {
        margin: "0 auto",
        [theme.breakpoints.up("md")]: {
          width: "85%",
        },
      },
    }))();
    const hasDivider = select("hasDivider", [true, false], true);

    return (
      <FooterLogo
        {...CFA}
        hasDivider={hasDivider}
        classes={{ section: classes.section }}
      />
    );
  })
  .add("Initative Logo", () => {
    const classes = makeStyles((theme) => ({
      section: {
        margin: "0 auto",
        [theme.breakpoints.up("md")]: {
          width: "85%",
        },
      },
    }))();

    return (
      <FooterInitiativeLogo
        {...INITIATIVE_LOGO}
        classes={{ section: classes.section }}
      >
        {ABOUT.initative}
      </FooterInitiativeLogo>
    );
  })
  .add("Legal Links", () => {
    const classes = makeStyles((theme) => ({
      section: {
        margin: "0 auto",
        [theme.breakpoints.up("md")]: {
          width: "85%",
        },
      },
    }))();
    const color = text("color", "black");
    const variant = select("variant", ["caption", "body1"], "caption");

    return (
      <FooterLegalLinks
        variant={variant}
        color={color}
        linkComponent={Button}
        {...LEGAL_LINKS}
        classes={classes}
      />
    );
  })
  .add("Quick Links", () => {
    const classes = makeStyles((theme) => ({
      section: {
        margin: "0 auto",
        [theme.breakpoints.up("md")]: {
          width: "85%",
        },
      },
    }))();

    return (
      <FooterQuickLinks
        linkComponent={Button}
        {...QUICK_LINKS[0]}
        classes={{ section: classes.section }}
      />
    );
  });
