import React, { useEffect, useState } from 'react'
import { get } from '../api/Product'
import { ProductType } from '../types/product'

type ProductProps = {
}

const HomePage = (props: ProductProps) => {
  const [product, setproduct] = useState<ProductType[]>([]);
  const [productsale, setproductsale] = useState<ProductType[]>([]);

  const newProduct = async () => {
    const { data } = await get()
    const newProduct = [];
    for (let i = data.length - 5; i < data.length; i++) {
      newProduct.push(data[i])
    }
    setproduct(newProduct)
  }

  const hotsale = async () => {
    const { data } = await get()
    const hotsale = [];
    data.sort((a: any, b: any) => a.discount < b.discount ? 1 : (b.discount < a.discount ? -1 : 0))

    for (let i = 0; i < data.length; i++) {
      hotsale.push(data[i])
      if (hotsale.length == 5) {
        break;
      }
    }
    setproductsale(hotsale)
  }

  useEffect(() => {
    newProduct(),
      hotsale()
  }, [])
  return (

    <div>
      <section className="text-white-600 body-font">
        <div className="container  mx-auto max-w-7x1 ">
          <div className="flex flex-wrap w-full mb-4 p-4">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">Sản Phẩm Mới</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded" />
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4" >
            {product?.map((e, index) => {
              return (

                <div className="bg-white p-6 rounded-lg0 drop-shadow-xl" key={index}>
                  <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6" src={`${e.img}`} alt="Image Size 720x400" />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{e.name}</h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{e.price}</h2>
                  <p className="leading-relaxed text-base">{e.desc}</p>
                </div>

              )
            })}
          </div>
        </div>
      </section>
      <section className="text-white-600 body-font">
        <div className="container  mx-auto max-w-7x1 ">
          <div className="flex flex-wrap w-full mb-4 p-4">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">Sản Phẩm Sale</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded" />
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4" >
            {productsale?.map((e, index) => {
              return (

                <div className="bg-white p-6 rounded-lg0 drop-shadow-xl" key={index}>
                  <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6" src={`${e.img}`} alt="Image Size 720x400" />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{e.name}</h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{e.price}</h2>
                  <p className="leading-relaxed text-base">{e.desc}</p>
                </div>

              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage