import { makeStyles } from '@material-ui/core/styles';
import { Height } from '@material-ui/icons';

export default makeStyles((theme) => ({
  container:{
    marginRight:"10px", 
    width:"100%",
    height:"60%",
    borderRadius:"0.5rem",
    borderStyle:"solid",
    borderColor:"black",
    borderWidth:"1px",
    justifyContent:"center",alignItems:"center"
    
   
/* -webkit-box-shadow: ;
-moz-box-shadow: ; */
  }, 
 
  
  containerMedia:{
    height:"100%"
  },
  
  media: {

    //marginLeft:"20%",
    width:"240px",
    height:"150px",
  
    //maxHeight:"100%",
    //maxWidth:"100%",
    borderRadius:"0.5rem"
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