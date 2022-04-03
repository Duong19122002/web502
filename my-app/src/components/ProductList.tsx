import React from 'react'
import { ProductType } from '../types/product'

type ProductProps = {
products:ProductType[];
}

const ProductList = ({products}: ProductProps) => {

  return (
    
    <div className="grid gap-6 grid-rows-1 mt-6">
        <div className="row">
        {products?.map((e,index)=>{
         
        return (
  <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden" key={index}>
    <div className="flex items-end justify-end h-56 w-full bg-cover">
      <img src={e.img}/>
    </div>
    <div className="px-5 py-3">
      <h3 className="text-gray-700 uppercase">{e.name}</h3>
      <span className="text-gray-500 mt-2">{e.price.toLocaleString() }</span><br></br>
      <a href={`/product/${e._id}`} className="btn btn-primary">Chi tiết</a>
      
    </div>
  </div>  

        )
        })}
       
        </div>
    </div>
  )
}

export default ProductList