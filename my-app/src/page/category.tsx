import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getone } from '../api/category'

import { ProductType } from '../types/product'

type Props = {}

const Categories = (props: Props) => {
  const { id } = useParams();
  console.log(id)
  const [cate, getcate] = useState<ProductType[]>([])
  useEffect(() => {
    const category = async () => {
      const { data } = await getone(id)
      getcate(data.products)
    }
    category()
  }, [])
  return (
    <section className="text-white-600 body-font">
    <div className="container  mx-auto max-w-7x1 ">
      <div className="flex flex-wrap w-full mb-4 p-4">
        <div className="w-full mb-6 lg:mb-0">
          <h1 className="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">Sản Phẩm Mới</h1>
          <div className="h-1 w-20 bg-indigo-500 rounded" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4" >
        {cate?.map((e, index) => {
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
  )
}

export default Categories