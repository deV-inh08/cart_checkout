import React from "react";
import "./App.css";
import Header from "./Header/Header";
import { Route, Routes } from "react-router-dom";
import Store from "./Components/Store/Store";
import Team from "./Components/Team/Team";
import Card from "./Components/Card/Card";
import {CartProvider} from "./Context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Card />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/team" element={<Team />}></Route>
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
