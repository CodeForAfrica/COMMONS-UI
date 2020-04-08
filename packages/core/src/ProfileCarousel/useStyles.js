/* eslint-disable react/no-danger, jsx-a11y/control-has-associated-label */
import { makeStyles } from "@material-ui/core/styles";

// import leftArrow from "../../assets/images/left-arrow.svg";
// import rightArrow from "../../assets/images/right-arrow.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  carousel: {
    zIndex: 1,
    width: "100%",
    borderRadius: "0.25rem",
    backgroundColor: "#f6f6f6",
    display: "flex",
    [theme.breakpoints.up("md")]: {
      width: "44.265625rem", // .75 of lg
    },
    [theme.breakpoints.up("lg")]: {
      width: "58.4375rem",
    },
  },
  navigationButton: {
    "&:first-child": {
      "&:before": {
        backgroundImage: `url(${leftArrow})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
      "&:after": {
        left: "50%",
      },
    },
    "&:last-child": {
      "&:before": {
        backgroundImage: `url(${rightArrow})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
      "&:after": {
        right: "50%",
      },
    },
  },
  profile: {},
  profileDescription: {},
  profileName: {},
  profileNameSelected: {},
  profilePicture: {},
  profilePictureSelected: {},
  profileTitle: {},
  profiles: {
    overflowX: "auto",
    width: "88%",
    height: "100%",
    display: "flex",

    scrollbarColor: "#d3d3d3",
    scrollbarWidth: "thin",
    "&::-webkit-scrollbar": {
      height: "0.4rem",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#d3d3d3",
    },
    "&::-webkit-scrollbar-corner": {
      backgroundColor: "transparent",
    },
  },
}));

export default useStyles;
