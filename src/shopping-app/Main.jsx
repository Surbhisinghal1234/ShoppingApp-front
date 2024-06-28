import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Owner from "./Owner";
import "../index.css"
import User from "./User";
import Login from "./Login";
import Shop from "./Shop";

function main() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <User/>
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Login/>
        </>
      ),
    },
    {
      path: "/shop",
      element: (
        <>
         <Shop/>
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default main;
