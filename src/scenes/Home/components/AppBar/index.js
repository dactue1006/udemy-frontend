import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import styles from './style';
import Logo from './components/logo/index';
import Categories from  './components/categories/index';
import Search from './components/search/index';
import Business from './components/business/index';
import Instructor from './components/instructor/index';
import Shopping from './components/shopping/index';
import LoginModal from './components/login/index';
import SignUpModal from './components/signUp/index';

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bg}>
        <Toolbar>
          <Logo />
          <Categories />
          <Search />
          <Business />
          <Instructor />
          <Shopping />
          <LoginModal />
          <SignUpModal />
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);