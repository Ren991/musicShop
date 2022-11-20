import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
//import "./style.css"
import { Typography,Button } from "@material-ui/core";

import { commerce } from '../../lib/commerce'

const ProductDetail = ({onAddToCart}) => {
  const [productDetail, setProductDetail] = useState({})
  const { productId } = useParams();
  console.log(productId)
  
  console.log("holas")

  const getProductDetailInfo = async () => {
    try {
      const product = await commerce.products.retrieve(`${productId}`);
      setProductDetail(product)

    } catch (error) {
      console.log(error)
    }
  };
  console.log(productDetail)

  useEffect(() => {


    getProductDetailInfo();
  }, []);
  return (
    <div style={{ paddingTop: "100px" }}>
      <div style={{
        
        
      
        display:"flex",
        
        flexDirection:"row",
        flexWrap:"wrap-reverse",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        height: "400px",
        width:" 75%",
      }}>
        <div style={{ width: "50% "}} className="imagen">
          <img  style={{ maxWidth:"100%",
maxHeight:"100%"}} className="img" src={productDetail.image?.url} />
        </div>
        <div  style={{ width: "50% "}} className="datos">
          <h1>{productDetail?.name}</h1>
          <h2>{productDetail?.categories ? productDetail?.categories[0]?.name : ""}</h2>
          <Typography dangerouslySetInnerHTML={{__html:productDetail?.description}} variant="body2" color="textSecondary" />
          <Button onClick={()=> onAddToCart(productDetail?.id, 1)}>Add to cart</Button>
        </div>
      </div>
    </div>
  )
}
export default ProductDetail