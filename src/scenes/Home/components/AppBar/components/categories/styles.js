export default (theme) => ({
  button: {
    textTransform: 'capitalize',
    '&:hover': {
      background: 'transparent',
    }
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    margin: 0,
    float: 'right',
  },
  menuItem: {
    width: 270,
    padding: '8px 16px',
  }
})