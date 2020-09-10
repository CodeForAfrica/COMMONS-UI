import React from "react";

import { storiesOf } from "@storybook/react";
import { select, text, withKnobs } from "@storybook/addon-knobs";

import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import {
  Footer,
  FooterAbout,
  FooterInitiativeLogo,
  FooterLogo,
  FooterLegalLinks,
  FooterStayInTouch,
  FooterInitiative,
  FooterQuickLinks,
} from "@commons-ui/core";
import pulitzer from "./assets/pulitzer.png";
import cfaLogo from "./assets/cfa.png";

import Email from "./assets/email.svg";
import Facebook from "./assets/facebook.svg";
import Medium from "./assets/group-3.svg";
import LinkedIn from "./assets/group-3-copy.svg";
import Twitter from "./assets/twitter.svg";

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

const CONTACTS = {
  support: {
    email: "hello@contact.com",
    image: {
      url: Email,
      alt: "Email",
    },
  },
  socialMedia: [
    {
      url: "https://twitter.com",
      image: {
        url: Twitter,
        alt: "Twitter",
      },
    },
    {
      url: "https://facebook.com",
      image: {
        url: Facebook,
        alt: "Facebook",
      },
    },
    {
      url: "https://medium.com",
      image: {
        url: Medium,
        alt: "Medium",
      },
    },
    {
      url: "https://linkedin.com",
      image: {
        url: LinkedIn,
        alt: "LinkedIn",
      },
    },
  ],
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
    const contacts = CONTACTS;
    contacts.title = text("contacts.title", "Stay in touch with us @ &nbsp;");
    const variant = select("variant", ["full", "compact"], "full");

    return (
      <Footer
        about={ABOUT}
        contacts={contacts}
        initiativeLogo={INITIATIVE_LOGO}
        legalLinks={LEGAL_LINKS}
        quickLinks={QUICK_LINKS}
        organizationLogo={CFA}
        variant={variant}
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
    const contacts = CONTACTS;
    contacts.title = text("contacts.title", "Stay in touch with us @ &nbsp;");
    const variant = select("variant", ["full", "compact"], "full");

    return (
      <Footer
        about={ABOUT}
        contacts={contacts}
        initiativeLogo={INITIATIVE_LOGO}
        legalLinks={{ ...LEGAL_LINKS, linkComponent: Button }}
        quickLinks={QUICK_LINKS.map((q) => ({ ...q, linkComponent: Button }))}
        organizationLogo={CFA}
        variant={variant}
        classes={{ section: classes.section }}
      />
    );
  })
  .add("About Organization", () => {
    const classes = makeStyles((theme) => ({
      section: {
        margin: "0 auto",
        [theme.breakpoints.up("md")]: {
          width: "85%",
        },
      },
    }))();

    return (
      <FooterAbout classes={{ section: classes.section }}>
        {ABOUT.about}
      </FooterAbout>
    );
  })
  .add("About Initiative", () => {
    const classes = makeStyles((theme) => ({
      section: {
        margin: "0 auto",
        [theme.breakpoints.up("md")]: {
          width: "85%",
        },
      },
    }))();

    return (
      <FooterInitiative classes={{ section: classes.section }}>
        {ABOUT.aboinitiativeut}
      </FooterInitiative>
    );
  })
  .add("Owner Logo", () => {
    const classes = makeStyles((theme) => ({
      section: {
        margin: "0 auto",
        [theme.breakpoints.up("md")]: {
          width: "85%",
        },
      },
    }))();

    return (
      <FooterLogo
        organizationLogo={CFA}
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
        logo={INITIATIVE_LOGO}
        initiative={ABOUT.initativeb}
        classes={{ section: classes.section }}
      />
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

    return (
      <FooterLegalLinks
        linkComponent={Button}
        {...LEGAL_LINKS}
        classes={{ section: classes.section }}
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
  })
  .add("Stay In Touch", () => {
    const classes = makeStyles((theme) => ({
      section: {
        margin: "0 auto",
        [theme.breakpoints.up("md")]: {
          width: "85%",
        },
      },
    }))();

    return (
      <FooterStayInTouch {...CONTACTS} classes={{ section: classes.section }} />
    );
  });
