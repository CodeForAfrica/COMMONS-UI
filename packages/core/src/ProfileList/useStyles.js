/* eslint-disable react/no-danger, jsx-a11y/control-has-associated-label */
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    zIndex: 1,
    width: "calc(((100vw - 100%) / 2) + 100%)",
  },
  profile: {},
  profileDescription: {},
  profileName: {},
  profileNameSelected: {},
  profilePicture: {},
  profilePictureSelected: {},
  profileTitle: {},
  profiles: {},
  profilesGridList: {},
  profilesScrollBar: {},
}));

export default useStyles;
