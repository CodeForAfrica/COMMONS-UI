import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints }) => ({
  contents: {},
  contentsDatasource: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    [breakpoints.up("md")]: {
      background: "unset",
    },
  },
  contentsDocuments: {},
  datasource: {},
  datasourceContentType: {},
  datasourceDescription: {},
  datasourceIcon: {},
  datasourceLink: {},
  description: {},
  heading: {},
  highlight: {},
  subtitle: {},
  title: {},
}));

export default useStyles;
