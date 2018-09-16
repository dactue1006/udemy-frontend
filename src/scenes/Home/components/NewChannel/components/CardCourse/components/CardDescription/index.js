import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { 
  Card, 
  CardContent, 
  CardActions, 
  IconButton, 
  Button, 
  Typography
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from 'react-router-dom';
import styles from './styles';
import { FaPlay, FaHourglass, FaSlideshare, FaCcJcb } from 'react-icons/fa'


class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography 
            className={classes.title}
            color="textSecondary">
            {'Last Updated: ' + this.props.lastUpdate}
          </Typography>
          <Typography className={classes.header} component={Link} to='/'>
            Learning Python for Data analysis and Visualization
          </Typography>
          <div className={classes.fontSize11}>
            <Typography className={classes.sale}>Best seller</Typography>
            in <Typography 
              className={classnames(
                classes.displayInline,
                classes.link
              )} 
              component={Link} to="/" >network </Typography>Development
          </div>
          <div className={classnames(
            classes.padding15,
            classes.fontSize13
          )}>
            <FaPlay className={classes.displayInline} color="textSecondary"/>
            <Typography className={classes.displayInline} color="textSecondary"> 107 lectures </Typography>
            <FaHourglass className={classes.displayInline} color="textSecondary"/>
            <Typography className={classes.displayInline} color="textSecondary"> 30 hours </Typography>
            <FaSlideshare className={classes.displayInline} color="textSecondary"/>
            <Typography className={classes.displayInline} color="textSecondary"> All levels </Typography>
            <FaCcJcb className={classes.displayInline} color="textSecondary"style={{display: 'inline'}}/>
          </div>
          <Typography 
            variant='subheading'
            className={classes.fontSize15}>
          Master the latest version of Bootstrap (4.1.1) and build 5 real world themes while learning HTML5 semantics & CSS3
          </Typography>
          <ul style={{paddingLeft: 20}}>
            <li style={{marginBottom: 10}}><Typography className={classes.fontSize13}>Learn and create amazing high quality Bootstrap 4 themes and UIs from scratch</Typography></li>
            <li style={{marginBottom: 10}}><Typography className={classes.fontSize13}>Learn the Bootstrap 4 utilities, classes, components & JS widgets using a custom sandbox environment</Typography></li>
            <li style={{marginBottom: 10}}><Typography className={classes.fontSize13}>Learn semantic HTML5 & modern CSS3 techniques</Typography></li>
          </ul>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <Button className={classes.button}>Add to Cart</Button>
          <IconButton className={classes.iconButton}aria-label="Add to favorites">
            <FavoriteIcon/>
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);