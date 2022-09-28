import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles({
  root: {
    width: "6%", // 53px / 934px,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f6f6f6",
    boxShadow: "0 2px 6px 4px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    position: "relative",
    zIndex: 1,
    "&:before": {
      // shadow
      // content: '""',
      position: "absolute",
      height: "100%",
      width: "100%",
      zIndex: 1,
      backgroundColor: "#f6f6f6",
    },
    "&:after": {
      // shadow
      // content: '""',
      position: "absolute",
      top: "5%",
      height: "90%",
      width: "50%",
      zIndex: 0,
      boxShadow: "0 2px 6px 4px rgba(0, 0, 0, 0.2)",
    },
  },
});

export default useStyles;
