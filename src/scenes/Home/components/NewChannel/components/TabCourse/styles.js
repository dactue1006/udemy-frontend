export default  theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#f7f8fa',
    paddingLeft: 40,
  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
  },
  tabsIndicator: {
    backgroundColor: '#007791',
    borderBottom: '5px solid #007791',
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 48,
    width: '13%',
    height: 68,
    fontWeight: theme.typography.fontWeightMedium,
    marginRight: theme.spacing.unit,
    '&$tabSelected': {
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
  tabLabel: {
    fontSize: '1rem',
    color: 'black',
    fontWeight: theme.typography.fontWeightMedium,
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3,
  },
});