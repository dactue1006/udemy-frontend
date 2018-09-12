export default (theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '100%',
    width: '100%',
    overflow: 'auto',
  },
  buttonSignup: {
    textTransform: 'none',
    backgroundColor: '#ec5252',
    color: 'white',
    borderRadius: 0,
    fontSize: '1rem',
    fontWeight: 'bold',
    marginLeft: '10px',
    '&:hover, &:focus': {
      backgroundColor: '#992337',
      color: 'white',
      border: '1px solid #505763',
    }
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
  },
  modalTitle: {
    padding: theme.spacing.unit * 3,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  iconButton: {
    minWidth: 36,
    width: 16,
    height: 16,
    padding: theme.spacing.unit,
  },
  content: {
    width: '100%',
    padding: theme.spacing.unit * 2.5,
  },
  buttonFacebook: {
    width: '95%',
    height: 48,
    textTransform: 'none',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#1a538a',
    color: 'white',
    margin: theme.spacing.unit,
    marginBottom: 0,
    '&:hover': {
      backgroundColor: '#164675',
      color: 'white',
    }
  },
  buttonGoogle: {
    width: '95%',
    height: 48,
    textTransform: 'none',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'white',
    margin: theme.spacing.unit,
    '&:hover': {
      backgroundColor: '#eee',
      color: 'black',
    }
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  footer: {
    textAlign: 'center',
    padding: theme.spacing.unit * 3,
    fontSize: '1rem',
  }
});