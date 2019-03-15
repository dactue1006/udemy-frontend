export default theme =>({
  root: {
    width: '35%',
  },
  TextField: {
    width: '90%',
  },
  bootstrapRoot: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    backgroundColor: '#eee',
    border: '1px solid #eee',
    borderRight: 'none',
    fontSize: 14,
    padding: '12px',
    width: 'calc(100% - 24px)',
    '&:focus': {
      backgroundColor: 'white',
    },    
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
  searchButton: {
    color: 'red',
    backgroundColor: '#eee',
    border: '1px solid #eee',
    borderLeft: 'none',
    height: 45,
    borderRadius: '0%',
    '&:hover':{
      backgroundColor: '#ec5252',
      color: 'white'
    }
  },
  icon: {
    width: 16,
    height: 16
  }
})