import React from "react";
import { storiesOf } from "@storybook/react";

import { Footer } from "@commons-ui/core";
import pulitzer from "./assets/pulitzer.png";
import cfaLogo from "./assets/cfa.png";

import { ReactComponent as Email } from "./assets/email.svg";
import { ReactComponent as Facebook } from "./assets/facebook.svg";
import { ReactComponent as Medium } from "./assets/group-3.svg";
import { ReactComponent as LinkedIn } from "./assets/group-3-copy.svg";
import { ReactComponent as Twitter } from "./assets/twitter.svg";

const FIRST_LINKS = {
  title: "MORE",
  links: [
    { href: "/about", label: "About About" },
    { href: "/faqs", label: "FAQs" },
    { href: "/contact", label: "Contact Us" },
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
  image: pulitzer,
  alt: "Plutizer Center",
  link: "https://link.url",
};

const CFA = {
  image: cfaLogo,
  alt: "CodeForAfrica",
};

const SOCIAL_MEDIA = {
  settings: {
    support: {
      hello: "hello@contact.com",
      component: Email,
    },
    socialMedia: {
      facebook: {
        link: "https://facebook.com",
        component: Facebook,
      },
      linkedin: {
        link: "https://linkedin.com",
        component: LinkedIn,
      },
      medium: {
        link: "https://medium.com",
        component: Medium,
      },
      twitter: {
        link: "https://twitter.com",
        component: Twitter,
      },
    },
  },
};

storiesOf("Components|Footer", module).add("Footer", () => (
  <Footer
    about={SOCIAL_MEDIA}
    firstLinks={FIRST_LINKS}
    secondLinks={FIRST_LINKS}
    aboutSection={ABOUT}
    initiativeLogo={INITIATIVE_LOGO}
    CFA={CFA}
  />
));
