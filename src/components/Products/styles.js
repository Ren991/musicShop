import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    toolbar: theme.mixins.toolbar,
    content:{
        flexGrow:4,
        backgroundColor: theme.palette.background.default,
        padding:theme.spacing(3)
    

    },
    root:{
        flexGrow:2
    },
    [theme.breakpoints.down('md')]: {
    
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
      height:"20%",
      width:" 70%",
    },
    img:{
      maxHeight:"90%",
      maxWidth:"90%"
    },
    datos:{
      paddingLeft:"10%",
      width:" 60%",
    },
    
  },
  [theme.breakpoints.down('sm')]: {
    container: {
      paddingTop:"120px",
      flexDirection:"column",
      height:"500px",
      width:"80%",
      alignItems:"center"
    },
    imagen:{
      paddingTop:"25px",
      width:"90%",
      height:"30%"
    },
    img:{
      
      maxHeight:"95%",
      maxWidth:"95%"
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