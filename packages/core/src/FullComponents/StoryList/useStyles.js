import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    zIndex: 1,
    width: "calc(((100vw - 100%) / 2) + 100%)",
  },
  title: {},
  description: {},
  story: {},
  storyContentsRoot: {},
  storyContents: {
    minHeight: "33%",
    position: "relative",
    "&:before": {
      background:
        "transparent linear-gradient(180deg, #170F49 0%, #000000 60%, #000000 100%) 0% 0% no-repeat padding-box",
      bottom: 0,
      content: '""',
      left: 0,
      mixBlendMode: "multiply",
      opacity: 0.5,
      position: "absolute",
      right: 0,
      top: 0,
    },
    [breakpoints.up("md")]: {
      "&:before": {
        background:
          "transparent linear-gradient(180deg, #170F49 0%, #000000 60%, #000000 100%) 0% 0% no-repeat padding-box",
      },
    },
  },
  storyContent: {},
  storyDescription: {},
  storyLink: {},
  storyName: {},
  storyPicture: {},
  storyTitle: {},
  stories: {},
  storiesGridList: {},
  storiesScrollBar: {},
}));

export default useStyles;
