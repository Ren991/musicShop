import React from 'react';
import { Typography, Button,Box, Card, CardActions, CardContent, CardMedia,IconButton } from '@material-ui/core';


import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();

  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    
     <div className={classes.container}>
    
        <div>
        
          <Typography component="div" variant="h5" className={classes.productName}>
            {item?.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
           {item.categories ? item.categories[0].name : ""}
          </Typography>
        </div>
       
         <div className={classes.butText}>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
          
          <Typography className={classes.quantity}>&nbsp;{item.quantity}&nbsp;</Typography>
          
          
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
          
          
          <CardMedia
         component="img"
         height="250"
         className={classes.media}
         image={item.image?.url}
         alt={item?.name}/>
      </div>
      </div>
      
    
      
  );
};

export default CartItem;

