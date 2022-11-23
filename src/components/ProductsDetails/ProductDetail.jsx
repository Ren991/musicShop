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
  const [productosRelacionados, setProductosRelacionados]=useState([])
  const { productId } = useParams();
  console.log(productId)
 

  console.log("holas")
  
    
  
  
  
  const getProductDetailInfo = async () => {
    try {
      
      const product = await commerce.products.retrieve(`${productId}`);
     if(product && products) {
      setProductDetail(product)    
      
      setProductRelated(products.filter(productI => {
        return productI?.categories[0].name.includes(product?.categories[0].name) && productI?.id !== productId ;
    }))     
      
      
  }
      

    } catch (error) {
      console.log(error)
    }
  };

  
    
 
  
 
  console.log(productDetail)
  console.log(categoryProduct)
  console.log(productRelated)
  console.log(productosRelacionados)

  useEffect(() => {
    
    
    getProductDetailInfo();
    
   
    
    
  }, [products]);
  return (
    <div style={{ paddingTop: "80px" }}>
      <div className={classes.container}>
        <div className={classes.imagen}>
          <img className={classes.img} src={productDetail.image?.url} />
        </div>
        <div className={classes.datos}>
          <h1>{productDetail?.name}</h1>
          <h2>{productDetail?.categories? productDetail?.categories[0].name : ""}</h2>
          <h3>{productDetail?.price?.formatted_with_symbol}</h3>
          <div className={classes.buttonText}>
          <Typography dangerouslySetInnerHTML={{__html:productDetail?.description}} variant="body2" color="textSecondary" />
         
          <IconButton aria-label="Add to Cart" onClick={()=> onAddToCart(productDetail?.id, 1)}>
                 <AddShoppingCart/>
                </IconButton>
                </div>
        </div>
      </div>
      <div className={classes.containerRelated}>
      <h2>Products related:</h2>
      {
        productRelated?.map((product)=>(
          <h2>{product?.name}</h2>
        ))
      }
      </div>
    </div>
  )
}
export default ProductDetail