import React from 'react';
import { TextField, IconButton, withStyles } from '@material-ui/core';
import styles from './styles';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa'
import { Grid, Image } from 'semantic-ui-react'

class Streamer extends React.Component{
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.streamer}>
          <div className={classes.image}></div>
          <div className={classes.content}>
            <h1 style={{fontSize:'40px'}}> September Savings Spree</h1>
            <p style={{fontSize:'20px'}}>Get courses starting at just $11.99</p>
            <TextField
              className={classes.TextField}
              placeholder='What do you want to learn?'
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
              <IconButton className={classes.searchButton} aria-label="Search">
                <FaSearch className={classes.icon}/>
              </IconButton> 
            </span>
          </div>
        </div>
        <div className={classes.howItWork}>
          <Grid columns='three'>
            <Grid.Row>
              <Grid.Column>
                <div className={classes.col}>
                  <Image className={classes.img} src={require('Assets/images/refresh.png')} alt='refresh'/>
                  <div className={classes.describe}>
                    <h3> 80,000 online courses </h3>
                    <p> Explore a variety of fresh topics</p>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className={classes.col}>
                  <Image className={classes.img} src={require('Assets/images/clock-back.png')} alt='refresh'/>
                  <div className={classes.describe}>
                    <h3> Expert instruction </h3>
                    <p> Find the right instructor for you</p>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className={classes.col}>
                  <Image className={classes.img} src={require('Assets/images/correct.png')} alt='refresh'/>
                  <div className={classes.describe}>
                    <h3>Lifetime access </h3>
                    <p> Learn on your schedule</p>
                  </div>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    )
  }
}

Streamer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Streamer);