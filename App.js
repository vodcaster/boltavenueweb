import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter , RouterProvider, Outlet } from "react-router-dom";
import 'tw-elements';

const Applayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [{
      path: "/about",
      element: <About />,
      
    },
     {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/",
      element: <Body />,
    },
   
  ]
  
  }

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />);
