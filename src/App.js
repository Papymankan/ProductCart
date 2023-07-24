import React, { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ProductsContainer from './components/ProductsContainer'
import Cart from './components/Cart'
import Products from './Datas'
import ProductContext from './Contexts/ProductsContext'

export default function App() {
  const [AllProducts] = useState(Products)
  const [ShowCart , setShowCart] = useState(false)
  const [ShoppingCart , setCart] = useState([])
  return (
    <div>
      <ProductContext.Provider value={{
        AllProducts,
        ShowCart,
        setShowCart,
        ShoppingCart,
        setCart
      }}>
        <NavBar />
        <Cart />
        <h2 className='pageTitle'>All Products</h2>
        <ProductsContainer  />
      </ProductContext.Provider>
    </div>
  )
}