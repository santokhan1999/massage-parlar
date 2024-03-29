import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import BookOnline from "./views/BookOnline";
import YoungLiving from "./views/YoungLiving";
import PageLoader from "./components/page-loader/PageLoader";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/appointments" element={<BookOnline />}></Route>
        <Route path="/living" element={<YoungLiving />}></Route>
        <Route path="/pageloader" element={<PageLoader />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
