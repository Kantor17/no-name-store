import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ProductPage from "./pages/ProductPage";
import AuthPage from "./pages/AuthPage";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { login, logout } from "./store/slices/authSlice";
import PrivateRoute from "./pages/PrivateRoute";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import { useTypedSelector } from "./hooks/reduxHooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/catalog",
    element: <Catalog />,
  },
  {
    path: "/catalog/:id",
    element: <ProductPage />,
  },
  {
    path: "/login",
    element: <AuthPage type={"login"} />,
  },
  {
    path: "/register",
    element: <AuthPage type={"register"} />,
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
  },
  {
    path: "/cart",
    element: (
      <PrivateRoute>
        <Cart />
      </PrivateRoute>
    ),
  },
]);

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login(user));
      } else {
        dispatch(logout());
      }
    });
  });

  return <RouterProvider router={router}></RouterProvider>;
}
