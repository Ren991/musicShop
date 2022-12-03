import React from 'react';
import { Container, Typography, Button, CardMedia } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Carousel from 'react-grid-carousel'

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
      <div>
        <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
        <div style={{ display: "flex", flexWrap: "wrap" }} className={classes.container}>
          <Carousel cols={1}
            rows={1}
            autoplay={2300}>
            {cart.line_items.map((lineItem) => (


              <Carousel.Item key={lineItem.id} className={classes.media}>

                {/*  <img width="100%" height={450}
                     src={lineItem.image?.url} /> */}
                <CardMedia

                  component="img"
                  height={350}

                  image={lineItem.image?.url}
                />
                <h4>{lineItem?.name}  - {lineItem?.price?.formatted_with_symbol}</h4>
                <div style={{ display: "flex" }}>
                  <Button type="button" size="small" onClick={() => onUpdateCartQty(lineItem.id, lineItem.quantity - 1)}>-</Button>

                  <Typography >&nbsp;{lineItem.quantity}&nbsp;</Typography>


                  <Button type="button" size="small" onClick={() => onUpdateCartQty(lineItem.id, lineItem.quantity + 1)}>+</Button>
                  <Button type="button" size="small" onClick={() => onRemoveFromCart(lineItem.id)}>Delete</Button>
                </div>

              </Carousel.Item>


            ))}
          </Carousel>
        </div>
        <div className={classes.cardDetails}>
          <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
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
