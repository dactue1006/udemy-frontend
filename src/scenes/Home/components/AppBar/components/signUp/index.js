import React from 'react';
import PropTypes from 'prop-types';
import styles from'./styles';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import SignUpForm from './components/form/index';
function getModalStyle() {
  return {
    position: 'fixed',
    borderRadius: 5,
    border: 'none',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
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
        <Button className={classes.buttonSignup}onClick={this.handleOpen}>
          Sign Up
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography className={classes.modalTitle}>
              <Typography variant="subheading" className={classes.title}>
              Sign Up and Start Learning!
              </Typography>
              <IconButton onClick={this.handleClose} className={classes.iconButton}>
                <CloseIcon />
              </IconButton>
            </Typography>
            <Divider />
            <div className={classes.content}>
              <SignUpForm />
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
            <Typography className={classes.footer}>Already have an account? <Typography 
              style={{display: 'inline-block', color: 'blue'}}
              component={Link} 
              to="/privacy-policy" 
              title='Privacy Policy'>Log In</Typography>
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