import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    zIndex: 1,
    width: "calc(((100vw - 100%) / 2) + 100%)",
  },
  title: {},
  description: {},
  story: {},
  storyContentsRoot: {},
  storyContents: {
    "&:before": {
      background:
        "transparent linear-gradient(180deg, #170F49 0%, #000000 60%, #000000 100%) 0% 0% no-repeat padding-box",
      mixBlendMode: "multiply",
      opacity: 0.5,
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
