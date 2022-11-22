import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CartItem from './CarttItem/CartItem';
import useStyles from './styles';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles();

  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart,
      <Link className={classes.link} to="/">start adding some</Link>!
    </Typography>
  );

  if (!cart.line_items) return 'Loading';

  const renderCart = () => (
    <>
      <div className={classes.container} >
        {cart.line_items.map((lineItem) => (
          <div key={lineItem.id}>
            <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </div>
        ))}
      </div>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
          <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
      { !cart.line_items.length ? renderEmptyCart() : renderCart() }
    </Container>
  );
};

export default Cart;
/* import React from 'react';
import {Container,Typography,Button,Grid} from '@material-ui/core';
import { Link } from 'react-router-dom';
//import { CallMissedSharp } from '@material-ui/icons';
import useStyles from './styles'
import CartItem from './CarttItem/CartItem';

const Cart = ({cart,handleUpdateCartQty,handleRemoveFromCart,handleEmptyCart})=>{
    const classes = useStyles();
    //const isEmpty= !cart.line_items?.length 
    const EmptyCart = ()=>( 
        <Typography variant="subtitle1">
            You have no items in your shopping cart 
            <Link to="/" className={classes.link}> start adding some!</Link>!
        </Typography>
    )
    const FilledCart=()=>( 
        <>
            <Grid container spacing={2}>
                {cart.line_items.map((item)=>(
                    <Grid item xs={12} sm={6} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                    <Typography variant="h4">
                        Subtotal: {cart?.subtotal.formatted_with_symbol}
                    </Typography>
                    <div>
                        <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                        <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                    </div>
            </div>
        </>
    )
    return(
        <div>
            <Container>
                <div className={classes.toolbar}/>
                <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
                {!cart.line_items?.length  ? <EmptyCart/> : <FilledCart/>}
            </Container>
        </div>
    )
}
export default Cart */