import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ViewListIcon from '@material-ui/icons/ViewList';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { 
  ImportantDevices, BusinessCenter, ChevronRight, 
  Tv, Description, EventNote,
  Brush, CloudCircle, Style,
  PhotoCamera, FitnessCenter, RecordVoiceOver, MusicNote 
} from '@material-ui/icons';
import styles from './styles';

class Icon extends React.Component {
  components = {
    'Development': ImportantDevices,
    'Business': BusinessCenter,
    'IT & Software': Tv,
    'Office Productivity': Description,
    'Personal Development': EventNote,
    'Design': Brush,
    'Marketing': CloudCircle,
    'Lifestyle': Style,
    'Photography': PhotoCamera,
    'Health & Fitness': FitnessCenter,
    'Teacher Training': RecordVoiceOver,
    'Music': MusicNote,
  };
  render() {
    const TagName = this.components[this.props.tag || 'computer'];
    return (
      <ListItemIcon>
        <TagName />
      </ListItemIcon>
    )
  }
  

}

class SimpleMenu extends React.Component {
  constructor(props){
    super(props);
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  state = {
    anchorEl: null,
    anchorElSubMenu: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ 
      anchorEl: null, 
      anchorElSubMenu: null });
  };

  showMenu = (event) => {
    this.setState({ anchorElSubMenu: event.currentTarget });
  }
  closeMenu = () => {
    this.setState({ anchorElSubMenu: null });
  }
  render() {
    const { anchorEl, anchorElSubMenu } = this.state;
    const { classes } = this.props;  
    let menus = [ 
      'Development',
      'Business',
      'IT & Software',
      'Office Productivity',
      'Personal Development',
      'Design',
      'Marketing',
      'Lifestyle',
      'Photography',
      'Health & Fitness',
      'Teacher Training',
      'Music', 
    ];
    let renderMenu = menus.map( (menuItem, index)=>{
      return (
        <MenuItem key={index} onClick={this.showMenu} className={classes.menuItem}>
          <Icon tag={menuItem}/>
          <ListItemText inset primary={menuItem} />
          <ListItemIcon className={classes.rightIcon}>
            <ChevronRight />
          </ListItemIcon>
        </MenuItem>
      )
    })
    let submenus = [
      'All Development',
      'Web Development',
      'Mobile Apps',
      'Programming Languages',
      'Game Development',
      'Databases',
      'Software Testing',
      'Software Engineering',
      'Development Tools',
      'E-Commerce'
    ];
    let renderSubmenu = submenus.map ( (submenuItem, index)=>{
      return (
        <MenuItem key={index} onClick={this.closeMenu} className={classes.menuItem}>{submenuItem}</MenuItem>
      )
    })
    return (
      <div >
        <Button
          className={classes.button}
          disableRipple
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          onMouseEnter={this.handleClick}
        >
          <ViewListIcon className={classes.leftIcon}/>
          Categories 
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          style={{marginTop: 50}}
        >
          {renderMenu}
        </Menu>
        
        <Menu
          id="submenu"
          anchorEl={anchorEl}
          open={Boolean(anchorElSubMenu)}
          onClose={this.closeMenu}
          style={{marginLeft: 300, marginTop: 50}}
        >
          {renderSubmenu}
        </Menu>
        
      </div>
    );
  }
}

SimpleMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMenu);
