import './App.css'
import { Routes, Route } from 'react-router-dom';
import Cart from "./components/cart/Cart"
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';

export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/products" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
}
