import React from "react";
import PropTypes from "prop-types";

import { makeStyles, Container, Grid, Typography } from "@material-ui/core";

import StoryList from "./StoryList";

const useStyles = makeStyles((theme) => ({
  showCaseContainer: {
    maxWidth: "81.3571429rem",
    padding: 0,
  },
  root: {
    flexGrow: 1,
    padding: "3.1875rem 1.875rem",
    [theme.breakpoints.up("md")]: {
      padding: "3.1875rem 0",
    },
  },
  headline: {
    width: "100%",
    marginBottom: "2rem",
    [theme.breakpoints.up("md")]: {
      width: "59.625rem",
    },
    [theme.breakpoints.up("lg")]: {
      width: "79.5rem",
    },
  },
  headlineTitle: {
    textAlign: "left",
    paddingBottom: "1rem",
  },
  headlineDescription: {
    textAlign: "left",
  },
}));

function Showcase({
                    stories,
                    title,
                    description,
                    xs,
                    cellHeight,
                    height,
                    minHeight,
                    ...props
                    }) {
  const classes = useStyles(props);

  return (
    <Container className={classes.showCaseContainer}>
      <Grid
        container
        direction="column"
        className={classes.root}
        justify="center"
      >
        <Grid
          item
          xs={xs}
          container
          direction="row"
          className={classes.headline}
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={xs}>
            <Typography variant="h2" className={classes.headlineTitle}>
              {title}
            </Typography>
          </Grid>

          <Grid item xs={xs}>
            <Typography variant="body2" className={classes.headlineDescription}>
              {description}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={xs}>
          <StoryList
            stories={stories}
            cellHeight={cellHeight}
            height={height}
            minHeight={minHeight}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

Showcase.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  xs: PropTypes.number.isRequired,
  cellHeight: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  minHeight: PropTypes.number.isRequired,
};

export default Showcase;
