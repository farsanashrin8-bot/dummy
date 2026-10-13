import React, { useEffect, useState } from 'react'
import  { Col, Row } from 'react-bootstrap'
import Head from '../component/Head'
import { Link, useParams } from 'react-router-dom'
import { addToWishList } from '../redux/slice/Wishlistslice'
import { useDispatch, useSelector } from 'react-redux'
import { addtocart } from '../redux/slice/Cartslice'




function Product() {
  const {id}=useParams()
  const[product,setproduct]=useState({})
  const wishlist=useSelector(state=>state.wishlist)
  const dispatch=useDispatch()
   const cart=useSelector(state=>state.cart)
// console.log(product);

  useEffect(()=>{
    if(localStorage.getItem("allproducts")){
      setproduct(JSON.parse(localStorage.getItem("allproducts")).find(pro=>pro.id==id))
    }
  },[id])

const handlewishlist=()=>{
  const existingproduct=wishlist.find(pro=>pro.id==product.id)
  if(existingproduct){
    alert("product already in your wishlist.... add another")
  }
  else{
    dispatch(addToWishList(product))
  }
}

const handlecart=()=>{
const existingProduct=cart.find(pro=>pro.id==product.id)
if(existingProduct){
  alert("product quantity  incremented")
  dispatch(addtocart(product))
}
else{
  dispatch(addtocart(product))
}
}



  return (
  <>
  <Head/>
<Row className='mt-5'>
  <Col lg={6} sm={12} >
  <img
  className="mt-5"
  src={product?.thumbnail}
  alt={product?.title || "Product"}
/>
  </Col>
  <Col lg={6} style={{marginTop:'50px'}}>
  <div className='d-flex align-items-center justify-content-center'>
    <h1 className='text-warning'>{product?.title}</h1>
  </div>
  <h4 className='text-danger text-center'>{product?.price}</h4>
  <p>{product?.description}</p>
   <div className='d-flex  justify-content-between gap-5'>
  <i className='fa-solid fa-heart fa-xl' style={{ color: "rgb(80, 30, 43)" }} onClick={handlewishlist}></i>
  <i className="fa-solid fa-cart-shopping fa-xl" style={{color: "rgb(30, 80, 52)"}} onClick={handlecart}></i>

   </div>

  </Col>

</Row>
</>

  )
}

export default Product