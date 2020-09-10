import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import { Grid, Hidden, Typography } from "@material-ui/core";

import A from "../A";
import About from "./About";
import Initiative from "./Initiative";
import QuickLinks from "./QuickLinks";
import Section from "../Section";

import useStyles from "./useStyles";

function PrimaryFooter({
  about,
  initiativeLogo,
  quickLinks,
  organizationLogo,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <div className={classes.primary}>
      <Section classes={{ root: classes.section }}>
        <Grid container alignItems="baseline" className={classes.organization}>
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
              {...about}
              classes={{
                root: classes.about,
                about: classes.aboutAbout,
                initiative: classes.Initiative,
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
              <Initiative logo={initiativeLogo} initiative={about.initiative} />
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
};

export default PrimaryFooter;
