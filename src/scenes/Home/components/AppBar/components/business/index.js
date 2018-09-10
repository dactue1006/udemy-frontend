import React from 'react';
import { ListItem, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styles from './styles';
import PropTypes from 'prop-types';

class Business extends React.Component{
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
        <ListItem
          className={classes.link}
          onMouseEnter={this.handleHover}
          component={Link} to="/business" 
          title="business">
        Udemy for Business
        </ListItem>
        { this.state.showMenu && 
          <div className={classes.subMenu}>
            <span>Get your team access to Udemy’s top 2,500 courses anytime, anywhere.</span>
            <a
              className={classes.subMenuLink} 
              component={Link} to="/Business" 
              title='Business'>
              <span>Try Udemy for Business</span>
            </a>
          </div>
        }
      </div>
    )
  }
}

Business.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Business);