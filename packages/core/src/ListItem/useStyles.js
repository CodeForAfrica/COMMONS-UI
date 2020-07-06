import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  root: {
    cursor: (props) => (props.onClick ? "pointer" : "inherit"),
    height: (props) => props.height,
    width: "100%",
  },
  content: {
    zIndex: 1,
  },
  contentsRoot: {
    color: palette.text.primary,
    position: "relative",
    alignItems: "flex-end",
  },
  contents: {
    [breakpoints.up("md")]: {
      bottom: 0,
      color: palette.text.secondary,
      minHeight: "33%",
      padding: "1rem",
      position: "absolute",
      "&:before": {
        bottom: 0,
        background:
          "transparent linear-gradient(180deg, #FFFFFF 0%, #000000 60%, #000000 100%) 0% 0% no-repeat padding-box",
        content: '""',
        left: 0,
        mixBlendMode: "multiply",
        opacity: 0.5,
        position: "absolute",
        right: 0,
        top: 0,
      },
    },
  },
  picture: {
    height: "100%",
    position: "absolute",
    width: "auto",
  },
  pictureSelected: {},
  title: {
    width: "100%",
  },
  link: {},
  name: {
    width: "100%",
  },
  nameSelected: {},
  description: {
    width: "100%",
  },
}));

export default useStyles;
