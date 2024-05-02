import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import ProductsList from './components/ProductsList/ProductsList'
import About from './components/About/About'
// import ProductRow from './components/ProductRow/ProductRow'
import ProductCard from './components/ProductCard/ProductCard'




function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<HomePage />}></Route>
        <Route path={'/products'} element={<ProductsList />}></Route>
        {/* <Route path={'/adds'} element={<AddProduct />}></Route> */}
        <Route path={'/about'} element={<About/>}></Route>
        <Route path={'/product-details/:product_id'} element={<ProductCard />}></Route>
      </Routes>
    
    </div>
  )
}

export default App