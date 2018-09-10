export default theme => ({
  card: {
    maxWidth: 400,
    width: 220,
    height: 300,
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
  }
});