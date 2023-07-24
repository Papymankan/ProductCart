import { Close, ShoppingCart } from '@mui/icons-material'
import React, { useContext } from 'react'
import ProductContext from '../Contexts/ProductsContext'
import './Cart.css'

export default function Cart() {
    const contextData = useContext(ProductContext)
    const removeProductHandler = (i) => {
        let arr = contextData.ShoppingCart.filter((product, index) => i != index)
        contextData.setCart(arr)
    }
    return (
        <div className={`${contextData.ShowCart ? 'sideBar active' : 'sideBar'}`}>
            <div className="sideBarContainer">
                <div className="sideBarHeader">
                    <span>
                        <ShoppingCart />
                        Bag
                    </span>
                    <span onClick={() => contextData.setShowCart(false)}>
                        <Close />
                    </span>
                </div>
                <div className="sideBarAction">
                    <button className='btn btn-success'>Purchase</button>
                    <button className='btn btn-danger' onClick={() => contextData.setCart([])}>Clear Cart</button>
                </div>
                <div className="sideBarCart">
                    {contextData.ShoppingCart.map((product, index) => (
                        <div className="productCart">
                            <img src={product.img} />
                            <h2>{product.title}</h2>
                            <h3>{product.price}</h3>
                            <h5>Count : {product.count}</h5>
                            <button className='btn btn-danger' onClick={() => removeProductHandler(index)} >Remove Product</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}