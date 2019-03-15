import bgNoticeBanner from './images/notice_banner.png.jpg';
export default theme =>({
  root: {
    position: 'relative',
    width: '100%',
  },
  streamer: {
    position: 'relative',
    color: 'white',
  },
  image: {
    position: 'absolute',
    background: `url(${bgNoticeBanner})` + ' no-repeat',  
    width: '100%',
    height:  '97%',
  },
  content: {
    position: 'relative',
    width: '60%',
    padding: '130px 10%',
  },
  howItWork: {
    background: 'linear-gradient(-45deg,#ec5252,#6e1a52)',
    padding: '0px 20px',
    width: '100%',
  },
  TextField: {
    width: '80%',
    color: 'black',
  },
  bootstrapRoot: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    backgroundColor: 'white',
    fontSize: 19,
    padding: '12px',
    width: 'calc(100% - 24px)',
    '&:focus': {
      backgroundColor: 'white',
    },    
  },
  bootstrapFormLabel: {
    fontSize:20,
  },
  searchButton: {
    position: 'relative',
    backgroundColor: 'white',
    color: 'red',
    height: 46,
    marginBottom: 4,
    borderRadius: '0%',
    '&:hover':{
      backgroundColor: '#ec5252',
      color: 'white',
      cursor: 'pointer',
    }
  },
  icon: {
    width: 16,
    height: 16
  },
  col: {
    marginLeft: 50,
  },
  img: {
    width: 50,
    height: 50,
    float: 'left',
  },
  describe: {
    color: 'white',
    paddingLeft: 5,
    marginLeft: 60,
    '& h3': {
      margin: 0,
    },
    '& p': {
      fontSize: 16,
    }
  }
})