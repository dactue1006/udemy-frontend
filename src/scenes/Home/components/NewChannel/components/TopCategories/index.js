import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Typography from '@material-ui/core/Typography';
import { 
  FaComment, FaSun, FaAudioDescription, 
  FaTags, FaMusic, FaMapMarker, FaOpera,
  FaLanguage, FaTextHeight, FaTablet
} from 'react-icons/fa';
import Grid from '@material-ui/core/Grid';



class TopCategories extends React.Component{
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant='headline'style={{padding: '10px 0'}}> Top Categories </Typography>
        <Grid container spacing={24}>
          <Grid item xs={3}>
            <div className={classes.rootCategories}>
              <FaComment  className={classes.icon} />
              <Typography className={classes.desription}variant='subheading'>Development</Typography>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.rootCategories}>
              <FaSun  className={classes.icon} />
              <Typography className={classes.desription}variant='subheading'>Business</Typography>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.rootCategories}>
              <FaTags  className={classes.icon} />
              <Typography className={classes.desription}variant='subheading'>IT & Software</Typography>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.rootCategories}>
              <FaAudioDescription  className={classes.icon} />
              <Typography className={classes.desription}variant='subheading'>Design</Typography>
            </div>
          </Grid>
          {/*line 2*/}
          <Grid item xs={3}>
            <div className={classes.rootCategories}>
              <FaMapMarker  className={classes.icon} />
              <Typography className={classes.desription}variant='subheading'>Marketing</Typography>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.rootCategories}>
              <FaOpera  className={classes.icon} />
              <Typography className={classes.desription}variant='subheading'>Personal development</Typography>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.rootCategories}>
              <FaSun  className={classes.icon} />
              <Typography className={classes.desription}variant='subheading'>Photography</Typography>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.rootCategories}>
              <FaMusic  className={classes.icon} />
              <Typography className={classes.desription}variant='subheading'>Music</Typography>
            </div>
          </Grid>
          {/*line 3*/}
          <Grid item xs={3}>
            <div className={classes.rootCategories}>
              <FaLanguage  className={classes.icon} />
              <Typography className={classes.desription}variant='subheading'>Language</Typography>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.rootCategories}>
              <FaTextHeight  className={classes.icon} />
              <Typography className={classes.desription}variant='subheading'>Health and Fitness</Typography>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.rootCategories}>
              <FaSun  className={classes.icon} />
              <Typography className={classes.desription}variant='subheading'>Office Productivity</Typography>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.rootCategories}>
              <FaTablet  className={classes.icon} />
              <Typography className={classes.desription}variant='subheading'>Lifestyle</Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

TopCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopCategories);