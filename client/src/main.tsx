import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";

import AdminControlPage from "./pages/AdminControlPage";

import Admin from "./pages/Admin";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";

import StartPage from "./pages/Start";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>

      <Route path="" element={<StartPage />}></Route>
      <Route path="/admincontrolpage" element={<AdminControlPage />}></Route>

      <Route path="/" element={<StartPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin" element={<Admin />} />

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
