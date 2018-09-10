const drawerWidth = 280;
export default theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  drawerPaper: {
    overflow: 'hidden',
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative'
    },
    [theme.breakpoints.down('md')]: {
      backgroundColor: 'white !important'
    }
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    minWidth: 0 // So the Typography noWrap works
  },
  flex: {
    flexGrow: 1
  },
  btnLogout: {
    fontSize: '16px',
    fontWeight: 'bold'
  },
  toolbar: theme.mixins.toolbar
});
