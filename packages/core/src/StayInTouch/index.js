import { Grid } from "@mui/material";
import { ThemeProvider, StyledEngineProvider, createTheme } from "@mui/material/styles";
import { makeStyles } from 'tss-react/mui';
import PropTypes from "prop-types";
import React from "react";

import A from "@/commons-ui/core/A";
import RichTypography from "@/commons-ui/core/RichTypography";

const theme = createTheme();
const useStyles = makeStyles()((theme) => ({
  root: {},
  title: {
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  },
  icon: {
    width: "1.375rem",
    height: "1.375rem",
    objectFit: "contain",
  },

  link: {
    display: "inline-block",
    padding: "0 0.625rem",
  },
  links: {
    "& > a": {
      display: "inline-block",
      borderRight: "1px solid white",
    },
    "& > a:last-of-type": {
      border: "none",
    },
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-start",
      width: "auto",
    },
  },
  text: {},
}));

function StayInTouch({ support, socialMedia, title, ...props }) {
  const { classes, cx } = useStyles(props, {
    props: props
  });

  if (!(socialMedia && socialMedia.length)) {
    return null;
  }
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Grid container className={classes.root}>
          {title && (
            <Grid item xs={12} md="auto" className={classes.title}>
              <RichTypography className={cx(classes.text)}>
                {title}
              </RichTypography>
            </Grid>
          )}
          <Grid item xs={12} md="auto" container className={classes.links}>
            {support && (
              <A
                href={`mailto:${support.email}`}
                className={cx(classes.link, classes.supportLink)}
              >
                <img
                  src={support.image.url}
                  alt={support.image.alt}
                  className={cx(classes.icon, classes.supportIcon)}
                />
              </A>
            )}
            {socialMedia.map((media) => (
              <A
                key={media.url}
                href={media.url}
                className={cx(classes.link, classes.socialLink)}
              >
                <img
                  src={media.image.url}
                  alt={media.image.alt}
                  className={cx(classes.icon, classes.socialIcon)}
                />
              </A>
            ))}
          </Grid>
        </Grid>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

StayInTouch.propTypes = {
  socialMedia: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      image: PropTypes.shape({
        url: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
  support: PropTypes.shape({
    email: PropTypes.string.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
  }),
  title: PropTypes.string,
};

StayInTouch.defaultProps = {
  support: undefined,
  title: "Stay in touch with us @ &nbsp;",
};

export default StayInTouch;
