import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  Divider,
  IconButton,
  Typography,
  Hidden,
  AppBar,
  Toolbar,
  Drawer,
  Button,
  Badge
} from '@material-ui/core';
import List from './List';
import styles from './styles';
import { FaBars, FaBell, FaRedo } from 'react-icons/fa';

class Index extends React.Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <FaBars className={classes.icon} />
            </IconButton>
            <Typography
              variant="headline"
              color="inherit"
              className={classNames(
                'text-uppercase font-weight-bold',
                classes.flex
              )}
              noWrap
            >
              Blockchain
            </Typography>
            <IconButton aria-label="notify">
              <Badge
                badgeContent={4}
                color="secondary"
                classes={{ badge: classes.badge }}
              >
                <FaBell color="white" />
              </Badge>
            </IconButton>
            <IconButton aria-label="redo" className="mx-2">
              <FaRedo color="white" />
            </IconButton>

            <Button color="inherit" className={classes.btnLogout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            <Drawer
              variant="permanent"
              classes={{
                paper: classNames(
                  classes.drawerPaper,
                  !this.state.open && classes.drawerPaperClose
                )
              }}
            >
              <div className={classes.toolbar} />
              <Divider />
              <List />
            </Drawer>
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <Drawer
              variant="permanent"
              classes={{
                paper: classNames(
                  classes.drawerPaper,
                  !this.state.open && classes.drawerPaperClose
                )
              }}
              open={this.state.open}
            >
              <div className={classes.toolbar}>Blockchain</div>
              <Divider />
              <List />
            </Drawer>
          </Drawer>
        </Hidden>

        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Index);
