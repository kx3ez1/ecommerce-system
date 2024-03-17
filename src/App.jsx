import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductList from './components/ProductList'
import ProductItem from './components/ProductItem'
import Cart from './components/Cart'
import Checkout from './components/Checkout'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductItem />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
