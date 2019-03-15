export default (theme) => ({
  root: {
    paddingRight: 30,
    margin: '30px 0 30px 0',
  },
  rootCategories: {
    width: 'auto',
    borderRadius: 2,
    padding: theme.spacing.unit * 2,
    backgroundColor: 'white',
    boxShadow: '0px 0px 2px 0px rgba(0,0,0,0.75)',
    '&:hover': {
      boxShadow: '0px 0px 4px 0px rgba(0,0,0,0.75)',
      cursor: 'pointer',
    }
  },
  icon: {
    fontSize: '32px',
    display: 'inline-block',
    height: '100%',
    verticalAlign: 'middle',
    color: '#14171c',
  },
  desription: {
    height: '32px',
    lineHeight: '32px',
    display: 'inline-block',
    width: '80%',
    paddingLeft: 20,
    color: '#14171c',
    fontWeight: 400,
  }
});