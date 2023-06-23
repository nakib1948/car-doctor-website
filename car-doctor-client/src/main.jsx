import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main.jsx";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import AuthProvider from "./providers/AuthProvider";
import BookService from "./pages/BookService/BookService";
import Bookings from "./pages/Bookings/Bookings";
import PrivateRoute from "../PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path:'book/:id',
        element:<PrivateRoute><BookService></BookService></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:3000/services/${params.id}`)
      },
      {
        path:'bookings',
        element: <PrivateRoute><Bookings></Bookings></PrivateRoute> ,
        
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="mx-auto max-w-7xl">
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
);
