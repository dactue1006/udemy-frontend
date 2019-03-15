import React from 'react';
import { 
  ListItem, 
  TextField, 
  IconButton,
  withStyles 
} from '@material-ui/core';
import { FaSearch } from 'react-icons/fa'
import styles from './styles';
import PropTypes from 'prop-types';

class Search extends React.Component{
  render(){
    const { classes } = this.props;
    return (
      <ListItem className={classes.root} title="search">
        <TextField
          className={classes.TextField}
          placeholder='Search for course'
          id="bootstrap-input"
          InputProps={{
            disableUnderline: true,
            classes: {
              root: classes.bootstrapRoot,
              input: classes.bootstrapInput,
            },
          }}
          InputLabelProps={{
            shrink: true,
            className: classes.bootstrapFormLabel,
          }}
        />
        <span>
          <IconButton className={classes.searchButton} color="inherit" aria-label="Search">
            <FaSearch className={classes.icon}/>
          </IconButton> 
        </span>
      </ListItem>
    )
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);