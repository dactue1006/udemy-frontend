import React from 'react';
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Typography
} from '@material-ui/core';

import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import * as CryIcon from 'react-cryptocoins';
import { FaQuestionCircle, FaSun, FaHome, FaEthereum } from 'react-icons/fa';
import { MdLock } from 'react-icons/md';

const styles = () => ({
  leftSide: {
    backgroundColor: 'white'
  },
  icon: {
    fontSize: '25px'
  },
  menuItem: {
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
});

class List extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.leftSide}>
        <ListItem button component={Link} to="/" title="Dashboard">
          <ListItemIcon>
            <FaHome className={classes.icon} />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography className={classes.menuItem}>Dashboard</Typography>
            }
          />
        </ListItem>
        <Divider />

        <ListItem button component={Link} to="/btc" title="Bitcoin">
          <ListItemIcon>
            <CryIcon.BtcAlt className={classes.icon} />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography className={classes.menuItem}>Bitcoin</Typography>
            }
          />
        </ListItem>

        <ListItem button component={Link} to="/ether" title="Ether">
          <ListItemIcon>
            <FaEthereum className={classes.icon} />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography className={classes.menuItem}>Ether</Typography>
            }
          />
        </ListItem>
        <ListItem button component={Link} to="/btc-cash" title="History">
          <ListItemIcon>
            <CryIcon.Btc className={classes.icon} />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography className={classes.menuItem}>Bitcoin cash</Typography>
            }
          />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/exchange" title="Exchange">
          <ListItemIcon>
            <CryIcon.Bsd className={classes.icon} />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography className={classes.menuItem}>Exchange</Typography>
            }
          />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/security"
          title="Security center"
        >
          <ListItemIcon>
            <MdLock className={classes.icon} />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography className={classes.menuItem}>
                Security center
              </Typography>
            }
          />
        </ListItem>
        <ListItem button component={Link} to="/setting" title="Setting">
          <ListItemIcon>
            <FaSun className={classes.icon} />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography className={classes.menuItem}>Setting</Typography>
            }
          />
        </ListItem>
        <ListItem button component={Link} to="/faq" title="Faq">
          <ListItemIcon>
            <FaQuestionCircle className={classes.icon} />
          </ListItemIcon>
          <ListItemText
            primary={<Typography className={classes.menuItem}>Faq</Typography>}
          />
        </ListItem>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(List);
