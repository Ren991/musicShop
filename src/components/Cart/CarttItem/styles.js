import { makeStyles } from '@material-ui/core/styles';
import { Height } from '@material-ui/icons';

export default makeStyles(() => ({
   cartContainer:{
    
    borderWidth:"1px",
    borderColor:"black",
    borderStyle:"solid",
    borderRadius:"0.5rem",
    backgroundColor:"pink",
    width:"100%",
    height:"150px",
    margin:"2rem",
    display:"flex"
   
 
    
    
  }, 
  containerMedia:{
    height:"50%"
  },
  
  media: {
    maxHeight:"100%",
    maxWidth:"100%"
  },
  buttons:{
    display:"flex"
  }
  
}));