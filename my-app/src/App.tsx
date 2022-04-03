import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Websitelayout from "./page/layouts/Websitelayout";
import { ProductType } from "./types/product";
import axios from "axios";
import ProductList from "./components/ProductList";
import Detail from "./page/Detail";
import Adminlayout from "./page/layouts/Adminlayout";
import ProductManager from "./page/adminProduct/ProductManager";
import { add, get, remove, update } from "./api/Product";
import Productadd from "./page/adminProduct/Productadd";
import Productedit from "./page/adminProduct/Productedit";
import HomePage from "./page/HomePage";
import CateManager from "./page/adminCategoty/CateManager";
import { Category } from "./types/category";
import { list, addcate, removecate, updateCate } from "./api/category";
import Cateadd from "./page/adminCategoty/Cateadd";
import Cateedit from "./page/adminCategoty/Cateaedit";
import Signup from "./page/Signup";
import { UserType } from "./types/user";
import { signin, signup } from "./api/auth";
import Signin from "./page/Signin";
import PrivateRouter from "./components/PrivatrRouter";
import Dashboard from "./page/Dashboard";
import Categories from "./page/category";
import UserManage from "./page/adminUser/userManage";

function App() {
  const [product, setProduct] = useState<ProductType[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getproduct = async () => {
      const { data } = await get();
      setProduct(data);
    };
    getproduct();
  }, []);
  //category
  const [categorys, setcategory] = useState<Category[]>([]);
  //user
  const [users, setuser] = useState<UserType[]>([]);
  useEffect(() => {
    const getcategory = async () => {
      const { data } = await list();
      setcategory(data);
    };
    getcategory();
  }, []);
  const onHandlerRemove = async (id: number | string) => {
    remove(id);

    setProduct(product.filter((item) => item._id !== id));
  };
  const removeCate = async (id: number | string) => {
    removecate(id);

    setcategory(categorys.filter((item) => item._id !== id));
  };
  const onHandleradd = async (products: ProductType) => {
    const apiUrl = "https://api.cloudinary.com/v1_1/dmlv9tzte/image/upload";
    const image = products.img[0];
    const formdata = new FormData();
    formdata.append("file", image);
    formdata.append("upload_preset", "web16309");
    const { data } = await axios.post(apiUrl, formdata, {
      headers: {
        "Content-type": "application/form-data",
      },
    });

    const addproduct = await add({ ...products, img: data.url });

    // console.log(products)
    // //...product mảng ban đầu sét vơi product mơis thêm
    setProduct([...product, addproduct.data]);
  };
  //cateadd
  const addCate = async (category: Category) => {
    const { data } = await addcate(category);
    console.log(data);
    setcategory([...categorys, data]);
  };
  const onHandlerupdate = (products: ProductType) => {
    const productedit = async () => {
      const { data } = await update(products);

      //item dữ liệu trong mảng product, dât dữ liệu mơi cập nhật
      const newProduct = product.map((item) =>
        item._id === data._id ? products : item
      );
      setProduct(newProduct);
    };
    productedit();
  };
  //
  const updateCategory = (category: Category) => {
    // console.log(category);
    const cateedit = async () => {
      const { data } = await updateCate(category);

      // item dữ liệu trong mảng product, dât dữ liệu mơi cập nhật
      const newProduct = categorys.map((item) =>
        item._id === data._id ? category : item
      );
      console.log(data);
      setcategory(newProduct);
    };
    cateedit();
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Websitelayout />}>
          <Route index element={<HomePage />} />
          <Route path="product" element={<ProductList products={product} />} />
          <Route path="/product/:id" element={<Detail />} />
          <Route path="/category/:id" element={<Categories />} />
        </Route>

        <Route
          path="admin"
          element={
            <PrivateRouter>
              <Adminlayout />
            </PrivateRouter>
          }
        >
          <Route index element={<h1>Test</h1>} />
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route
            path="product"
            element={
              <ProductManager product={product} onRemove={onHandlerRemove} />
            }
          />
          <Route
            path="categories"
            element={<CateManager category={categorys} onRemove={removeCate} />}
          />
          <Route
            path="/admin/product/add"
            element={<Productadd onAdd={onHandleradd} />}
          />
          <Route
            path="/admin/categories/add"
            element={<Cateadd onAdd={addCate} />}
          />
          <Route
            path="/admin/product/:id/edit"
            element={<Productedit onUpdate={onHandlerupdate} />}
          />
          <Route
            path="/admin/categories/:id/edit"
            element={<Cateedit onUpdate={updateCategory} />}
          />
          <Route
          path="/admin/users" 
          element={<UserManage/>}
          />
        </Route>

        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
