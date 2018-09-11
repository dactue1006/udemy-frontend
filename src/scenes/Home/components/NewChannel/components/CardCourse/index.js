import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Rating } from 'semantic-ui-react';
import styles from './styles';

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={this.props.imageLink}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.cardContent}>
          <Typography style={{fontWeight: 'bold', marginBottom: 5}}>
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
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);