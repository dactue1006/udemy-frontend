import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import TabCourse from './components/TabCourse/index';
import Grid from '@material-ui/core/Grid';
import SlickList from './components/SlickList/index';
import TopCategories from './components/TopCategories/index';
import NonStudent from './components/NonStudent/index';

function NewChannel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={4}>
          <div className={classes.desription}>
            <h1>The world’s largest selection of courses</h1>
            <p>Choose from over 80,000 online video courses with new additions published every month</p>
          </div>  
        </Grid>
        <Grid item xs={8}>
          <div className={classes.TabCourse}>
            <TabCourse />
          </div>
        </Grid>
      </Grid>
      <SlickList title="Student are viewing" />
      <SlickList title='Because you search for "go" '/>
      <TopCategories />
      <NonStudent />
    </div>
  );
}

NewChannel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewChannel);