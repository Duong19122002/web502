import React, { useEffect, useState } from 'react'
import { get } from '../api/Product'
import { ProductType } from '../types/product'

type ProductProps = {
}

const HomePage = (props: ProductProps) => {
   const [product,setproduct]=useState<ProductType[]>([]);
   const [productsale,setproductsale]=useState<ProductType[]>([]);

   useEffect(()=>{
       const productlist=async()=>{
       const {data} =await get()
        setproduct(data)
       
       }
       productlist()
   },[])

  

  
  return (
    <div>
        {product?.map((e,index)=>{
            return(
                <div key={index}>
                    <h1>{e.name}</h1>
                </div>
            )
        })}
          
    </div>
  )
}

export default HomePage