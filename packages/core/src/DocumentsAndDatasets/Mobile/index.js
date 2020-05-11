import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import { Grid } from "@material-ui/core";

import Content from "../Content";
import RichTypography from "../../RichTypography";
import Section from "../../Section";
import useStyles from "../useStyles";

function MobileDocumentsAndDatasets({
  children,
  datasets,
  documents,
  subtitle,
  title,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <div className={clsx(classes.root)}>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.highlight}>
          {children}
        </Grid>
        <Grid item xs={12} container className={classes.content}>
          <Grid item xs={12} className={classes.heading}>
            <Section classes={{ root: classes.section }}>
              <RichTypography
                variant="h2"
                color="textSecondary"
                className={classes.title}
              >
                {title}
              </RichTypography>
              <RichTypography
                variant="subtitle1"
                color="textSecondary"
                className={classes.subtitle}
              >
                {subtitle}
              </RichTypography>
            </Section>
          </Grid>
          <Grid item xs={12} container className={classes.contents}>
            <Grid item xs={12} className={classes.contentsDocuments}>
              <Section classes={{ root: classes.section }}>
                <Content
                  {...documents}
                  classes={{
                    root: classes.documents,
                    contentType: classes.documentsContentType,
                    description: classes.documentsDescription,
                    icon: classes.documentsIcon,
                    link: classes.documentsLink,
                  }}
                />
              </Section>
            </Grid>
            <Grid item xs={12} className={classes.contentsDatasets}>
              <Section classes={{ root: classes.section }}>
                <Content
                  {...datasets}
                  classes={{
                    root: classes.datasets,
                    contentType: classes.datasetsContentType,
                    description: classes.datasetsDescription,
                    icon: classes.datasetsIcon,
                    link: classes.datasetsLink,
                  }}
                />
              </Section>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

MobileDocumentsAndDatasets.propTypes = {
  children: PropTypes.node,
  datasets: PropTypes.shape({
    icon: PropTypes.node,
  }),
  documents: PropTypes.shape({
    icon: PropTypes.node,
  }),
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};

MobileDocumentsAndDatasets.defaultProps = {
  children: null,
  datasets: {
    contentType: "Datasets",
  },
  documents: {
    contentType: "Documents",
  },
  subtitle: undefined,
};

export default MobileDocumentsAndDatasets;
