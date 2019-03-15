export default theme => ({
  root: {
    width: '100%',
    padding: theme.spacing.unit,
  },
  bootstrapRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    marginBottom: theme.spacing.unit,
    borderRadius: 4,
    height: 25,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    '&:focus': {
      borderColor: '#80bdff',
    },
  },
  button: {
    height: 48,
    marginBottom: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * (-5),
    backgroundColor: '#ec5252',
    '&:hover':{
      backgroundColor: '#992337',
    }
  },
  forgotPassword: {
    textAlign: 'center', 
    marginBottom: 10,
    fontSize: '1rem',
  },
  checkbox: {
    width: 16, 
    height: 16, 
    marginBottom: 110
  },
  checkboxLabel: {
    paddingLeft: 20, 
    display: 'inline-block', 
    width: '95%', 
    fontSize: '1rem'
  }
})