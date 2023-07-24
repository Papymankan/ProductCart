import React, { useContext } from 'react'
import './ProductsContainer.css'
import Product from './Product'
import ProductContext from '../Contexts/ProductsContext'

export default function ProductsContainer() {
  const contextData = useContext(ProductContext)
  return (
    <>
      {contextData.AllProducts.map(Data => (
        <div className='productsContainer'>
          <h3>{Data.title}</h3>
          <div className='container ProductsRow'>
            {Data.products.map(product => <Product {...product} />)}
          </div>
        </div>
      ))}
    </>
  )
}