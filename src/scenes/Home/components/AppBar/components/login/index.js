import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from'./styles';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Divider from '@material-ui/core/Divider';
import { FaFacebook, FaGooglePlus } from 'react-icons/fa';
import LoginForm from './components/form/index';
import { Link } from 'react-router-dom';

function getModalStyle() {
  return {
    marginTop: '3%',
    borderRadius: 5,
  };
}



class SimpleModal extends React.Component {
  onSubmit = values => {
    console.log(values);
  };
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button className={classes.buttonLogin}onClick={this.handleOpen}>Log In</Button>
        <Modal
          className={classes.root}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography className={classes.modalTitle}>
              <Typography variant="subheading" className={classes.title}>
              Log In to Your Udemy Acount!
              </Typography>
              <IconButton onClick={this.handleClose} className={classes.iconButton}>
                <CloseIcon />
              </IconButton>
            </Typography>
            <Divider />
            <div className={classes.content}>
              <Button href='facebook.com' variant="contained" size="small" className={classes.buttonFacebook}>
                <FaFacebook className={classNames(classes.leftIcon, classes.iconSmall)} />
                Continue with Facebook
              </Button>
              <Button href='google.com' variant="contained" size="small" className={classes.buttonGoogle}>
                <FaGooglePlus className={classNames(classes.leftIcon, classes.iconSmall)} />
                Continue with Google
              </Button>
              <LoginForm onSubmit={this.onSubmit}/>
              <Typography style={{ fontSize: 10, textAlign: 'center' }}>
                By signing up, you agree to our <Typography 
                  style={{display: 'inline-block', fontSize: 10, color: 'blue'}}
                  component={Link} 
                  to="/terms-of-use" 
                  title='Terms of Use'> Terms of Use
                </Typography> and <Typography
                  style={{display: 'inline-block', fontSize: 10, color: 'blue'}}
                  component={Link} 
                  to="/privacy-policy" 
                  title='Privacy Policy'>Privacy Policy.
                </Typography>
              </Typography>
            </div>
            <Divider />
            <Typography className={classes.footer}>Don&apos;t have an account? <Typography 
              style={{display: 'inline-block', color: 'blue'}}
              component={Link} 
              to="/privacy-policy" 
              title='Privacy Policy'>Sign up</Typography>
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;