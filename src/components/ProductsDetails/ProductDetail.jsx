import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import {Card,CardMedia,CardContent,CardActions,Typography,IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons'
import useStyles from './styles'

import { commerce } from '../../lib/commerce'
const ProductDetail = ({onAddToCart,products}) => {
  const classes = useStyles();
  const [productDetail, setProductDetail] = useState({})
  const [productRelated, setProductRelated] = useState([])
  const [categoryProduct, setCategoryProduct] =useState("")
  const { productId } = useParams();
  console.log(productId)
 

  console.log("holas")
  
    
    
  
  
  const getProductDetailInfo = async () => {
    try {
      const allProducts = products
      const product = await commerce.products.retrieve(`${productId}`);
      setProductRelated(allProducts.filter(productI => {
        return productI?.categories[0].name.includes(product?.categories[0].name);
    }))
      setProductDetail(product)    

    } catch (error) {
      console.log(error)
    }
  };

  
      
 
  
 
  console.log(productDetail)
  console.log(categoryProduct)
  console.log(productRelated)

  useEffect(() => {
    
    
    getProductDetailInfo();
    
   
    
    
  }, []);
  return (
    <div style={{ paddingTop: "100px" }}>
      <div className={classes.container}>
        <div className={classes.imagen}>
          <img className={classes.img} src={productDetail.image?.url} />
        </div>
        <div className={classes.datos}>
          <h1>{productDetail?.name}</h1>
          <h3>{productDetail?.categories? productDetail?.categories[0].name : ""}</h3>
          <h4>{productDetail?.price?.formatted_with_symbol}</h4>
          
          <Typography dangerouslySetInnerHTML={{__html:productDetail?.description}} variant="body2" color="textSecondary" />
         
          <IconButton aria-label="Add to Cart" onClick={()=> onAddToCart(productDetail?.id, 1)}>
                 <AddShoppingCart/>
                </IconButton>
        </div>
      </div>
    </div>
  )
}
export default ProductDetail