import { makeStyles } from '@material-ui/core/styles';
import { Height } from '@material-ui/icons';

export default makeStyles((theme) => ({
  container:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
   
   height:"25%",
   borderColor:"black",
   borderWidth:"1px",
   borderStyle:"solid",
   marginBottom:"1rem",
   borderRadius:"0.5rem"
  }, 
  butText:{
    display:"flex"
  },
  quantity:{
    marginTop:"58px"
  },
  cartContainer:{
    
    /* borderWidth:"1px",
    borderColor:"black",
    borderStyle:"solid",
    borderRadius:"0.5rem",
    backgroundColor:"pink",
    
    height:"150px",
    margin:"2rem",
    display:"flex" */
    marginTop:"10rem",
    height:"70%",
    
    
      
    
    
    
  }, 
 
  
  containerMedia:{
    height:"120%"
  },
  
  media: {

    //marginLeft:"20%",
    width:"210px",
    height:"150px",
  
    //maxHeight:"100%",
    //maxWidth:"100%",
    borderRadius:"0.5rem"
  },
  buttons:{
    display:"flex"
  },
  [theme.breakpoints.down('sm')]: {
    container:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
    }, 
    media:{

    },
    butText:{
      flexDirection:"column",
    },
    cartContainer: {
      paddingTop:"100px",
      
     
    },
    containerMedia:{
      backgroundColor:"black"
    }
    

    
  },
  
}));