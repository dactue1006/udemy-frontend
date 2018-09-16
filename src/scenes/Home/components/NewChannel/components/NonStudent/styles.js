export default ()=>({
  root: {
    padding: '50px 0',
  },
  subRoot: {
    textAlign: 'center',
  },
  description: {
    width: '50%',
    margin: '0 auto',
    padding: '10px 0',
  },
  button: {
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
    }
  }
})