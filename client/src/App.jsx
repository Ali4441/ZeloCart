import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";

import Layout from "./Layout";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import CheckOut from "./Pages/CheckOut";
import ProductDetailPage from "./Pages/ProductDetailPage";
import Wishlist from "./Pages/Wishlist";
import NotFound from "./Pages/NotFound";
import Account from "./Pages/Account";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "signup", element: <SignUp /> },
      { path: "login", element: <Login /> },
      { path: "account", element: <Account /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "ProductDetailPage/:id", element: <ProductDetailPage /> },
      { path: "checkout", element: <CheckOut /> },
      { path: "cart", element: <Cart /> },
      { path: "*", element: <NotFound /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
