import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  root: {
    flexGrow: 1,
    backgroundColor: palette.primary.main,
  },
  section: {
    position: "relative",
  },
  background: {},
  backgroundDatasets: {
    background: "rgba(255, 255, 255, 0.1)",
  },
  backgroundDocuments: {},
  content: {
    [breakpoints.up("md")]: {
      position: "absolute",
      top: 0,
    },
  },
  contentDatasets: {
    [breakpoints.up("md")]: {
      background: "inherit",
    },
  },
  contentDocuments: {
    [breakpoints.up("md")]: {
      background: "inherit",
    },
  },
  contentHeading: {
    marginTop: "5rem",
  },
  datasets: {},
  datasetsContentTitle: {},
  datasetsDescription: {},
  datasetsIcon: {},
  datasetsLink: {},
  description: {
    marginTop: "1rem",
  },
  documents: {},
  documentsContentTitle: {},
  documentsDescription: {},
  documentsIcon: {},
  documentsLink: {},
  highlight: {},
  title: {},
}));

export default useStyles;
