import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container:{
    width:"65%",
    marginLeft:"auto",
    marginRight:"auto",
    margin: "20px",
  backgroundColor:" #fff",
  borderRadius: "10px",
  boxShadow: "0 2px 20px rgba(0, 0, 0, 0.2)",
  overflow: "hidden"
  },
  media:{
    width:"100%"
  },
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '2%',
  },
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
    marginTop:"60px",
    width:"40%"
  }
 /*  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '60%',
    justifyContent: 'space-between',
  }, */
}));