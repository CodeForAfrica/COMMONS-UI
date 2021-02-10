import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  ({ breakpoints, palette, spacing, typography }) => ({
    root: {
      width: "100%",
    },
    section: {},
    about: {
      display: "block",
    },
    aboutAbout: {},
    aboutInitiative: {
      display: "block",
      marginTop: "1.5rem",
    },
    divider: {
      backgroundColor: palette.secondary.main,
      height: 2,
    },
    dividerDesktop: {
      display: "none",
      [breakpoints.up("md")]: {
        display: "flex",
        marginLeft: spacing(2),
      },
    },
    dividerMobile: {
      order: 3,
    },
    grow: {
      flexGrow: 1,
    },
    organization: {
      marginBottom: "2.243125rem",
      [breakpoints.up("md")]: {
        marginBottom: "4.305625rem",
      },
    },
    organizationLogo: {
      width: "13.875rem",
      height: "auto",
      [breakpoints.up("md")]: {
        width: "18.3175rem",
      },
    },
    supporterLogo: {
      width: "9.6275rem",
      height: "auto",
      [breakpoints.up("md")]: {
        width: "13.7375rem",
      },
    },
    support: {
      display: "block",
      marginBottom: "1.618125rem",
      marginTop: "1.708rem",
      [breakpoints.up("md")]: {
        display: "none",
      },
    },
    quickLinksMore: {
      marginTop: "2.881875rem",
      order: 4,
      [breakpoints.up("md")]: {
        marginTop: 0,
        order: 3,
      },
    },
    quickLinksContact: {
      marginTop: "2.881875rem",
      order: 5,
      [breakpoints.up("md")]: {
        marginTop: 0,
        order: 4,
      },
    },
    initiative: {
      order: 2,
      [breakpoints.up("md")]: {
        order: 5,
      },
    },
    copyright: {
      marginTop: "1.618125rem",
      order: 3,
      textAlign: "center",
      [breakpoints.up("md")]: {
        marginTop: 0,
        order: 2,
      },
    },
    copyrightLogo: {
      marginLeft: "0.80375rem",
      verticalAlign: "middle",
    },
    legal: {
      order: 2,
      [breakpoints.up("md")]: {
        order: 3,
      },
    },
    legalLinks: {},
    legalLinksLink: {},
    legalLinksList: {},
    primary: {
      paddingBottom: typography.pxToRem(59),
      [breakpoints.up("md")]: {
        paddingBottom: typography.pxToRem(120.89),
      },
    },
    secondary: {
      backgroundColor: palette.secondary.main,
      border: "1px solid #707070",
      color: palette.text.secondary.main,
      paddingBottom: "2.381875rem",
      paddingTop: "4.194375rem",
      [breakpoints.up("md")]: {
        paddingBottom: "4.194375rem",
        paddingTop: "5.375rem",
      },
    },
    stayInTouch: {},
    stayInTouchIcon: {},
    stayInTouchLink: {},
    stayInTouchLinks: {},
    stayInTouchText: {},
    stayInTouchTitle: {},
    text: {},
  })
);

export default useStyles;
