import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import validate from './validate';
import styles from './styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';



class SignUp extends Component {
  state = {
    checked: false,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  render() {
    const { handleSubmit, classes } = this.props;

    return (
      <div className={classes.root}>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth={true}
            className={classes.TextField}
            type='text'
            placeholder='Full Name'
            id="fullname"
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
          <div>
            <Checkbox
              className={classes.checkbox}
              checked={this.state.checked}
              onChange={this.handleChange('checked')}
              value="checked"
              color="primary"
              id="checkbox_id"
            />
            <label className={classes.checkboxLabel} forHtml="checkbox_id">
              Yes! I want to get the most out of Udemy by receiving emails with exclusive deals, personal recommendations and learning tips!
            </label>
          </div>
          <Button 
            color="secondary"
            fullWidth={true}
            type='submit'
            variant="contained" 
            className={classes.button}
          >
            Sign Up
          </Button>
        </form>
      </div>
    );
  }
}
const styleLogin = withStyles(styles)(SignUp);

export default reduxForm({
  form: 'fLogin',
  validate
})(styleLogin);
