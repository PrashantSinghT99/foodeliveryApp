import React, { Children } from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { createBrowserRouter, Outlet, Router, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu";
import Error from './Components/Error'
import Cart from './Components/Cart'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    errorElement:<Error/>,
 
  },
  {
    path: "restaurant/:id",
    element: <RestaurantMenu/>,
    errorElement:<Error/>,
  },
  {
    path: "cart",
    element: <Cart />,
    errorElement:<Error/>,
  },
]);

function App() {
  return (
    <div className="font-Metrophobic">
      <Header />
      <RouterProvider router={router}>
        <Outlet/>
      </RouterProvider>
      <Footer />
    </div>
  );
}

export default App;
