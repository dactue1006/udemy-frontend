import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styles from './styles';
import CardCourse from '../CardCourse/index';

class CustomizedTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
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
        >
        </CardCourse>
      )
    })
    let topics = [ 'Development', 'Design', 'Business', 'IT & Software', 'Personal development', 'Marketing', 'Photography'];
    let tabTopic = topics.map( (obj, index)=>{
      return (
        <Tab 
          key={index}
          disableRipple
          classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
          label={<span className={classes.tabLabel}>{obj}</span>}
        />
      )
    })
    return (
      <div className={classes.root}>
        <Tabs
          value={value}
          onChange={this.handleChange}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        >
          {tabTopic}
        </Tabs>
        { renderCourse}
      </div>
    );
  }
}

CustomizedTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTabs);