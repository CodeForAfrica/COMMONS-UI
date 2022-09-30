import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  root: {
    width: "100%",
  },
  support: {},
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
