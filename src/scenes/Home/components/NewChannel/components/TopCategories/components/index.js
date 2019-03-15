import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FaQuestionCircle, FaSun, FaHome, FaEthereum } from 'react-icons/fa';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    display: 'table',
    padding: theme.spacing.unit * 2,
    backgroundColor: 'white',
    border: '1px solid black',
  },
  icon: {
    fontSize: '25px',
    display: 'inline-block',
    height: '100%',
    verticalAlign: 'middle',
  },
  desription: {
    height: '32px',
    lineHeight: '32px',
    float: 'right',
  }
});
class PanelCategories extends React.Component {
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <FaSun  className={classes.icon} />
        <Typography className={classes.desription}variant='subheading'>hello</Typography>
      </div>
    );
  }
}

PanelCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PanelCategories);