export default ()=>({
  root: {
    width: 'auto',
    position: 'relative',
    display: 'inline-block',
  },
  link: {
    color: '#505763',
    '&:hover': {
      backgroundColor: '#eee',
    }
  },
  subMenu: {
    position: 'absolute',
    zIndex: 2,
    textAlign: 'center',
    backgroundColor: 'white',
    minWidth: '330px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    left: 'auto',
    right: 0,
    '& span':{
      fontSize: '16px',
      lineHeight: '20px',
      padding: '18px 18px 0px 18px',
      display: 'block'
    },
  },
  subMenuLink: {
    color: '#007791',
    textAlign: 'center',
    padding: '0 10px 10px 10px',
    marginTop: 0,
    '&:hover': {
      cursor: 'pointer',
    }
  }
})