import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce'
//import Products from './components/Products/Products'
//import Navbar from './components/Navbar/Navbar';
import { Products, Navbar, Cart, Checkout, ProductDetail} from './components';
import { BrowserRouter, Switch, Route, Navigate ,useParams} from 'react-router-dom';


const App = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState({});
    const [order,setOrder] = useState({});
    const [errorMessage,setErrorMessage]=useState('');
    const [category, setCategory] = useState();
    const [categories, setCategories] = useState([])
    
 
    console.log(category)
    //console.log(products[0]?.categories[0].name)
    /*  const productoFiltrado = products.filter(product => {
         return product.categories[0]?.name.includes(category);
       });
       console.log(productoFiltrado) */
    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        //if ( products === ""){setProducts(data)}
        if (products === "" || products === undefined && category === "" || category === undefined) {
            setProducts(data)
            let allTheCategories = data.map(a=> a.categories[0].name)
            setCategories(allTheCategories.filter((element, index) => {
                return allTheCategories.indexOf(element) === index;
            }))
        } else {
            setProducts(data.filter(product => {
                return product.categories[0].name.includes(category);
            }))
        }
        if (category !== undefined || category !== "") {
            if (category === "allCategories") {
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
    const handleUpdateCartQty = async (productId, quantity) => {
        setCart(await commerce.cart.update(productId, { quantity }));

    }

    const handleRemoveFromCart = async (productId) => {

        setCart(await commerce.cart.remove(productId))
    }

    const handleEmptyCart = async () => {

        setCart(await commerce.cart.empty())
    }

    const refreshCart= async()=>{
        const newCart = await commerce.cart.refresh();

        setCart(newCart)
    }
    const handleCaptureCheckout= async (checkoutTokenId,newOrder)=>{
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId,newOrder)
            setOrder(incomingOrder);
            refreshCart()
        } catch (error) {
            setErrorMessage(error.data.error.message)
        }
    }


    useEffect(() => { // component did mount
        fetchProducts();
        fetchCart()

    }, [category])
    console.log(products)
    console.log(cart)
    console.log(categories)
    return (

        <BrowserRouter>

            <div>

                <Navbar totalItems={cart?.total_items} />               
                    <Switch>

                        <Route exact path="/">
                        <select style={{ marginTop: "80px" , width:"20%" }} id="fruits" value={category}
                        defaultValue="selectOption"
                        onChange={(e) => setCategory(e.target.value)}>
                        <option value="selectOption" disabled>Search by category</option>
                        <option value="allCategories">All Categories</option>
                        {categories?.map((cat)=>(
                            <option value={cat}>{cat}</option>
                        ))}
                    
                        </select>
                            <Products products={products} onAddToCart={handleAddToCart} />
                        </Route>
                        <Route exact path="/cart">
                            <Cart cart={cart}
                                onUpdateCartQty={handleUpdateCartQty}
                                onRemoveFromCart={handleRemoveFromCart}
                                onEmptyCart={handleEmptyCart}
                            />
                        </Route>
                    
                        <Route exact path="/checkout">
                            <Checkout 
                                cart={cart} 
                                order={order}
                                onCaptureCheckout={handleCaptureCheckout}  
                                error={errorMessage}     />

                        </Route>
                        <Route exact path="/productDetail/:productId" >
                            <ProductDetail products={products}  onAddToCart={handleAddToCart}  />    
                        </Route>
                            
                            
                        



                    </Switch>
            </div>
        </BrowserRouter>


    )
}
export default App