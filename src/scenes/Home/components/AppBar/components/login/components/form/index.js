import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import validate from './validate';
import styles from './styles';
import TextField from '@material-ui/core/TextField';



class Login extends Component {
  
  render() {
    const { handleSubmit, classes } = this.props;

    return (
      <div className={classes.root}>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth={true}
            className={classes.TextField}
            type='email'
            placeholder='Email'
            id="email"
            InputProps={{
              disableUnderline: true,
              classes: {
                root: classes.bootstrapRoot,
                input: classes.bootstrapInput,
              },
            }}
          />
          <TextField
            fullWidth={true}
            className={classes.TextField}
            type='password'
            placeholder='Password'
            id="password"
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
          <Button 
            color="secondary"
            fullWidth={true}
            type='submit'
            variant="contained" 
            className={classes.button}
          >
            Log In
          </Button>
          <Typography className={classes.forgotPassword}>
             
            or <Typography
              style={{display: 'inline-block', fontSize: '1rem'}}
              component={Link} to="/forgot-password" 
              title='Fortgot Password'
            >
             Forgot Password
            </Typography>
          </Typography>
        </form>
      </div>
    );
  }
}
const styleLogin = withStyles(styles)(Login);

export default reduxForm({
  form: 'fLogin',
  validate
})(styleLogin);
