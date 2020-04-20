/* eslint-disable react/no-danger, jsx-a11y/control-has-associated-label */
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    zIndex: 1,
    width: "100%",
  },
  profile: {},
  profileDescription: {},
  profileName: {},
  profileNameSelected: {},
  profilePicture: {},
  profilePictureSelected: {},
  profileTitle: {},
  profiles: {
    width: "calc(((100vw - 100%) / 2) + 100%)",
  },
  profilesGridList: {},
  profilesScrollBar: {},
}));

export default useStyles;
