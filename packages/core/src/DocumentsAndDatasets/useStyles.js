import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  root: {
    backgroundColor: palette.primary.main,
    [breakpoints.up("md")]: {
      backgroundColor: palette.primary.main,
      background: `linear-gradient(to right, ${palette.primary.main} 0%, ${palette.primary.main} 50%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.1) 100%);`,
    },
  },
  section: {},
  container: {},
  content: {
    [breakpoints.up("md")]: {
      background: `linear-gradient(to right, ${palette.primary.main} 0%, ${palette.primary.main} 50%, transparent 50%, transparent 100%);`,
    },
  },
  contents: {},
  contentsDatasets: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    [breakpoints.up("md")]: {
      background: "unset",
    },
  },
  contentsDocuments: {},
  datasets: {},
  datasetsContentType: {},
  datasetsDescription: {},
  datasetsIcon: {},
  datasetsLink: {},
  description: {},
  documents: {},
  documentsContentType: {},
  documentsDescription: {},
  documentsIcon: {},
  documentsLink: {},
  heading: {},
  highlight: {},
  subtitle: {},
  title: {},
}));

export default useStyles;
