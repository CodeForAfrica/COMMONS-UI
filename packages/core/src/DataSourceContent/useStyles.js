import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(({ breakpoints }) => ({
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

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
