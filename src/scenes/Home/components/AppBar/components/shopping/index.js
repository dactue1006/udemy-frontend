import React from 'react';
import { withStyles, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styles from './styles';
import PropTypes from 'prop-types';
import { FaShoppingCart } from 'react-icons/fa';

class Shopping extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }
  
  handleHover = () => {
    this.setState({ showMenu: true });
  };
  
  handleLeave = () => {
    this.setState({ showMenu: false });
  };
  render(){
    const { classes } = this.props;
    return (
      <div 
        className={classes.root} 
        onMouseLeave={this.handleLeave}>
        <IconButton 
          onMouseEnter={this.handleHover}
          component={Link} to="/cart" 
          color="inherit" 
          aria-label="shoppingCart">
          <FaShoppingCart />
        </IconButton>
        { this.state.showMenu && 
          <div className={classes.subMenu}>
            <span>Your cart is empty.</span>
            <a
              className={classes.subMenuLink} 
              component={Link} to="/shopping" 
              title='shopping'>
              <span>Keep Shopping</span>
            </a>
          </div>
        }
      </div>
    )
  }
}

Shopping.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Shopping);