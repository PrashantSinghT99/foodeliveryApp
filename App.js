import React, { Suspense } from "react";
import Header from './src/Components/Header';
import Body from './src/Components/Body'
import Footer from './src/Components/Footer';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from './src/Components/RestaurantMenu';
import Error from './src/Components/Error';
import store from "./Store/store";
import { Provider } from "react-redux";
import CartList from './src/Components/CartList';
//import Instamart from './src/Components/Instamart';
//import Faq from "./src/Components/Faq";
import { lazy } from "react";

const Instamart=lazy(()=>import("./src/Components/Instamart"));
const Faq =lazy(()=>import("./src/Components/Faq"))
const AppLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <CartList />,
        errorElement: <Error />,
      },
      {
        path: "/instamart",
        element: <Suspense><Instamart /></Suspense>,
        errorElement: <Error />,
      },
      {
        path: "/FAQs",
        element: <Suspense><Faq/></Suspense>,
        errorElement: <Error />,
      },
    ]
  },
]);


function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} fallbackElement={<Error />} />
    </Provider>
  );
}

export default App;
