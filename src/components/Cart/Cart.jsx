import React from 'react';
import { Container, Typography, Button, CardMedia, ImageList,ImageListItem,ImageListItemBar, Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Carousel from 'react-grid-carousel'


import useStyles from './styles';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles();

  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography variant="h5" style={{marginTop:"15px"}}>You have no items in your shopping cart,
      <Link className={classes.link} to="/">start adding some</Link>!
    </Typography>
  );

  if (!cart.line_items) return 'Loading';

  const renderCart = () => (
    <>
      <div>
        <Typography className={classes.title} variant="h4" gutterBottom>Your Shopping Cart</Typography>
        <div style={{ display: "flex", flexWrap: "wrap" }} className={classes.container}>
       
      {cart.line_items.map((lineItem) => (
        <Card style={{width:"100%",padding:"10px",margin:"10px",display:"flex"}}>
          <div style={{width:"20%"}}>
            <img style={{width:"100%"}} src={lineItem.image?.url} alt={lineItem.name} />
          </div>
          <div style={{marginLeft:"25%"}}>
           <h2>{lineItem?.name}  - {lineItem?.price?.formatted_with_symbol}</h2>
                <div style={{ display: "flex" }}>
                  <Button type="button" size="small" onClick={() => onUpdateCartQty(lineItem.id, lineItem.quantity - 1)}>-</Button>
                  <Typography >&nbsp;{lineItem.quantity}&nbsp;</Typography>
                  <Button type="button" size="small" onClick={() => onUpdateCartQty(lineItem.id, lineItem.quantity + 1)}>+</Button>
                  <Button type="button" size="small" onClick={() => onRemoveFromCart(lineItem.id)}>Delete</Button>
                </div>
          </div>      

        </Card>
      ))}
    
        </div>
        <div className={classes.cardDetails}>
          <Typography variant="h5">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
          <div>
            <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
            <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />

      {!cart.line_items.length ? renderEmptyCart() : renderCart()}
    </Container>
  );
};

export default Cart;
