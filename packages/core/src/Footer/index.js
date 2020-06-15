import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import { Grid, Hidden, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import A from "../A";
import About from "./About";
import Initiative from "./Initiative";
import LegalLinks from "./LegalLinks";
import QuickLinks from "./QuickLinks";
import Section from "../Section";
import StayInTouch from "./StayInTouch";

const useStyles = makeStyles(
  ({ breakpoints, palette, spacing, typography }) => ({
    root: {},
    section: {},
    about: {},
    aboutAbout: {},
    aboutInitiative: {},
    divider: {
      backgroundColor: palette.secondary.main,
      height: 2,
    },
    dividerDesktop: {
      display: "none",
      [breakpoints.up("md")]: {
        display: "flex",
        marginLeft: spacing(2),
      },
    },
    dividerMobile: {
      order: 3,
    },
    grow: {
      flexGrow: 1,
    },
    organization: {
      marginBottom: "2.243125rem",
      [breakpoints.up("md")]: {
        marginBottom: "4.305625rem",
      },
    },
    organizationLogo: {
      width: "13.875rem",
      height: "auto",
      [breakpoints.up("md")]: {
        width: "18.3175rem",
      },
    },
    supporterLogo: {
      width: "9.6275rem",
      height: "auto",
      [breakpoints.up("md")]: {
        width: "13.7375rem",
      },
    },
    quickLinksMore: {
      marginTop: "2.881875rem",
      order: 4,
      [breakpoints.up("md")]: {
        marginTop: 0,
        order: 3,
      },
    },
    quickLinksContact: {
      marginTop: "2.881875rem",
      order: 5,
      [breakpoints.up("md")]: {
        marginTop: 0,
        order: 4,
      },
    },
    initiative: {
      order: 2,
      [breakpoints.up("md")]: {
        order: 5,
      },
    },
    copyright: {
      marginTop: "1.618125rem",
      order: 3,
      textAlign: "center",
      [breakpoints.up("md")]: {
        marginTop: 0,
        order: 2,
      },
    },
    copyrightLogo: {
      marginLeft: "0.80375rem",
      verticalAlign: "middle",
    },
    legal: {
      order: 2,
      [breakpoints.up("md")]: {
        order: 3,
      },
    },
    legalLinks: {},
    legalLinksLink: {},
    legalLinksList: {},
    primary: {
      paddingBottom: typography.pxToRem(59),
      [breakpoints.up("md")]: {
        paddingBottom: typography.pxToRem(120.89),
      },
    },
    secondary: {
      backgroundColor: palette.secondary.main,
      border: "1px solid #707070",
      color: palette.text.secondary.main,
      paddingBottom: "2.381875rem",
      paddingTop: "4.194375rem",
      [breakpoints.up("md")]: {
        paddingBottom: "4.194375rem",
        paddingTop: "5.375rem",
      },
    },
    stayInTouch: {},
    stayInTouchIcon: {},
    stayInTouchLink: {},
    stayInTouchText: {},
    stayInTouchLinks: {},
    text: {},
  })
);

function Footer({
  about: { support, socialMedia },
  aboutSection,
  copyrightLogo,
  initiativeLogo,
  legalLinks,
  quickLinks,
  organizationLogo,
  ...props
}) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <div className={classes.primary}>
        <Section classes={{ root: classes.section }}>
          <Grid
            container
            alignItems="baseline"
            className={classes.organization}
          >
            <Grid item>
              <Typography variant="h1">
                <A href={organizationLogo.url}>
                  <img
                    src={organizationLogo.image.url}
                    alt={organizationLogo.image.alt}
                    className={classes.organizationLogo}
                  />
                </A>
              </Typography>
            </Grid>
            <div
              className={clsx(
                classes.grow,
                classes.divider,
                classes.dividerDesktop
              )}
            />
          </Grid>
          <Grid container>
            <Grid item xs={12} md={4}>
              <About
                {...aboutSection}
                classes={{
                  root: classes.about,
                  about: classes.aboutAbout,
                  initiative: classes.aboutInitiative,
                }}
              />
            </Grid>
            <Grid item md={2} implementation="css" smDown component={Hidden} />
            <Grid item xs={6} md={2} className={classes.quickLinksMore}>
              <div className={classes.links}>
                <QuickLinks {...quickLinks[0]} />
              </div>
            </Grid>
            <Grid item xs={6} md={2} className={classes.quickLinksContact}>
              <div className={classes.links}>
                <QuickLinks {...quickLinks[1]} />
              </div>
            </Grid>
            <Grid item xs={12} md={2} className={classes.initiative}>
              <div className={classes.project}>
                <Initiative logo={initiativeLogo} about={aboutSection} />
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              implementation="css"
              mdUp
              component={Hidden}
              className={classes.dividerMobile}
            >
              <div className={clsx(classes.grow, classes.divider)} />
            </Grid>
          </Grid>
        </Section>
      </div>
      <div className={classes.secondary}>
        <Section classes={{ root: classes.section }}>
          <Grid container justify="space-between" alignItems="center">
            <Grid item xs={12} md={5}>
              <StayInTouch
                support={support}
                socialMedia={socialMedia}
                classes={{
                  root: classes.stayInTouch,
                  icon: classes.stayInTouchIcon,
                  link: classes.stayInTouchLink,
                  links: classes.stayInTouchLinks,
                  text: classes.stayInTouchText,
                }}
              />
            </Grid>
            <Grid item xs={12} md={2} className={classes.copyright}>
              <div className={classes.copyright}>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  className={classes.text}
                >
                  Outbreak.Africa
                  {copyrightLogo && (
                    <A href={copyrightLogo.url}>
                      <img
                        src={copyrightLogo.image.url}
                        alt={copyrightLogo.image.alt}
                        className={classes.copyrightLogo}
                      />
                    </A>
                  )}
                </Typography>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              container
              justify="flex-end"
              alignItems="center"
              className={classes.legal}
            >
              <LegalLinks
                {...legalLinks}
                classes={{
                  root: classes.legalLinks,
                  link: classes.legalLinksLink,
                  list: classes.legalLinksList,
                }}
              />
            </Grid>
          </Grid>
        </Section>
      </div>
    </div>
  );
}

Footer.propTypes = {
  about: PropTypes.shape({
    support: PropTypes.shape({}),
    socialMedia: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  }).isRequired,
  aboutSection: PropTypes.shape({}).isRequired,
  copyrightLogo: PropTypes.shape({
    image: PropTypes.shape({
      alt: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
    url: PropTypes.string.isRequired,
  }),
  initiativeLogo: PropTypes.shape({}).isRequired,
  legalLinks: PropTypes.shape({
    linkComponent: PropTypes.node,
    links: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  }).isRequired,
  quickLinks: PropTypes.arrayOf(
    PropTypes.shape({
      linkComponent: PropTypes.node,
      links: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  organizationLogo: PropTypes.shape({
    image: PropTypes.shape({
      alt: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};
Footer.defaultProps = {
  copyrightLogo: undefined,
};

export default Footer;
