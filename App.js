import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu";
import Error from "./Components/Error";
import store from "./Store/store";
import { Provider } from "react-redux";
import CartList from "./Components/CartList";
import Instamart from "./Components/Instamart";


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
        element: <Instamart />,
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
