import {Fragment, useEffect, useState} from 'react'
import React from 'react';
import ProductCard from '../components/ProductCard'
import { useSearchParams } from 'react-router-dom';

export default function Home(){
  const[products,setProducts]=useState([]);
  const [searchParams,setSearchParams]=useSearchParams()
  useEffect(()=>{
   
fetch(process.env.REACT_APP_API_URL+'products?'+searchParams, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then(res=>res.json())
  .then(res=>setProducts(res.products))
  .catch(error => console.error("Fetch Error:", error));
  },[searchParams])
    return (<Fragment>
    

    <h1 id="products_heading">Latest Products</h1>

    <section id="products" className="container mt-5">
      <div className="row">
        {products.map(product=><ProductCard product={product}/>)}
      
      </div>
    </section>
    

   

    </Fragment>)

}
