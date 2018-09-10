import React from 'react';
import { ListItem, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styles from './styles';
import PropTypes from 'prop-types';

class Instructor extends React.Component{
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
        Become an Instructor
        </ListItem>
        { this.state.showMenu && 
          <div className={classes.subMenu}>
            <span>Turn what you know into an opportunity and reach millions around the world.</span>
            <a
              className={classes.subMenuLink} 
              component={Link} to="/instructor" 
              title='instructor'>
              <span>Learn more.</span>
            </a>
          </div>
        }
      </div>
    )
  }
}

Instructor.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Instructor);