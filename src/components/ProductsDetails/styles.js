import {makeStyles}from '@material-ui/core/styles';

export default makeStyles((theme)=>({
  container :{
    
    display:" flex",
    
    justifyContent:" center",
    marginLeft:" auto",
    marginRight:" auto",
    height:" 400px",
    width:" 75%",
    borderWidth:"1px",
    borderColor:"black",
    borderStyle:"solid",
    borderRadius:"0.5rem",
  },
  imagen:{
    
    width:" 100%",
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
      paddingTop:"100px",
      flexDirection:"column",
      height:"400px",
      width:"80%",
      alignItems:"center"
    },
    imagen:{
      marginTop:"25px"
    },
    containerRelated:{
      marginTop:"100px"
    },
    datos:{
      width:"90%"
    },
    buttonText:{
      display:"flex",
      marginBottom:"100px"
    },

    
  },
    
}))
