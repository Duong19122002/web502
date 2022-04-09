import React, { useEffect, useState } from 'react'
import { get } from '../api/Product'
import { ProductType } from '../types/product'
import { useParams } from 'react-router-dom'
import { getone } from '../api/category'

type ProductProps = {
}
 type Props={}
 const Categories =(props:Props)=>{
   const {id}= useParams();
   console.log(id)
   const [cate,getcate]= useState<ProductType[]>([])
   useEffect(()=>{
     const category = async ()=>{
       const {data}= await getone(id)
       getcate(data.products)
     }
     category()
   },[])
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

      <main className="my-8">
        <div className="container mx-auto px-6">
          <div className="h-64 rounded-md overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144")' }}>
            <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
              <div className="px-10 max-w-xl">
                <h2 className="text-2xl text-white font-semibold">Sport Shoes</h2>
                <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                <button className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  <span>Shop Now</span>
                  <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex mt-8 md:-mx-4">
            <div className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80")' }}>
              <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                <div className="px-10 max-w-xl">
                  <h2 className="text-2xl text-white font-semibold">Back Pack</h2>
                  <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                  <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                    <span>Shop Now</span>
                    <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")' }}>
              <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                <div className="px-10 max-w-xl">
                  <h2 className="text-2xl text-white font-semibold">Games</h2>
                  <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                  <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                    <span>Shop Now</span>
                    <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
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