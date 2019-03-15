export default () => ({
  root: {
    position: 'relative',
    display: 'block',
    padding: '0 5%',
    marginTop: 20,
    backgroundColor: '#f7f8fa',
  },
  desription: {
    paddingTop: 150,
    height: '100%',
    '& h1': {
      fontWeight: 300,
      fontSize: 36
    },
    '& p': {
      fontSize: '1rem',
    }
  },
  TabCourse: {
    marginLeft: 30,
    width: '95%',
    position: 'relative',
    paddingTop: 20,
    display: 'inline-block',
  }
})