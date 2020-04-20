import React from "react";
import PropTypes from "prop-types";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Section from "../Section";

import About from "../About";
import QuickLinks from "./QuickLinks";
import StayInTouch from "./StayInTouch";
import Initiative from "./Initiative";
import A from "../A";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
    flexGrow: 1,
    color: (props) => props.topFooter.color,
    backgroundColor: (props) => props.topFooter.backgroundColor,
    paddingTop: "4.5625rem",
    paddingBottom: "5.3125rem",
    marginTop: "1.875rem",
  },
  footer1: {
    position: "relative",
    zIndex: 1,
    flexGrow: 1,
    color: (props) => props.topFooter.color,
    backgroundColor: (props) => props.topFooter.backgroundColor,
    paddingTop: "4.5625rem",
    marginTop: "1.875rem",
  },
  footer2: {
    position: "relative",
    zIndex: 1,
    flexGrow: 1,
    color: (props) => props.bottomFooter.color,
    backgroundColor: (props) => props.bottomFooter.backgroundColor,
    paddingTop: "4.5625rem",
    paddingBottom: "5.3125rem",
    marginTop: "1.875rem",
  },
  license: {
    marginTop: "2.3125rem",
  },
  about: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "16.375rem", // match thinnest component
      // Should be marginRight: '2.578125rem' but won't fit
      marginRight: "2rem",
    },
    [theme.breakpoints.up("lg")]: {
      width: "25.5625rem",
      marginRight: "5.4375rem",
    },
  },
  stayInTouch: {
    marginTop: "3.125rem",
    color: "white",
  },
  links: {
    paddingTop: "2.25rem",
    [theme.breakpoints.up("md")]: {
      paddingTop: 0,
      paddingLeft: "2.6875rem",
      paddingRight: "2.9375rem",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "1.25rem",
      paddingRight: "1.25rem",
    },
  },
  copyright: {
    paddingTop: "2.25rem",
    [theme.breakpoints.up("md")]: {
      paddingTop: 0,
      paddingLeft: "2.6875rem",
      paddingRight: "2.9375rem",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "3.25rem",
      paddingRight: "5.25rem",
    },
  },
  project: {
    width: "100%",
    paddingTop: "2.25rem",
    [theme.breakpoints.up("md")]: {
      width: "1.53125rem", // .75 of lg
      // Should be marginLeft: '5.109375rem' but won't fit
      marginLeft: "2rem",
      padding: 0,
    },
    [theme.breakpoints.up("lg")]: {
      width: "1.375rem",
      marginLeft: ".8125rem",
    },
  },
  terms: {
    width: "100%",
    paddingTop: "2.25rem",
    [theme.breakpoints.up("md")]: {
      width: "15.53125rem", // .75 of lg
      // Should be marginLeft: '5.109375rem' but won't fit
      marginLeft: "2rem",
      padding: 0,
    },
    [theme.breakpoints.up("lg")]: {
      width: "19.375rem",
      marginLeft: "6.8125rem",
    },
  },
  support: {
    marginTop: "4.0625rem",
  },
  text: {
    fontSize: "0.9375rem",
    color: "white",
  },
  cfaLogo: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "16.375rem", // match thinnest component
      // Should be marginRight: '2.578125rem' but won't fit
      marginRight: "2rem",
    },
    [theme.breakpoints.up("lg")]: {
      width: "25.5625rem",
      marginRight: "5.4375rem",
    },
  },
  underline: {
    width: "80%",
    marginLeft: "25.5625rem",
  },
  hr: {
    backgroundColor: (props) => props.bottomFooter.backgroundColor,
    height: ".09rem",
  },
}));

function Footer({
  about: { settings },
  firstLinks,
  aboutSection,
  initiativeLogo,
  topFooter,
  CFA,
  ...props
}) {
  const classes = useStyles(props);
  return (
    <div>
      <Grid
        id="footer"
        container
        justify="center"
        alignItems="flex-start"
        className={classes.footer1}
      >
        <Section>
          <Grid container justify="flex-start" alignItems="flex-start">
            <div className={classes.cfaLogo}>
              <div className={classes.img}>
                <A href="#">
                  <img
                    src={CFA.image}
                    alt={CFA.alt}
                    className={classes.imgCfa}
                  />
                </A>
              </div>
            </div>
            <div className={classes.underline}>
              <hr className={classes.hr} />
            </div>
          </Grid>
        </Section>
      </Grid>
      <Grid
        id="footer"
        container
        justify="center"
        alignItems="flex-start"
        className={classes.root}
      >
        <Section>
          <Grid container justify="flex-start" alignItems="flex-start">
            <div className={classes.about}>
              <About
                classes={{ root: classes.about }}
                about={aboutSection}
                topFooter={...topFooter}
              />
            </div>
            <div className={classes.links}>
              <QuickLinks links={firstLinks} topFooter={...topFooter} />
            </div>
            <div className={classes.links}>
              <QuickLinks links={firstLinks} topFooter={...topFooter} />
            </div>
            <div className={classes.project}>
              <Initiative logo={initiativeLogo} />
            </div>
          </Grid>
        </Section>
      </Grid>
      <Grid
        container
        justify="center"
        alignItems="flex-start"
        className={classes.footer2}
      >
        <Section>
          <Grid container justify="flex-start" alignItems="flex-start">
            <div className={classes.takwimu}>
              <StayInTouch
                settings={settings}
                classes={{ root: classes.stayInTouch }}
                bottomFooter={props.bottomFooter}
              />
            </div>
            <div className={classes.copyright}>
              <Typography>2020 Outbreak Africa</Typography>
            </div>
            <div className={classes.terms}>
              <Typography variant="subtitle2" className={classes.text}>
                PRIVACY POLICY&nbsp; {" | "} &nbsp;TERMS OF SERVICE
              </Typography>
            </div>
          </Grid>
        </Section>
      </Grid>
    </div>
  );
}

Footer.propTypes = {
  about: PropTypes.shape({
    settings: PropTypes.shape({}).isRequired,
  }).isRequired,
  firstLinks: PropTypes.shape({}).isRequired,
  aboutSection: PropTypes.shape({}).isRequired,
  initiativeLogo: PropTypes.shape({}).isRequired,
  CFA: PropTypes.shape({
    image: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
  bottomFooter: PropTypes.shape({
    color: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
  }).isRequired,
  topFooter: PropTypes.shape({
    color: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
  }).isRequired,
};

export default Footer;
