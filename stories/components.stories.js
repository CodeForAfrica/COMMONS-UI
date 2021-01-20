import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { select, withKnobs, text, object } from "@storybook/addon-knobs";

import {
  ArrowBack,
  ArrowForward,
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
  Footer,
  DocumentsAndDatasets,
  Filter,
  ProfileList,
  StoryList,
  Copyright,
  LegalLinks,
  StayInTouch,
  QuickLinks,
  ScrollBar,
  NavigationButton,
  ScrollableGridList,
  AboutOrganization,
  FooterInitiativeLogo,
  Logo,
  Divider,
} from "@commons-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { getProfiles, useStories } from "./utils";

import imgHighlight from "./assets/illo-02.png";
import personImage from "./assets/person_1.png";
import linkedIn from "./assets/Icon awesome-linkedin.png";
import twitter from "./assets/Icon awesome-twitter.png";
import website from "./assets/icon web.png";

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

const INITIATIVE_LOGO = {
  image: {
    url: pulitzer,
    alt: "Plutizer Center",
  },
  url: "https://link.url",
};

const CFA = {
  image: {
    src: cfaLogo,
    alt: "Code for Africa",
  },
  url: "https://codeforafrica.org",
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

storiesOf("Components/Profile List", module)
  .add("Default", () => {
    const classes = makeStyles(({ palette }) => ({
      root: {
        position: "relative",
      },
      profileContentsRoot: {
        "&:after": {
          bottom: 0,
          content: '""',
          left: 0,
          mixBlendMode: "multiply",
          opacity: 0.3,
          position: "absolute",
          right: 0,
          top: 0,
        },
        "&.profile-contents-root-0": {
          "&:after": {
            backgroundColor: `${palette.primary.main}`,
          },
        },
        "&.profile-contents-root-1": {
          "&:after": {
            backgroundColor: `${palette.secondary.main}`,
          },
        },
        "&.profile-contents-root-2": {
          "&:after": {
            backgroundColor: "yellow",
          },
        },
      },
    }))();
    const icons = {
      linkedIn: {
        image: {
          url: linkedIn,
        },
      },
      twitter: {
        image: {
          url: twitter,
        },
      },
      website: {
        image: {
          url: website,
        },
      },
    };

    const profiles = getProfiles();
    return (
      <div style={{ margin: "0 auto", width: "80%", overflow: "visible" }}>
        <ProfileList
          contactIcons={icons}
          profiles={profiles}
          classes={{ profileContentsRoot: classes.profileContentsRoot }}
        />
      </div>
    );
  })
  .add("Navigation", () => {
    const classes = makeStyles((theme) => ({
      root: {
        position: "relative",
      },
      backButton: {
        position: "absolute",
        left: 0,
      },
      forwardButton: {
        position: "absolute",
        right: 0,
      },
      profile: {
        background: "none",
        height: "auto",
        justifyContent: "flex-start",
        "&::after": {
          content: "none",
        },
        textAlign: "center",
      },
      profilePicture: {
        border: "6px solid transparent",
        boxSizing: "border-box",
        borderRadius: "50%",
        display: "block",
        margin: "0 auto",
        width: "8rem",
        height: "8rem",
      },
      profilePictureSelected: {
        border: `6px solid ${theme.palette.primary.main}`,
      },
    }))();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const profiles = getProfiles();
    const handleSelectedIndexChanged = (index) => setSelectedIndex(index);

    return (
      <Grid container justify="flex-end" className={classes.root}>
        <Grid item xs={12}>
          <ProfileList
            cellHeight={400}
            height={425}
            classes={{
              profile: classes.profile,
              profilePicture: classes.profilePicture,
              profilePictureSelected: classes.profilePictureSelected,
            }}
            onSelectedIndexChanged={handleSelectedIndexChanged}
            profiles={profiles}
            scrollOnSelectedIndexChange
            selectedIndex={selectedIndex}
          />
        </Grid>
        <NavigationButton
          className={classes.backButton}
          onClick={() =>
            setSelectedIndex(
              (profiles.length + (selectedIndex - 1)) % profiles.length
            )
          }
        >
          <ArrowBack color="primary" />
        </NavigationButton>
        <NavigationButton
          className={classes.forwardButton}
          onClick={() =>
            setSelectedIndex((selectedIndex + 1) % profiles.length)
          }
        >
          <ArrowForward color="primary" />
        </NavigationButton>
      </Grid>
    );
  });

storiesOf("Components/Story List", module).add("Default", () => {
  const classes = makeStyles(({ palette }) => ({
    root: {
      position: "relative",
    },
    storyContentsRoot: {
      "&:after": {
        bottom: 0,
        content: '""',
        left: 0,
        mixBlendMode: "multiply",
        opacity: 0.3,
        position: "absolute",
        right: 0,
        top: 0,
      },
      "&.story-contents-root-0": {
        "&:after": {
          backgroundColor: `${palette.primary.main}`,
        },
      },
      "&.story-contents-root-1": {
        "&:after": {
          backgroundColor: `${palette.secondary.main}`,
        },
      },
      "&.story-contents-root-2": {
        "&:after": {
          backgroundColor: "yellow",
        },
      },
    },
  }))();
  const foundStories = useStories(
    "https://pesacheck.org/tagged/public-finance"
  );
  const stories = foundStories.map((story) => ({
    ...story,
    description: story.subtitle,
    link: { url: story.uniqueSlug, title: "Learn More" },
    image: {
      url: `https://cdn-images-1.medium.com/max/480/${story.virtuals.previewImage.imageId}`,
    },
  }));

  return (
    <div style={{ margin: "0 auto", width: "80%", overflow: "visible" }}>
      <StoryList
        classes={{ storyContentsRoot: classes.storyContentsRoot }}
        md={3.3}
        spacing={0}
        stories={stories}
        xs={1.3}
      />
    </div>
  );
});

storiesOf("Components/DocumentsAndDatasets", module)
  .addDecorator(withKnobs)
  .add("Default", () =>
    React.createElement(() => {
      const classes = makeStyles(({ breakpoints }) => ({
        section: {
          margin: "0 auto",
          width: "90%",
        },
        img: {
          width: "100%",
          background: `transparent url(${imgHighlight}) 50% 50% no-repeat`,
          backgroundSize: "cover",
          height: "20rem",
          [breakpoints.up("md")]: {
            width: "27.7143rem",
            height: "28rem",
          },
          [breakpoints.up("lg")]: {
            width: "37.7143rem",
            height: "38rem",
          },
        },
        datasetsLink: {
          marginTop: "2rem",
        },
        documentsLink: {
          marginTop: "2rem",
        },
      }))();

      return (
        <div>
          <DocumentsAndDatasets
            title={text("title", "Featured Research")}
            subtitle={text(
              "subtitle",
              "Get access to the best original scientific and medical research by African experts who understand local context."
            )}
            datasets={{
              contentType: "Datasets",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              icon: <StorageIcon fontSize="large" />,
            }}
            documents={{
              contentType: "Documents",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              icon: <DescriptionIcon fontSize="large" />,
            }}
            classes={{
              section: classes.section,
              datasetsLink: classes.datasetsLink,
              documentsLink: classes.documentsLink,
            }}
          >
            <div className={classes.img} />
          </DocumentsAndDatasets>
        </div>
      );
    })
  );

storiesOf("Components/Filter", module)
  .addDecorator(withKnobs)
  .add("Default", () =>
    React.createElement(() => {
      const classes = makeStyles(() => ({
        filterButton: {
          color: "#818080",
          background: "#F0EFEF",
          border: 0,
          borderRadius: 0,
          boxShadow: "0.125rem 0.125rem 0.25rem #00000026",
          letterSpacing: 0,
          "&:hover": {
            background: "#DD4C1A",
          },
        },
        filterActiveButton: {
          border: "1px solid #DD4C1A",
          background: "#DD4C1A",
          color: "white",
        },
        filterActiveSubButton: {
          color: "#DD4C1A",
          borderBottom: "2px solid #DD4C1A",
        },
        filterCaption: {
          color: "#6A6A6A",
        },
        filterContainer: {
          justifyContent: "center",
        },
        filterSubCategory: {
          display: "flex",
          justifyContent: "center",
          paddingTop: 0,
          marginTop: "1rem",
        },
      }))();

      const parentTopics = object("parentTopics", [
        { name: "All", slug: "all" },
        { name: "Technology", slug: "technology" },
        { name: "Policy", slug: "Policy" },
        { name: "Culture", slug: "Culture" },
        { name: "Research", slug: "Research" },
        { name: "Other", slug: "other" },
      ]);
      const subTopics = object("subTopics", [
        { name: "Complete", slug: "complete" },
        { name: "Active", slug: "active" },
        { name: "Stalled", slug: "stalled" },
        { name: "Unknown", slug: "unknown" },
      ]);

      return (
        <div>
          <Filter
            activeTopic={text("activeTopic", "all")}
            parentTopics={parentTopics}
            subTopics={subTopics}
            classes={{
              activeButton: classes.filterActiveButton,
              activeSubButton: classes.filterActiveSubButton,
              button: classes.filterButton,
              caption: classes.filterCaption,
              filter: classes.filterContainer,
              subtopic: classes.filterSubCategory,
            }}
          />
        </div>
      );
    })
  );

storiesOf("Full Components/Datasets and Documents", module)
  .addDecorator(withKnobs)
  .add("Default", () =>
    React.createElement(() => {
      const classes = makeStyles(({ breakpoints }) => ({
        section: {
          margin: "0 auto",
          width: "90%",
        },
        img: {
          width: "100%",
          background: `transparent url(${imgHighlight}) 50% 50% no-repeat`,
          backgroundSize: "cover",
          height: "20rem",
          [breakpoints.up("md")]: {
            width: "27.7143rem",
            height: "28rem",
          },
          [breakpoints.up("lg")]: {
            width: "37.7143rem",
            height: "38rem",
          },
        },
        datasetsLink: {
          marginTop: "2rem",
        },
        documentsLink: {
          marginTop: "2rem",
        },
      }))();

      return (
        <div>
          <DocumentsAndDatasets
            title={text("title", "Featured Research")}
            subtitle={text(
              "subtitle",
              "Get access to the best original scientific and medical research by African experts who understand local context."
            )}
            datasets={{
              contentType: "Datasets",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              icon: <StorageIcon fontSize="large" />,
            }}
            documents={{
              contentType: "Documents",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              icon: <DescriptionIcon fontSize="large" />,
            }}
            classes={{
              section: classes.section,
              datasetsLink: classes.datasetsLink,
              documentsLink: classes.documentsLink,
            }}
          >
            <div className={classes.img} />
          </DocumentsAndDatasets>
        </div>
      );
    })
  );

storiesOf("Full Components/ProfileList", module)
  .addDecorator(withKnobs)
  .add("Default", () => {
    const classes = makeStyles(({ palette }) => ({
      root: {
        position: "relative",
      },
      profileContentsRoot: {
        "&:after": {
          bottom: 0,
          content: '""',
          left: 0,
          mixBlendMode: "multiply",
          opacity: 0.3,
          position: "absolute",
          right: 0,
          top: 0,
        },
        "&.profile-contents-root-0": {
          "&:after": {
            backgroundColor: `${palette.primary.main}`,
          },
        },
        "&.profile-contents-root-1": {
          "&:after": {
            backgroundColor: `${palette.secondary.main}`,
          },
        },
        "&.profile-contents-root-2": {
          "&:after": {
            backgroundColor: "yellow",
          },
        },
      },
    }))();
    const icons = {
      linkedIn: {
        image: {
          url: linkedIn,
        },
      },
      twitter: {
        image: {
          url: twitter,
        },
      },
      website: {
        image: {
          url: website,
        },
      },
    };

    const profiles = getProfiles();
    return (
      <div style={{ margin: "0 auto", width: "80%", overflow: "visible" }}>
        <ProfileList
          contactIcons={icons}
          profiles={profiles}
          classes={{ profileContentsRoot: classes.profileContentsRoot }}
        />
      </div>
    );
  })
  .add("ProfileList Navigation", () => {
    const classes = makeStyles((theme) => ({
      root: {
        position: "relative",
      },
      backButton: {
        position: "absolute",
        left: 0,
      },
      forwardButton: {
        position: "absolute",
        right: 0,
      },
      profile: {
        background: "none",
        height: "auto",
        justifyContent: "flex-start",
        "&::after": {
          content: "none",
        },
        textAlign: "center",
      },
      profilePicture: {
        border: "6px solid transparent",
        boxSizing: "border-box",
        borderRadius: "50%",
        display: "block",
        margin: "0 auto",
        width: "8rem",
        height: "8rem",
      },
      profilePictureSelected: {
        border: `6px solid ${theme.palette.primary.main}`,
      },
    }))();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const profiles = getProfiles();
    const handleSelectedIndexChanged = (index) => setSelectedIndex(index);

    return (
      <Grid container justify="flex-end" className={classes.root}>
        <Grid item xs={12}>
          <ProfileList
            cellHeight={400}
            height={425}
            classes={{
              profile: classes.profile,
              profilePicture: classes.profilePicture,
              profilePictureSelected: classes.profilePictureSelected,
            }}
            onSelectedIndexChanged={handleSelectedIndexChanged}
            profiles={profiles}
            scrollOnSelectedIndexChange
            selectedIndex={selectedIndex}
          />
        </Grid>
        <NavigationButton
          className={classes.backButton}
          onClick={() =>
            setSelectedIndex(
              (profiles.length + (selectedIndex - 1)) % profiles.length
            )
          }
        >
          <ArrowBack color="primary" />
        </NavigationButton>
        <NavigationButton
          className={classes.forwardButton}
          onClick={() =>
            setSelectedIndex((selectedIndex + 1) % profiles.length)
          }
        >
          <ArrowForward color="primary" />
        </NavigationButton>
      </Grid>
    );
  });

storiesOf("Full Components/StoryList", module)
  .addDecorator(withKnobs)
  .add("Default", () => {
    const classes = makeStyles(({ palette }) => ({
      root: {
        position: "relative",
      },
      storyContentsRoot: {
        "&:after": {
          bottom: 0,
          content: '""',
          left: 0,
          mixBlendMode: "multiply",
          opacity: 0.3,
          position: "absolute",
          right: 0,
          top: 0,
        },
        "&.story-contents-root-0": {
          "&:after": {
            backgroundColor: `${palette.primary.main}`,
          },
        },
        "&.story-contents-root-1": {
          "&:after": {
            backgroundColor: `${palette.secondary.main}`,
          },
        },
        "&.story-contents-root-2": {
          "&:after": {
            backgroundColor: "yellow",
          },
        },
      },
    }))();
    const foundStories = useStories(
      "https://pesacheck.org/tagged/public-finance"
    );
    const stories = foundStories.map((story) => ({
      ...story,
      description: story.subtitle,
      link: { url: story.uniqueSlug, title: "Learn More" },
      image: {
        url: `https://cdn-images-1.medium.com/max/480/${story.virtuals.previewImage.imageId}`,
      },
    }));

    return (
      <div style={{ margin: "0 auto", width: "80%", overflow: "visible" }}>
        <StoryList
          classes={{ storyContentsRoot: classes.storyContentsRoot }}
          md={3.3}
          spacing={0}
          stories={stories}
          xs={1.3}
        />
      </div>
    );
  });

storiesOf("Full Components/Filter", module)
  .addDecorator(withKnobs)
  .add("Default", () =>
    React.createElement(() => {
      const classes = makeStyles(() => ({
        filterButton: {
          color: "#818080",
          background: "#F0EFEF",
          border: 0,
          borderRadius: 0,
          boxShadow: "0.125rem 0.125rem 0.25rem #00000026",
          letterSpacing: 0,
          "&:hover": {
            background: "#DD4C1A",
          },
        },
        filterActiveButton: {
          border: "1px solid #DD4C1A",
          background: "#DD4C1A",
          color: "white",
        },
        filterActiveSubButton: {
          color: "#DD4C1A",
          borderBottom: "2px solid #DD4C1A",
        },
        filterCaption: {
          color: "#6A6A6A",
        },
        filterContainer: {
          justifyContent: "center",
        },
        filterSubCategory: {
          display: "flex",
          justifyContent: "center",
          paddingTop: 0,
          marginTop: "1rem",
        },
      }))();

      const parentTopics = object("parentTopics", [
        { name: "All", slug: "all" },
        { name: "Technology", slug: "technology" },
        { name: "Policy", slug: "Policy" },
        { name: "Culture", slug: "Culture" },
        { name: "Research", slug: "Research" },
        { name: "Other", slug: "other" },
      ]);
      const subTopics = object("subTopics", [
        { name: "Complete", slug: "complete" },
        { name: "Active", slug: "active" },
        { name: "Stalled", slug: "stalled" },
        { name: "Unknown", slug: "unknown" },
      ]);

      return (
        <div>
          <Filter
            activeTopic={text("activeTopic", "all")}
            parentTopics={parentTopics}
            subTopics={subTopics}
            classes={{
              activeButton: classes.filterActiveButton,
              activeSubButton: classes.filterActiveSubButton,
              button: classes.filterButton,
              caption: classes.filterCaption,
              filter: classes.filterContainer,
              subtopic: classes.filterSubCategory,
            }}
          />
        </div>
      );
    })
  );

storiesOf("Full Components/Footer", module)
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
  .add("Footer Logo", () => {
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
      <AboutOrganization
        initiative={text("initiative", ABOUT.initiative)}
        options={options.about}
        classes={{ section: classes.section }}
      >
        {text("children", ABOUT.about)}
      </AboutOrganization>
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
  });
