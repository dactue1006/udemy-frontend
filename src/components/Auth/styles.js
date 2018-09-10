import bgLogin from 'Assets/images/bg-login.png';
const bgLoginColor = '#F9FBFE';

export default theme => ({
  root: {
    height: '100vh',
    overflow: 'hidden'
  },
  form: {
    marginTop: theme.spacing.unit * 20
  },
  img: {
    background: `${bgLoginColor} ` + `url(${bgLogin})` + ' no-repeat',
    width: '100%',
    maxHeight: '100vh',
    backgroundSize: 'cover',
    position: 'relative'
  },
  text: {
    position: 'absolute',
    top: theme.spacing.unit * 20,
    left: 0,
    right: 0,
    margin: '0 auto',
    width: '50%',
    color: bgLoginColor
  },
  logo: {
    position: 'absolute',
    top: theme.spacing.unit * 5,
    right: theme.spacing.unit * 5,
    color: bgLoginColor
  }
});
