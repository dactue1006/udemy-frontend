import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



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