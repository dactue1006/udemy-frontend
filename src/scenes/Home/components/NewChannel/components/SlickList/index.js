import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import CardCourse from '../CardCourse/index';
import Typography from '@material-ui/core/Typography';

class SlickList extends React.Component{
  render(){
    const { classes } = this.props;
    let courses = [
      {
        imageLink: 'https://udemy-images.udemy.com/course/240x135/396876_cc92_7.jpg',
        nameCourse: 'Learning Python for Data Analysis and Visualization',
        author: 'Jose Portilla',
        rating: 4.3,
        ratingNumber: 1502,
        oldPrice: '$199.9',
        newPrice: '$19.9',
      },
      {
        imageLink: 'https://udemy-images.udemy.com/course/240x135/903378_f32d_5.jpg',
        nameCourse: 'The Python Bible™ | Everything You Need to...',
        author: 'Ziyad Yehia',
        rating: 4.6,
        ratingNumber: 1800,
        oldPrice: '$199.9',
        newPrice: '$19.9',
      },
      {
        imageLink: 'https://udemy-images.udemy.com/course/240x135/1350984_2355_6.jpg',
        nameCourse: 'The Modern Python 3 Bootcamp',
        author: 'Colt Steele',
        rating: 4.7,
        ratingNumber: 2398,
        oldPrice: '$199.9',
        newPrice: '$19.9',
      },
      {
        imageLink: 'https://udemy-images.udemy.com/course/240x135/1151632_de9b.jpg',
        nameCourse: 'Deep Learning A-Z™: Hands-On Artificial Neural...',
        author: 'Kirill Eremenko Hadelin...',
        rating: 4.7,
        ratingNumber: 13345,
        oldPrice: '$199.9',
        newPrice: '$11.99',
      },
      {
        imageLink: 'https://udemy-images.udemy.com/course/240x135/793796_0e89.jpg',
        nameCourse: 'Microsoft Excel - Excel from Beginner to...',
        author: 'Kyle Pew',
        rating: 4.7,
        ratingNumber: 5042,
        oldPrice: '$199.9',
        newPrice: '$11.99',
      }
    ]
    let renderCourse = courses.map( (course, index)=>{
      return (
        <Grid item xs={2.5} key={index}>
          <CardCourse
            imageLink={course.imageLink}
            nameCourse={course.nameCourse}
            author={course.author}
            rating={course.rating}
            ratingNumber={course.ratingNumber}
            oldPrice={course.oldPrice}
            newPrice={course.newPrice}
          /> 
        </Grid>
      )
    })
    return (
      <div className={classes.root}>
        <Typography variant="headline"> {this.props.title}</Typography>
        <Grid container spacing={30}>
          {renderCourse}
        </Grid>
        
      </div>

    );
  }
}

SlickList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SlickList);