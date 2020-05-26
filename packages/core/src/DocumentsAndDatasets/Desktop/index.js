import React from "react";
import PropTypes from "prop-types";

import { Grid } from "@material-ui/core";

import Content from "../Content";
import RichTypography from "../../RichTypography";
import Section from "../../Section";
import useStyles from "../useStyles";

function DocumentsAndDatasets({
  children,
  datasets,
  documents,
  subtitle,
  title,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Grid container className={classes.container}>
          <Grid item md={5} className={classes.highlight}>
            {children}
          </Grid>
          <Grid
            item
            md={7}
            container
            direction="column"
            className={classes.content}
          >
            <Grid item className={classes.heading}>
              <RichTypography
                variant="h2"
                color="textSecondary"
                className={classes.title}
              >
                {title}
              </RichTypography>
              {subtitle && (
                <RichTypography
                  variant="subtitle1"
                  color="textSecondary"
                  className={classes.subtitle}
                >
                  {subtitle}
                </RichTypography>
              )}
            </Grid>
            <Grid
              item
              container
              justify="space-between"
              className={classes.contents}
            >
              <Grid item md={5} className={classes.contentsDocuments}>
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
              <Grid item md={5} className={classes.contentsDatasets}>
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
  documents: PropTypes.shape({
    icon: PropTypes.node,
  }),
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};

DocumentsAndDatasets.defaultProps = {
  children: null,
  datasets: {
    contentType: "Datasets",
  },
  documents: {
    contentType: "Documents",
  },
  subtitle: undefined,
};

export default DocumentsAndDatasets;
