import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: "pointer",
    margin: "2.5rem 1.875rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    "&:hover": {},
  },
  picture: {
    width: "7.125rem",
    height: "7.125rem",
    borderRadius: "50%",
  },
  pictureSelected: {
    border: `solid 6px ${theme.palette.primary.main}`,
  },
  title: {
    fontFamily: theme.typography.fontText,
    fontSize: "0.875rem",
    fontWeight: "600",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    width: "152px",
  },
  name: {
    marginTop: "1.375rem",
    fontFamily: theme.typography.fontText,
    color: theme.palette.primary.main,
    textDecoration: "underline",
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    width: "152px",
  },
  nameSelected: {
    color: "black",
    textDecoration: "none",
  },
  description: {
    visibility: "hidden",
  },
}));

export default useStyles;
