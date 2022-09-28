import { Grid, Button, ButtonBase } from "@mui/material";
import { ThemeProvider, StyledEngineProvider, createTheme } from "@mui/material/styles";

import makeStyles from '@mui/styles/makeStyles';

import clsx from "clsx";
import { PropTypes } from "prop-types";
import React from "react";

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: "1rem",
  },
  activeButton: {
    color: theme.palette.text.secondary,
  },
  activeSubButton: {},
  mainButton: {
    fontFamily: theme.typography.fontFamily,
    textTransform: "capitalize",
    fontSize: "0.75rem",
    minWidth: "57px",
    padding: "0.5rem",
    "&:hover": {
      color: theme.palette.text.secondary,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
      padding: "auto 1rem",
      minWidth: "100px",
    },
  },
  subButton: {
    fontWeight: 700,
    letterSpacing: 0,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
    fontSize: "0.75rem",
    marginRight: theme.typography.pxToRem(16),
    "&:last-of-type": {
      marginRight: 0,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "initial",
    },
  },
  itemContainer: {
    display: "flex",
    flexDirection: "column",
  },
  filter: {
    display: "flex",
    padding: "1.5rem 0rem",
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 1,
    flexWrap: "wrap",
    [theme.breakpoints.up("md")]: {
      flexGrow: 0,
      padding: 0,
    },
  },
  subtopic: {
    paddingTop: "1rem",
  },
}));

function Filter({
  activeTopic,
  activeSubTopic,
  onButtonClick,
  onSubTopicButtonClick,
  mainTopics,
  subTopics,
  mainVariant,
  subVariant,
  mainProps,
  subProps,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Grid container className={classes.root}>
          <Grid item container spacing={2} className={classes.filter}>
            {mainTopics &&
              mainTopics.map((item) => (
                <Grid item key={item.slug}>
                  <Button
                    {...mainProps}
                    variant={mainVariant}
                    className={clsx(classes.mainButton, {
                      [classes.activeButton]: item.slug === activeTopic,
                    })}
                    onClick={() => onButtonClick(item.slug)}
                  >
                    {item.name}
                  </Button>
                </Grid>
              ))}
          </Grid>
          {subTopics && subTopics.length > 0 && (
            <Grid item xs={12} className={classes.subtopic}>
              {subTopics.map((item) => (
                <ButtonBase
                  {...subProps}
                  key={item.slug}
                  variant={subVariant}
                  onClick={() => onSubTopicButtonClick(item.slug)}
                  className={clsx(classes.subButton, {
                    [classes.activeSubButton]: item.slug === activeSubTopic,
                  })}
                >
                  {item.name}
                </ButtonBase>
              ))}
            </Grid>
          )}
        </Grid>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

Filter.propTypes = {
  onButtonClick: PropTypes.func,
  onSubTopicButtonClick: PropTypes.func,
  mainTopics: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  subTopics: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  activeTopic: PropTypes.string,
  activeSubTopic: PropTypes.string,
  mainVariant: PropTypes.string,
  subVariant: PropTypes.string,
  mainProps: PropTypes.shape({}),
  subProps: PropTypes.shape({}),
  classes: PropTypes.shape({
    root: PropTypes.string,
    activeButton: PropTypes.string,
    activeSubButton: PropTypes.string,
    mainButton: PropTypes.string,
    subButton: PropTypes.string,
    itemContainer: PropTypes.string,
    filter: PropTypes.string,
    subtopic: PropTypes.string,
  }),
};

Filter.defaultProps = {
  activeTopic: undefined,
  activeSubTopic: undefined,
  onButtonClick: undefined,
  onSubTopicButtonClick: undefined,
  classes: undefined,
  mainVariant: "contained",
  subVariant: "text",
  mainProps: {},
  subProps: {},
};
export default Filter;
