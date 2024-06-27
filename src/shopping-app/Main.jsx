import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Owner from "./Owner";
import "../index.css"
import User from "./User";

function main() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Owner />
        </>
      ),
    },
    {
      path: "/user",
      element: (
        <>
          <User />
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
