export default theme => ({
  root: {
    width: 'auto',
    height: 'auto',
  },
  card: {
    maxWidth: 400,
    width: 225,
    display: 'inline-block',
    margin: '20px 20px 0 0',
    '&:hover': {
      cursor: 'pointer',
    }
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    padding: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 3,
  },
  nameCourse: {
    display: '-webkit-box!important',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    fontWeight: 'bold', 
    marginBottom: 5,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }
});