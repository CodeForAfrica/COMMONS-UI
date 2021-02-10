import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    width: "100%",
  },
  img: {
    height: "2rem",
  },
  support: {
    display: "block",
    marginBottom: "1.618125rem",
    marginTop: "1.708rem",
    [breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default useStyles;
