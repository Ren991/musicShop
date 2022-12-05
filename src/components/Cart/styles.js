import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container:{
    width:"80%",
    marginLeft:"auto",
    marginRight:"auto",
   
    marginBottom:"20px",
  backgroundColor:" #fff",
  borderRadius: "10px",
  boxShadow: "0 2px 20px rgba(0, 0, 0, 0.2)",
  overflow: "hidden"
  },
  cardContainer:{
    width:"100%",
    margin:"3%",
    display:"flex"
  },
  media:{
    width:"40%"
  },
  toolbar: theme.mixins.toolbar,
  
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails:{
    marginTop:"20px",
    width:"40%"
  },
  cardDetails: {
    display: 'flex',
    marginTop: '2%',
    width: '60%',
    marginLeft:"auto",
    marginRight:"auto",
    justifyContent: 'space-between',
  },
  [theme.breakpoints.down('sm')]: {
    cardContainer:{
      width:"100%",
      padding:"5px",
      display:"flex",
      flexDirection:"column"
    },
    container:{
      width:"100%",
   
    },
    bothButtons:{
      paddingLeft:"5%"
    },
    cardDetails:{
      display: 'flex',
      flexDirection:"column",
      margin:"10%",
    marginTop: '30%',
    
    width: '60%',
    justifyContent: 'space-between'
    }
  
    
  },
}));