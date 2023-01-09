import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(({ breakpoints }) => ({
  contents: {},
  contentsDatasource: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    [breakpoints.up("md")]: {
      background: "unset",
    },
  },
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
