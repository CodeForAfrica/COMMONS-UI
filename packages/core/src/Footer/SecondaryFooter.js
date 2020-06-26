import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import { Grid, Typography } from "@material-ui/core";

import A from "../A";
import LegalLinks from "./LegalLinks";
import Section from "../Section";
import StayInTouch from "./StayInTouch";

import useStyles from "./useStyles";

function SecondaryFooter({
  about: { support, socialMedia },
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
            {(copyright || copyrightLogo || copyrightYear) && (
              <div className={classes.copyright}>
                {copyright && (
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    className={clsx(classes.text, "copyrightOrganization")}
                  >
                    {copyright}
                  </Typography>
                )}
                {copyrightLogo && (
                  <A href={copyrightLogo.url} className="copyrightLogo">
                    <img
                      src={copyrightLogo.image.url}
                      alt={copyrightLogo.image.alt || copyright}
                      className={classes.copyrightLogo}
                    />
                  </A>
                )}
                {copyrightYear && (
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    className={clsx(classes.text, "copyrightYear")}
                  >
                    {copyrightYear}
                  </Typography>
                )}
              </div>
            )}
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
  about: PropTypes.shape({
    support: PropTypes.shape({}),
    socialMedia: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
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
  legalLinks: PropTypes.shape({
    linkComponent: PropTypes.node,
    links: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  }).isRequired,
};

SecondaryFooter.defaultProps = {
  copyright: "Outbreak.Africa",
  copyrightLogo: undefined,
  copyrightYear: undefined,
};

export default SecondaryFooter;
