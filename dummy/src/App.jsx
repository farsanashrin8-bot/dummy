
import { Route, Routes  } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Footer from './component/Footer'




function App() {


  return (
    <>
  
     <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/Product/:id/view' element={<Product/>}/>
<Route path='/Cart' element={<Cart/>}/>
<Route path='/Wishlist' element={<Wishlist/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
