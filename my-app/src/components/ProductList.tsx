import React from 'react'
import { ProductType } from '../types/product'

type ProductProps = {
products:ProductType[];
}

const ProductList = ({products}: ProductProps) => {

  return (

    <div className="container  mx-auto max-w-7x1  grid gap-6 grid-rows-1 mt-6 "> 
     <div className="w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">Sản Phẩm</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded" />
            </div>
        <div className="row grid grid-cols-4 gap-4">
        {products?.map((e,index)=>{
         
        return (
  <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden" key={index}>
    <div className="flex items-end justify-end h-56 w-full bg-cover">
      <img src={`${e.img}`}/>
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