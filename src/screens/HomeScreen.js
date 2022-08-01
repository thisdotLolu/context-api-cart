import products from "../data";
import React from 'react'
import './HomeScreen.css'
import ProductCard from "../components/ProductCard";


const HomeScreen = () => {
  return (
    <div className="products__wrapper">
        {products.map((product)=>{
           return <ProductCard product={product} key={product.id}/>
        })}
    </div>
  )
}

export default HomeScreen;