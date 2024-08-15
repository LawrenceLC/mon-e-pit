import React from "react";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Checkout from "./Components/pages/checkout";
import Home from "./Components/pages/Home";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        <Header />
      </div>
      <div>
      <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </div>
    </main>
  );
}
