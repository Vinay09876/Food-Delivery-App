import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./packgaes/Add/Add";
import List from "./packgaes/List/List";
import Orders from "./packgaes/Orders/Orders";
import { ToastContainer } from "react-toastify";

function App() {
  const url = "http://localhost:4000";
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/orders" element={<Orders url={url} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
