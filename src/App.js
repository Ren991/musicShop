import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce'
//import Products from './components/Products/Products'
//import Navbar from './components/Navbar/Navbar';
import { Products, Navbar, Cart,Checkout } from './components';
import { BrowserRouter ,Switch, Route, Navigate } from 'react-router-dom';

const App = () => {
    const [products, setProducts] = useState([]);
   
    const [cart, setCart] = useState({});
    const [category, setCategory] = useState();     
        console.log(category)
    //console.log(products[0]?.categories[0].name)
   /*  const productoFiltrado = products.filter(product => {
        return product.categories[0]?.name.includes(category);
      });
      console.log(productoFiltrado) */
    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        //if ( products === ""){setProducts(data)}
        if(products === "" || products === undefined && category === "" ||category === undefined){
            setProducts(data)
        }else{ 
        setProducts(data.filter(product => {
            return product.categories[0].name.includes(category);
          }))
        }
        if (category !== undefined || category !== ""){
            if( category === "allCategories"){
                setProducts(data)
            }
            
              
        }
        console.log(products)
        
    }
   
    const fetchCart = async () => {

        setCart(await commerce.cart.retrieve())
    }
    const handleAddToCart = async (productId, quantity) => {

        setCart(await commerce.cart.add(productId, quantity));
    }
    const handleUpdateCartQty =async(productId,quantity)=>{
        setCart(await commerce.cart.update(productId,{quantity}));
        
    }

    const handleRemoveFromCart= async(productId)=>{
        
        setCart(await commerce.cart.remove(productId))
    }
    
    const handleEmptyCart = async ()=>{
         
        setCart(await commerce.cart.empty())
    }
    
    
    

    useEffect(() => { // component did mount
        fetchProducts();
        fetchCart()
        
    }, [category])
    console.log(products)
    console.log(cart)
    return (

        <BrowserRouter>
        
            <div>
            
            <Navbar totalItems={cart?.total_items} />
          
                    
                    <select style={{paddingTop:"100px"}} id="fruits" value={category} 
                    defaultValue="selectOption"
              onChange={(e) => setCategory(e.target.value)}>
                <option value="selectOption" disabled>Search by category</option>
                <option value="allCategories">All Categories</option>
        <option value="guitars">Guitars</option>
        <option value="bass">Basses</option>
        <option value="keyboard">Keyboards</option>
      </select>
           
                <Switch>
                   
                    <Route exact path="/">
                          <Products products={products} onAddToCart={handleAddToCart}/> 
                    </Route>
                    <Route exact path="/cart">
                        <Cart cart={cart} 
                        handleUpdateCartQty={handleUpdateCartQty}
                        handleRemoveFromCart={handleRemoveFromCart}
                        handleEmptyCart={handleEmptyCart}
                        />
                    </Route>
                    <Route exact path="/checkout">
                        <Checkout cart={cart} />

                    </Route>
                    
                   
                    
                </Switch>
            </div>
        </BrowserRouter>


    )
}
export default App