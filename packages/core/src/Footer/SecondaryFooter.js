import React from "react";
import PropTypes from "prop-types";

import { Grid } from "@material-ui/core";

import Copyright from "./Copyright";
import LegalLinks from "./LegalLinks";
import Section from "../Section";
import StayInTouch from "./StayInTouch";

import useStyles from "./useStyles";

function SecondaryFooter({
  contacts,
  copyright,
  copyrightLogo,
  copyrightYear,
  legalLinks,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <div className={classes.secondary}>
      <Section classes={{ root: classes.section }}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item xs={12} md={5}>
            <StayInTouch
              {...contacts}
              classes={{
                root: classes.stayInTouch,
                icon: classes.stayInTouchIcon,
                link: classes.stayInTouchLink,
                links: classes.stayInTouchLinks,
                title: classes.stayInTouchTitle,
                text: classes.stayInTouchText,
              }}
            />
          </Grid>
          <Grid item xs={12} md={2} className={classes.copyright}>
            <Copyright
              copyrightLogo={copyrightLogo}
              copyright={copyright}
              copyrightYear={copyrightYear}
            />
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
  );
}

SecondaryFooter.propTypes = {
  contacts: PropTypes.shape({
    socialMedia: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
    support: PropTypes.shape({}),
    title: PropTypes.string,
  }).isRequired,
  copyright: PropTypes.string,
  copyrightLogo: PropTypes.shape({
    image: PropTypes.shape({
      alt: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
    url: PropTypes.string.isRequired,
  }),
  copyrightYear: PropTypes.string,
  legalLinks: PropTypes.shape({}).isRequired,
};

SecondaryFooter.defaultProps = {
  copyright: "Outbreak.Africa",
  copyrightLogo: undefined,
  copyrightYear: undefined,
};

export default SecondaryFooter;
