import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import styles from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = (theme)=>({
  root: {
    padding: '50px 0',
  },
  subRoot: {
    textAlign: 'center',
  },
  description: {
    width: '50%',
    margin: '0 auto',
    padding: '10px 0',
  },
  button: {
    textTransform: 'none',
    backgroundColor: '#ec5252',
    color: 'white',
    borderRadius: 0,
    fontSize: '1rem',
    fontWeight: 'bold',
    marginLeft: '10px',
    '&:hover, &:focus': {
      backgroundColor: '#992337',
      color: 'white',
      border: '1px solid #505763',
    }
  }
})

function NewChannel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={6} style={{borderRight: '1px solid #dedfe0', paddingRight: 0}}>
          <div className={classes.subRoot}>
            <Typography variant='headline'>Become an Instructor</Typography>
            <Typography className={classes.description}variant='subheading'>Teach what you love. Udemy gives you the tools to create an online course.</Typography>
            <Button className={classes.button}>Start Teaching </Button>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.subRoot}>
            <Typography variant='headline'>Udemy for Business</Typography>
            <Typography className={classes.description}variant='subheading'>Get unlimited access to 2,500 of Udemy’s top courses for your team.</Typography>
            <Button className={classes.button}>Get Udemy for Business </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

NewChannel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewChannel);