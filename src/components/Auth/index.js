import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import bgLogin from 'Assets/images/bg-login.png';
import { Grid, CssBaseline, Typography } from '@material-ui/core';
import classNames from 'classnames';

const Index = props => {
  const { classes, children, title, subTitle } = props;

  return (
    <div>
      <CssBaseline />
      <Grid container className={classes.root}>
        <Grid item md={4} className={classNames(classes.form)}>
          {children}
        </Grid>
        <Grid item md={8} className="position-relative">
          <img className={classes.img} src={bgLogin} alt="" />
          <div className={classes.text}>
            <Typography
              align="center"
              variant="display2"
              color="inherit"
              className={classNames('font-weight-bold')}
            >
              {title}
            </Typography>
            <Typography
              align="right"
              variant="body1"
              color="inherit"
              className={classNames('mt-3')}
            >
              {subTitle}
            </Typography>
          </div>
          <div className={classes.logo}>
            <Typography
              align="right"
              variant="title"
              color="inherit"
              className={classNames('text-uppercase')}
            >
              Logo
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default withStyles(styles)(Index);
