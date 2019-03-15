import React from 'react';
import { ListItem, withStyles } from '@material-ui/core';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';
import styles from './styles';
import PropTypes from 'prop-types';

class Logo extends React.Component{
  render(){
    const { classes } = this.props;
    return (
      <ListItem className={classes.root} component={Link} to="/" title="home">
        <img  className={classes.logo} src={logo} alt='udemy'/>
      </ListItem>
    )
  }
}

Logo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Logo);