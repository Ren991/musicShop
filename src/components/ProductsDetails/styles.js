import {makeStyles}from '@material-ui/core/styles';

export default makeStyles((theme)=>({
  container :{
    
    display:" flex",
    
    justifyContent:" center",
    marginLeft:" auto",
    marginRight:" auto",
    height:" 400px",
    width:" 75%",
  },
  imagen:{
    
    width:" 30%",
  },
  img:{
    maxHeight:"100%",
    maxWidth:"100%"
  },
  datos:{
    paddingLeft:"10%",
    width:" 60%",
  },
  [theme.breakpoints.down('sm')]: {
    container: {
      paddingTop:"105px",
      flexDirection:"column",
      height:"300px",
      width:"100%",
      alignItems:"center"
    },
    
  },
    
}))
