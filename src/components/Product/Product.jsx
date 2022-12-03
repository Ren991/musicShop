import React from 'react';
import { IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles'
import { Link as LinkRouter } from 'react-router-dom'

import './styles.css'

const Product = ({ product, onAddToCart }) => {




  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <LinkRouter to={`/productDetail/${product?.id}`} >
            <img src={product?.image.url} alt="rover" />
          </LinkRouter>

        </div>
        <div className="card-body">
          <span className="tag tag-teal">{product?.categories[0].name}</span>
          <h4>
            {product?.name}
          </h4>
          <div style={{ display: "flex" }}>

            <h3 style={{ marginRight: "15px" }}>{product?.price?.formatted_with_symbol}</h3>

            <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product?.id, 1)}>
              <AddShoppingCart />
            </IconButton>


          </div>
        </div>
      </div>
    </div>

  )
}
export default Product