import { Routes as R, Route } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Product from './pages/Product'
import Checkout from './pages/Checkout'

const Routes = () => (
  <R>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/products/:id" element={<Product />} />
    <Route path="/checkout" element={<Checkout />} />
  </R>
)

export default Routes
