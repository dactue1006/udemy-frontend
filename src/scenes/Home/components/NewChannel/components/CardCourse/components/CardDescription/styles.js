export default (theme) => ({
  card: {
    maxWidth: 340,
    fontFamily: 'Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif'
  },
  actions: {
    padding: '0 24px 24px 24px',
    display: 'flex',
  },
  header: {
    fontSize: 18,
    fontWeight: 600,
    color: '#505763',
    lineHeight: 4/3,
    '&:hover': {
      textDecoration: 'underLine',
    }
  },
  title: {
    marginBottom: 10,
    fontSize: 13,
  },
  link: {
    color: '#007791',
    fontSize: 11,
    paddingRight: 3,
    marginRight: 7,
    borderRight: '1px solid #686f7a',
    '&:hover': {
      color: '#004959'
    }
  },
  sale: {
    marginRight: 10,
    padding: '2px 8px 1px 8px',
    backgroundColor: '#f4c150',
    color: '#29303b',
    borderRadius: '3px 0 0 3px',
    fontSize: 9,
    lineHeight: 1.5,
    fontWeight: 700,
    textTransform: 'uppercase',
    textAlign: 'center',
    display: 'inline-block',
    position: 'relative',
    verticalAlign: 'baseline',
    '&:before': {
      content: '""',
      position: 'absolute',
      right: '-7.5px',
      bottom: 0,
      width: 0,
      height: 0,
      borderLeft: '7.5px solid #f4c150',
      borderTop: '7.5px solid transparent',
      borderBottom: '7.5px solid transparent',
    }
  },
  
  displayInline: {
    display: 'inline',
  },
  fontSize15: {
    fontSize: 15, 
    color: '#686f7a',
  },
  fontSize13: {
    fontSize: 13,
    color: '#686f7a'
  },
  fontSize11: {
    padding: '5px 0',
    fontSize: 11,
    color: '#686f7a',
  },
  padding15: {
    paddingBottom: 15,
  },
  button: {
    width: '80%',
    textTransform: 'none',
    backgroundColor: '#ec5252',
    padding: theme.spacing.unit * 1.5,
    color: 'white',
    borderRadius: 0,
    fontSize: '1rem',
    fontWeight: 'bold',
    marginLeft: '10px',
    '&:hover, &:focus': {
      backgroundColor: '#992337',
      color: 'white',
    }
  },
  iconButton: {
    marginLeft: 10,
    padding: theme.spacing.unit,
    backgroundColor: 'white',
    color: '#686f7a',
    '&:hover': {
      color: '#ec5252',
    }
  },
});