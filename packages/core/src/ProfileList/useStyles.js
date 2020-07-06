import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    width: "calc(((100vw - 100%) / 2) + 100%)",
  },
  profile: {},
  profileContacts: {
    zIndex: 1,
  },
  profileContactsIcon: {
    objectFit: "contain",
    height: "1rem",
    width: "1rem",
    [breakpoints.up("xl")]: {
      height: "1.375rem",
      width: "1.375rem",
    },
  },
  profileContactsLink: {
    paddingRight: "0.85rem",
    "&:last-child": {
      marginRight: 0,
    },
    [breakpoints.up("xl")]: {
      paddingRight: "1rem",
    },
  },
  profileContentsRoot: {},
  profileContents: {
    "&:before": {
      background:
        "transparent linear-gradient(180deg, #170F49 0%, #000000 60%, #000000 100%) 0% 0% no-repeat padding-box",
      mixBlendMode: "multiply",
      opacity: 0.5,
    },
  },
  profileDescription: {},
  profileLink: {},
  profileName: {},
  profileNameSelected: {},
  profilePicture: {},
  profilePictureSelected: {},
  profileTitle: {},
  profiles: {},
  profilesGridList: {},
  profilesScrollBar: {},
}));

export default useStyles;
