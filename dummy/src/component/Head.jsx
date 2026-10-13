import React from 'react'
import { Link } from 'react-router-dom'
import {searchproducts} from '../redux/slice/ProductSlice'
import { useDispatch, useSelector } from 'react-redux'


function Head({insideHome}) {
  const wishlist=useSelector(state=>state.wishlist)
    const cart=useSelector(state=>state.cart)
  const dispatch=useDispatch()

  return (
  <>
  <nav
      className="navbar"  style={{ backgroundColor: "violet" }}>
      <div className="container-fluid">
      <a className="navbar-brand text-white fw-bold fs-3" href="#">
<i className="fa-solid fa-bag-shopping me-2"></i>
  Shopify</a>
          <form className="d-flex mx-auto" style={{ width: "40%" }}>
            {
 insideHome && <input onChange={(e)=>dispatch(searchproducts(e.target.value))}className="form-control me-2" type="search" placeholder="Search" />
            }
         
          
           <button className='btn btn-success'>search</button>
          </form>
    <div className="d-flex gap-4 text-white fs-4">
  <div>
    <span className="me-1">{wishlist.length}</span>
<Link to="/Wishlist" ><i className='fa-solid fa-heart' style={{ color: "rgb(80, 30, 43)" }}></i></Link> 
  </div>

  <div>
    <span className="me-1">{cart.length}</span>
  <Link to="/Cart" ><i className="fa-solid fa-cart-shopping" style={{color: "rgb(30, 80, 52)"}}></i></Link>   
  </div>

</div>
</div>
    </nav>
  </>
  )
}

export default Head