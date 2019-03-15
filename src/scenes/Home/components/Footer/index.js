import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Divider from '@material-ui/core/Divider';
import Logo from '../AppBar/components/logo/index';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';




function Footer(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Divider />
      <div className={classes.footer}>
        <div style={{display: 'table-cell'}}><Logo /></div>
        <div className={classes.copyright}>Copyright &copy; 2018 Udemy, Inc.</div>
        <ul className={classes.list}>
          <li className={classes.listItem}><Typography  component={Link} to="/Term" title="Term">Term</Typography></li>
          <li className={classes.listItem}><Typography  component={Link} to="/Policy" title="Policy">Privacy Policy and Cookie Policy</Typography></li>
          <li className={classes.listItem}><Typography  component={Link} to="/Property" title="interllectual-property">Intellectual Property</Typography></li>
        </ul>
      </div>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);