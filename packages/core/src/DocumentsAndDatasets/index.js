import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import { Grid, Hidden } from "@material-ui/core";

import Content from "./Content";
import RichTypography from "../RichTypography";
import Section from "../Section";
import useStyles from "./useStyles";

function DocumentsAndDatasets({
  children,
  datasets,
  description,
  documents,
  title,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Grid container className={classes.background}>
          <Grid item xs={12} md={5} className={classes.highlight}>
            {children}
          </Grid>
          <Grid
            item
            md={7}
            container
            implementation="css"
            smDown
            component={Hidden}
          >
            <Grid item md={6} className={classes.backgroundDocuments} />
            <Grid item md={6} className={classes.backgroundDatasets} />
          </Grid>
        </Grid>
        <Grid container className={classes.content}>
          <Grid item md={5} implementation="css" smDown component={Hidden} />
          <Grid item xs={12} md={7} container justify="space-between">
            <Grid item xs={12} className={classes.contentHeading}>
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
                className={classes.description}
              >
                {description}
              </RichTypography>
            </Grid>
          </Grid>
          <Grid item md={5} implementation="css" smDown component={Hidden} />
          <Grid
            item
            xs={12}
            md={3}
            className={clsx(
              classes.backgroundDocuments,
              classes.contentDocuments
            )}
          >
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
          </Grid>
          <Grid item md={1} implementation="css" smDown component={Hidden} />
          <Grid
            item
            xs={12}
            md={3}
            className={clsx(
              classes.backgroundDatasets,
              classes.contentDatasets
            )}
          >
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
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

DocumentsAndDatasets.propTypes = {
  children: PropTypes.node,
  datasets: PropTypes.shape({
    icon: PropTypes.node,
  }),
  description: PropTypes.string,
  documents: PropTypes.shape({
    icon: PropTypes.node,
  }),
  title: PropTypes.string,
};

DocumentsAndDatasets.defaultProps = {
  children: null,
  datasets: {
    contentType: "Datasets",
  },
  description: undefined,
  documents: {
    contentType: "Documents",
  },
  title: undefined,
};

export default DocumentsAndDatasets;
