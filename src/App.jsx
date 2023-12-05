import React from "react";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <h1>
        <HomeLayout />
      </h1>
    ),
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <Error />,
      },
      {
        path: "register",
        element: (
          <h1>
            <Register />
          </h1>
        ),
      },
      {
        path: "login",
        element: (
          <h1>
            <Login />
          </h1>
        ),
      },
      {
        path: "dashboard",
        element: (
          <h1>
            <DashboardLayout />
          </h1>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
