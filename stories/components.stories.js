import React from "react";
import { storiesOf } from "@storybook/react";
import { select, withKnobs, text } from "@storybook/addon-knobs";

import {
  DescriptionOutlined as DescriptionIcon,
  StorageOutlined as StorageIcon,
} from "@material-ui/icons";

import {
  Grid,
  Button,
  GridList,
  GridListTile,
  GridListTileBar,
} from "@material-ui/core";
import {
  Copyright,
  LegalLinks,
  StayInTouch,
  QuickLinks,
  DataSourceContent,
  ScrollBar,
  ScrollableGridList,
  AboutOrganization,
  Logo,
  Divider,
  InitiativeLogo,
  ListItem,
} from "@commons-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { getProfiles } from "./utils";

import personImage from "./assets/person_1.png";

import pulitzer from "./assets/pulitzer.png";
import cfaLogo from "./assets/cfa.png";

import "simplebar/dist/simplebar.min.css";

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

const LEGAL_LINKS = {
  links: [
    { href: "/legal/privacy", label: "PRIVACY POLICY" },
    { href: "/legal/terms", label: "TERMS OF SERVICES" },
  ],
};

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
// Example data for the scrollbar story
const tileData = [
  {
    title: "Example title one",
    img: personImage,
  },
  {
    title: "Example title two",
    img: personImage,
  },
  {
    title: "Example title three",
    img: personImage,
  },
  {
    title: "Example title four",
    img: personImage,
  },
  {
    title: "Example title five",
    img: personImage,
  },
  {
    title: "Another Example title Five",
    img: personImage,
  },
];

const socialLinks = [
  {
    url: "https://www.instagram.com/code4africa__/",
    image: {
      url:
        "https://dashboard.hurumap.org/promisetracker/wp-content/uploads/sites/2/2020/10/footer-social-ig.svg",
      alt: "Instagram",
    },
  },
  {
    url: "https://twitter.com/Code4Africa",
    image: {
      url:
        "https://dashboard.hurumap.org/promisetracker/wp-content/uploads/sites/2/2020/10/footer-social-tw.svg",
      alt: "Twitter",
    },
  },
  {
    url: "https://github.com/codeforafrica",
    image: {
      url:
        "https://dashboard.hurumap.org/promisetracker/wp-content/uploads/sites/2/2020/10/footer-social-gh.svg",
      alt: "Github",
    },
  },
  {
    url: "https://www.facebook.com/CodeForAfrica/",
    image: {
      url:
        "https://dashboard.hurumap.org/promisetracker/wp-content/uploads/sites/2/2020/10/footer-social-fb.svg",
      alt: "Facebook",
    },
  },
];

const CFA = {
  image: {
    src: cfaLogo,
    alt: "Code for Africa",
  },
  url: "https://codeforafrica.org",
};

const INITIATIVE_LOGO = {
  image: {
    src: pulitzer,
    alt: "Pulitzer Center",
  },
  url: "https://pulitzercenter.org/",
};

storiesOf("Components/Data Display", module)
  .addDecorator(withKnobs)
  .add("About Organization", () => {
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
      <AboutOrganization
        initiative={text("initiative", ABOUT.initiative)}
        options={options.about}
        classes={{ section: classes.section }}
      >
        {text("children", ABOUT.about)}
      </AboutOrganization>
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
      <Copyright
        variant={variant}
        color={color}
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
    const color = text("color", "black");
    const variant = select("variant", ["caption", "body1"], "caption");

    return (
      <LegalLinks
        variant={variant}
        color={color}
        linkComponent={Button}
        {...LEGAL_LINKS}
        classes={classes}
      />
    );
  })
  .add("Stay In Touch", () => {
    const classes = makeStyles(() => ({
      section: {},
    }))();
    return (
      <StayInTouch
        socialMedia={socialLinks}
        classes={{ section: classes.section }}
      />
    );
  })
  .add("Initative Logo", () => {
    const classes = makeStyles(({ breakpoints }) => ({
      section: {
        margin: "0 auto",
        [breakpoints.up("md")]: {
          width: "85%",
        },
      },
      support: {
        display: "block",
        marginBottom: "1.618125rem",
        marginTop: "1.708rem",
        [breakpoints.up("md")]: {
          display: "none",
        },
      },
    }))();

    return (
      <InitiativeLogo
        {...INITIATIVE_LOGO}
        classes={{
          section: classes.section,
          support: classes.support,
        }}
      >
        {text("children", ABOUT.about)}
      </InitiativeLogo>
    );
  })
  .add("Logo with Divider", () => {
    const classes = makeStyles((theme) => ({
      section: {
        margin: "0 auto",
        [theme.breakpoints.up("md")]: {
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
        <Logo {...CFA} classes={{ section: classes.section }} />
        <Divider classes={{ root: classes.divider }} />
      </>
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
      title: {},
      link: {},
    }))();

    return (
      <QuickLinks
        linkComponent={Button}
        {...QUICK_LINKS[0]}
        classes={{
          section: classes.section,
          title: classes.title,
          link: classes.link,
        }}
      />
    );
  })
  .add("Data Source Content ", () =>
    React.createElement(() => {
      const classes = makeStyles(() => ({
        section: {
          margin: "0 auto",
          width: "90%",
        },
        datasetsLink: {
          marginTop: "2rem",
        },
        datasetsIcon: {
          marginTop: "2rem",
        },
        documentLink: {
          marginTop: "2rem",
        },
        documentIcon: {
          marginTop: "2rem",
        },
      }))();

      return (
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={8}
        >
          <Grid item xs={6}>
            <DataSourceContent
              datasource={{
                contentType: "Datasets",
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                icon: <StorageIcon fontSize="large" />,
              }}
              classes={{
                section: classes.section,
                icon: classes.datasetsIcon,
                link: classes.datasetsLink,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <DataSourceContent
              datasource={{
                contentType: "Documents",
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                icon: <DescriptionIcon fontSize="large" />,
              }}
              classes={{
                section: classes.section,
                link: classes.documentsLink,
                icon: classes.documentsLink,
              }}
            />
          </Grid>
        </Grid>
      );
    })
  );

storiesOf("Components/Cards", module)
  .addDecorator(withKnobs)
  .add("Default", () => {
    const profiles = getProfiles();
    const classes = makeStyles(() => ({
      section: {},
      profilePicture: {
        position: "relative",
        height: "auto",
      },
    }))();
    return (
      <div>
        <ListItem
          image={profiles[0].image}
          name={profiles[0].name}
          classes={{
            picture: classes.profilePicture,
          }}
        />
      </div>
    );
  });

storiesOf("Components/Navigation", module)
  .addDecorator(withKnobs)
  .add("ScrollBar", () => {
    const classes = makeStyles((theme) => ({
      root: {},
      gridList: {
        flexWrap: "nowrap",
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: "translateZ(0)",
      },
      title: {
        color: theme.palette.primary.light,
      },
      titleBar: {
        background:
          "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
      },
    }))();
    return (
      <ScrollBar>
        <GridList className={classes.gridList} cols={5}>
          {tileData.map((tile) => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              />
            </GridListTile>
          ))}
        </GridList>
      </ScrollBar>
    );
  })
  .add("ScrollableGridList", () => {
    const classes = makeStyles((theme) => ({
      root: {},
      gridList: {
        flexWrap: "nowrap",
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: "translateZ(0)",
      },
      title: {
        color: theme.palette.primary.light,
      },
      titleBar: {
        background:
          "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
      },
      scrollBar: {},
    }))();
    return (
      <ScrollableGridList
        xs={2}
        classes={{
          root: classes.root,
          gridList: classes.scrollableGridList,
          scrollBar: classes.scrollBar,
        }}
      >
        <GridList className={classes.gridList} cols={2.5}>
          {tileData.map((tile) => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              />
            </GridListTile>
          ))}
        </GridList>
      </ScrollableGridList>
    );
  });
