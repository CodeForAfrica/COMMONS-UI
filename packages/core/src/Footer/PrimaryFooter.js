import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import { Grid, Hidden } from "@material-ui/core";

import About from "./About";
import Initiative from "./Initiative";
import QuickLinks from "./QuickLinks";
import Logo from "./Logo";
import Section from "../Section";

import useStyles from "./useStyles";

function PrimaryFooter({
  about,
  options,
  initiativeLogo,
  quickLinks,
  organizationLogo,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <div className={classes.primary}>
      <Section classes={{ root: classes.section }}>
        <Logo {...options.logo} {...organizationLogo} {...options.logo} />
        <Grid container>
          <Grid item xs={12} md={4}>
            <About
              initiative={about.initiative}
              options={options.about}
              classes={{
                root: classes.about,
                about: classes.aboutAbout,
                initiative: classes.aboutInitiative,
              }}
            >
              {about.about}
            </About>
          </Grid>
          <Grid item md={2} implementation="css" smDown component={Hidden} />
          <Grid item xs={6} md={2} className={classes.quickLinksMore}>
            <div className={classes.links}>
              <QuickLinks {...options.quickLinks} {...quickLinks[0]} />
            </div>
          </Grid>
          <Grid item xs={6} md={2} className={classes.quickLinksContact}>
            <div className={classes.links}>
              <QuickLinks {...options.quickLinks} {...quickLinks[1]} />
            </div>
          </Grid>
          <Grid item xs={12} md={2} className={classes.initiative}>
            <div className={classes.project}>
              <Initiative {...options.initiativeLogo} {...initiativeLogo}>
                {about.initiative}
              </Initiative>
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
  );
}

PrimaryFooter.propTypes = {
  about: PropTypes.shape({
    initiative: PropTypes.string,
    about: PropTypes.string,
  }).isRequired,
  initiativeLogo: PropTypes.shape({}).isRequired,
  quickLinks: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  organizationLogo: PropTypes.shape({
    image: PropTypes.shape({
      alt: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  options: PropTypes.shape({
    logo: PropTypes.shape({}),
    quickLinks: PropTypes.shape({}),
    about: PropTypes.shape({}),
    initiativeLogo: PropTypes.shape({}),
  }),
};
PrimaryFooter.defaultProps = {
  options: {},
};

export default PrimaryFooter;
