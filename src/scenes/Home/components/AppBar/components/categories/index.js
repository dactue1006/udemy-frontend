import React from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import DropdownMenu from './DropdownMenu';

class Categories extends React.Component{

  render(){
    const { classes } = this.props;
    let categories = [ 'Development', 'Business', 'IT & Software', 'Office Productivity', 'Personal Development', 'Design', 'Marketing', 'Lifestyle', 'Photography', 'Health & Fitness', 'Teacher Training'];
    let list = categories.map( (obj, index)=>{
      return (
        <DropdownMenu key={index} text={obj}/>
      )
    })
    return (
      <div className={classes.root}>
        <Dropdown 
          direction='right'
          pointing='top right'
          text='Categories' 
          labeled 
          className='icon ui simple'
        >
          <Dropdown.Menu> 
            <Dropdown.Header icon='tags' content='Choose your topic:' />
            <Dropdown.Divider />
            {list}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )
  }
}
Categories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Categories);
