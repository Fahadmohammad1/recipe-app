import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../layout/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/dashboard/Profile";
import AllProducts from "../pages/dashboard/AllProducts";
import AddProduct from "../pages/dashboard/AddProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Profile />,
      },
      {
        path: "all-products",
        element: <AllProducts />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
    ],
  },
]);
