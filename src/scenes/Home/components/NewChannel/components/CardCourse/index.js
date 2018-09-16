import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Rating } from 'semantic-ui-react';
import styles from './styles';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import CardDescription from '../CardCourse/components/CardDescription/index';

class RecipeReviewCard extends React.Component {
  state = {
    anchorEl: null,
    open: false,
  };

  handleClick = event => {
    const { currentTarget } = event;
    this.setState(state => ({
      anchorEl: currentTarget,
      open: !state.open,
    }));
  };

  render() {
    const { classes } = this.props;
    const { anchorEl, open } = this.state;
    const id = open ? 'simple-popper' : null;

    return (
      <div className={classes.root}>
        <Card 
          className={classes.card} 
          aria-describedby={id}
          onClick={this.handleClick}>
          <CardMedia
            className={classes.media}
            image={this.props.imageLink}
            title="Contemplative Reptile"
          />
          <CardContent className={classes.cardContent}>
            <Typography className={classes.nameCourse}>
              {this.props.nameCourse}
            </Typography>
            <Typography component='p' style={{marginBottom: 10, color: '#686f7a'}}>
              {this.props.author}
            </Typography>
            <div style={{marginBottom: 10}}>
              <Rating defaultRating={4.8} maxRating={5} disabled icon='star' size='mini' />
              <Typography style={{display: 'inline'}}>{this.props.rating} ({this.props.ratingNumber})</Typography>
            </div>
            <Typography style={{textAlign: 'right'}}>
              <del style={{color: '#686f7a'}}>{this.props.oldPrice}</del> <span style={{fontSize: 18}}>{this.props.newPrice}</span>
            </Typography>
          </CardContent>        
        </Card>
        <Popper id={id} open={open} anchorEl={anchorEl} placement='right' transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={100}>
              <CardDescription />
            </Fade>
          )}
        </Popper>
      </div>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);