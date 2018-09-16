import React from 'react';
import Slider from 'react-slick';
import CardCourse from '../CardCourse/index';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import Next from 'Assets/images/next.png';
import Prev from 'Assets/images/previous.png';

const style = ({
  position: 'absolute', 
  display: 'block', 
  padding: 0, 
  width: 48,
  height: 48,
  cursor: 'pointer',
  top: '40%',
  backgroundColor: 'white',
  border: '1px solid #eee',
  boxShadow: '0 0 1px 1px rgba(20,23,28,.1), 0 3px 1px 0 rgba(20,23,28,.1)',
})
function SampleNextArrow(props) {
  const {onClick} = props

  return (
    <IconButton style={{...style, right: -10}} onClick={onClick}>
      <img src={Next} />
    </IconButton>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <IconButton style={{...style, left: -25, zIndex: 2}} onClick={onClick}>
      <img src={Prev} />
    </IconButton>
  );
}

const styles = () =>({
  root: {
    borderRight: '1px solid #f7f8fa',
    position: 'absolute',
    left: 0,
    right: 0,
  }

});
class SimpleSlider extends React.Component {

  render() {
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
        nameCourse: 'The Python Bible™ | Everything You Need to program in python',
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
        imageLink: 'https://udemy-images.udemy.com/course/240x135/903378_f32d_5.jpg',
        nameCourse: 'The Python Bible™ | Everything You Need to program in python',
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
      },
    ]
    let renderCourse = courses.map( (course, index)=>{
      return (
        <CardCourse
          key={index}
          imageLink={course.imageLink}
          nameCourse={course.nameCourse}
          author={course.author}
          rating={course.rating}
          ratingNumber={course.ratingNumber}
          oldPrice={course.oldPrice}
          newPrice={course.newPrice}
        /> 

      )
    })
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    };
    return (

      <Slider {...settings}>
        {renderCourse}
      </Slider>

    );
  }
}

SimpleSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSlider);