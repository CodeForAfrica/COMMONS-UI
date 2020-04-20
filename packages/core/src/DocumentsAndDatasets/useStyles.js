import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  featuredDiv: {
    display: 'block',
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      top: '10%',
      width: '28%'
    }
  },
  featuredTitle: {
    width: '100%',
    fontSize: '2rem'
  },
  featuredDescription: {
    width: '100%',
    marginTop: '1rem'
  },
  documentData: {
    backgroundColor: '#0050FF',
    paddingLeft: '1.25rem',
    paddingRight: '1.25rem',
    [theme.breakpoints.up('md')]: {
      paddingTop: '14.9rem',
      paddingLeft: '0.5rem',
      marginTop: 0
    }
  },
  datasetData: {
    paddingLeft: '1.25rem',
    paddingRight: '1.25rem',
    [theme.breakpoints.up('md')]: {
      paddingTop: '14.9rem',
      paddingLeft: '0.5rem',
      marginTop: 0
    }
  },
  imageHighlight: {
    width: '100%',
    paddingLeft: '1.25rem',
    paddingRight: '1.25rem',
    backgroundColor: '#0050FF',
    [theme.breakpoints.up('md')]: {
      width: '60%',
      paddingLeft: 0,
      paddingRight: 0
    }
  },
  documentContentRoot: {},
  documentContentTitle: {},
  documentDescription: {},
  documentIconGrid : {},
  documentSubtitleGrid : {},
  documentCountGrid : {},
  documentContentCount : {},
  documentContentText : {},
  documentLink : {},
  documentLinkText: {},
  datasetContentRoot: {},
  datasetContentTitle: {},
  datasetDescription: {},
  datasetIconGrid : {},
  datasetSubtitleGrid : {},
  datasetCountGrid : {},
  datasetContentCount : {},
  datasetContentText : {},
  datasetLink : {},
  datasetLinkText: {},
}));

export default useStyles;
