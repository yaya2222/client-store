import './App.css';
import Header from './components/Header';
import Cart from "./components/cart/Cart";
import { createContext, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Categories from "./pages/Categories"
import Home from "./pages/Home"
import Item from "./pages/Item";

export const CartPro = createContext()


function App() {
  const ShoppingCart = useState([])

  return (
    <div >
      <Header />
      <main >
        <CartPro.Provider value={ShoppingCart}>
          <Cart />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories/:cat" element={<Categories />} />
            <Route path="/item" element={<Item />} />
          </Routes>
        </CartPro.Provider>
      </main>
    </div>
  );
}

export default App;
