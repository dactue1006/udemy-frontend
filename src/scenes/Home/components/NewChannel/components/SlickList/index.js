import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Typography from '@material-ui/core/Typography';
import ListCourse from '../ListCourse/index';

class SlickList extends React.Component{
  render(){
    const { classes } = this.props;
    
    return (
      <div className={classes.root}>
        <Typography variant="headline"> {this.props.title}</Typography>
        <ListCourse />
        
      </div>

    );
  }
}

SlickList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SlickList);