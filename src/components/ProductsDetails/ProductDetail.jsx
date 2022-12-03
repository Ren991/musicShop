import React, { useEffect, useState } from "react";
import { useParams  } from "react-router";
import { Link as LinkRouter} from 'react-router-dom'

import {CardMedia,Typography,IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons'
import useStyles from './styles'
import './style.css'

import { commerce } from '../../lib/commerce'
const ProductDetail = ({onAddToCart,products}) => {
  
  const [productDetail, setProductDetail] = useState({})
  const [productRelated, setProductRelated] = useState([])
  const [categoryProduct, setCategoryProduct] =useState("")
  const [productosRelacionados, setProductosRelacionados]=useState([])
  const { productId } = useParams();
  
    
  
  
  
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

  
    
 
  
 
 

  useEffect(() => {
    
    
    getProductDetailInfo();  
    
  }, [products,productId]);
 
  return (
    <div className="container" style={{paddingTop:"75px"}}>
    <div className="blog-card">
    <div className="meta">
      <div className="photo" style={{ backgroundImage: `url(${productDetail.image?.url})` }} >

      </div>
    </div>
    <div className="description">
      <h1>{productDetail?.name}</h1>
      <h2>{productDetail?.categories? productDetail?.categories[0].name : ""}</h2>
      <Typography dangerouslySetInnerHTML={{__html:productDetail?.description}} variant="body2" color="textSecondary" />
      <h3>{productDetail?.price?.formatted_with_symbol}</h3>
      <p className="read-more">
      <IconButton aria-label="Add to Cart" onClick={()=> onAddToCart(productDetail?.id, 1)}>
                 <AddShoppingCart/>
                </IconButton>
      </p>
    </div>
  </div>
    <div>
      <p>Products Related :</p>
      <div className="relatedProduct" style={{display:"flex",padding:"20px"}}>
      {
        productRelated?.map((product)=>(
          
            <div  style={{width:"250px",padding:"35px",margin:"20px", borderWidth:"1px",borderColor:"black",borderStyle:"solid",borderRadius:"0.5rem"}}>
              <div>
              <LinkRouter to={`/productDetail/${product?.id}`} >
              <CardMedia
              key={product.id}
                component="img"
                height="120"
                
                image={product.image?.url}
                alt={product?.name}/>
                </LinkRouter>
                     
              </div>
              <div>
                <h2>{product?.name}</h2>
              </div>
              <div>
              <h4>{product?.price?.formatted_with_symbol}</h4>
              </div>
            
            
            </div>
          
        ))
      }
      </div>
    </div>
  </div>
  
   
  )
}
export default ProductDetail

 
      
      
   