import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "./pages/ProductList.jsx";
import Product from "./pages/Product.jsx";
import { Provider } from "react-redux";
import store from "./app/store/store.js";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCategory from "./pages/ProductCategory.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Cart from "./pages/Cart.jsx";

const router = createBrowserRouter([
  {
    path: `/codsoft-ecom/`,
    element: <App />,
  },
  {
    path: "/codsoft-ecom/productlist",
    element: <ProductList />,
  },
  {
    path: "/codsoft-ecom/product/:productId",
    element: <Product />,
  },
  {
    path: "/codsoft-ecom/product-category/:categoryName",
    element: <ProductCategory />,
  },
  {
    path: "/codsoft-ecom/login",
    element: <Login />,
  },
  {
    path: "/codsoft-ecom/signup",
    element: <SignUp />,
  },
  {
    path: "/codsoft-ecom/cart",
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
