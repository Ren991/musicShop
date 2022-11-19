import React from 'react';
import {Card,CardMedia,CardContent,CardActions,Typography,IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons'
import useStyles from './styles'

import './styles.css'

const Product =({product,onAddToCart})=>{
    const classes = useStyles();
    
    return(
      /*  <Card className={classes.root}>
            <CardMedia className={classes.media} image={product?.image.url} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product?.name}
                    </Typography>
                    <Typography variant="h5">
                        {product?.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{__html:product.description}} variant="body2" color="textSecondary" />
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart" onClick={()=> onAddToCart(product?.id, 1)}>
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
       </Card> */
       <div className="shell">
  <div className="container">
    <div className="row">
      <div className="col-md-3">
        <div className="wsk-cp-product">
          <div className="wsk-cp-img">
            <img src={product?.image.url} alt="Product" className="img-responsive" />
          </div>
          <div className="wsk-cp-text">
            <div className="category">
              <span>{product?.categories[0].name}</span>
            </div>
            <div className="title-product">
              <h3>{product?.name}</h3>
            </div>
            <div className="description-prod">
            <Typography dangerouslySetInnerHTML={{__html:product?.description}} variant="body2" color="textSecondary" />
            </div>
            <div className="card-footer">
              <div className="wcf-left"><span className="price">{product?.price.formatted_with_symbol}</span></div>
              <div className="wcf-right"><IconButton aria-label="Add to Cart" onClick={()=> onAddToCart(product?.id, 1)}>
                    <AddShoppingCart/>
                </IconButton></div>
            </div>
          </div>
        </div>
      </div>
     
           
            </div>
          </div>
        </div>
   

    )
}
export default Product