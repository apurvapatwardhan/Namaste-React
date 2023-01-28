import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body.jsx";
import Header from "./components/Header.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About.jsx";
import Error from "./components/Error.jsx";
import Footer from "./components/Footer.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Contact from "./components/Contact.jsx";
import Profile from "./components/Profile.jsx";
import ProfileClass from "./components/ProfileClass.jsx";
const root = ReactDOM.createRoot(document.querySelector(".root"));

const AppLayout = (props) => {
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
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <ProfileClass />
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />
      },
      {
        path: "/home",
        element: <Body />
      },
      {
        path: "/",
        element: <Body />
      }
    ]
  },
]);

root.render(<RouterProvider router={appRouter}></RouterProvider>);
