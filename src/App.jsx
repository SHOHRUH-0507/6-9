import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/user/:id",
      element: <User />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
