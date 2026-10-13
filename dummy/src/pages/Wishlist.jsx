
// import React from 'react'
// import Head from '../component/Head'
// import { Link } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import { addToWishList, removewishlist } from '../redux/slice/Wishlistslice'
// import { addtocart } from '../redux/slice/Cartslice'



// function Wishlist() {
//     const wishlist = useSelector(state => state.wishlist)
//    const cart=useSelector(state=>state.cart)
//     const dispatch=useDispatch()
//       const handleCart = (product)=>{
//     const existingProduct = cart.find(pro=>pro.id == product.id)
//     if(existingProduct){
//       alert('product quantity incremented')
//       dispatch(addtocart(product))
//     }
//     else{
//       dispatch(addtocart(product))
//     }
//    }
// //    const handleRemove=(id)=>{
// //     dispatch(removewishlist(id))
// //    }

//     return (
//         <>
//             <Head />

//             <div className="container mt-4">
//                 <h2 className="mb-4">My Wishlist</h2>

//                 {wishlist.length === 0 ? (
//                     <div className="text-center mt-5">
//                         <img
//                             src="https://cdn-icons-png.flaticon.com/512/4076/4076478.png"
//                             alt="Empty Wishlist"
//                             style={{ width: '180px' }}
//                         />
//                     </div>
//                 ) : (
//                     <div className="row">
//                         {wishlist.map(pro => (
//                             <div className="col-lg-3 col-md-4 col-sm-6 mb-4"
//                                 key={pro.id}>
//                                 <div className="card h-100">

//                                     <img
//                                         src={pro.thumbnail}
//                                         className="card-img-top"
//                                         alt={pro.title}
//                                         style={{
//                                             height: '200px',
//                                             objectFit: 'contain'
//                                         }}
//                                     />

//                                     <div className="card-body">
//                                         <h5 className="card-title">
//                                             {pro.title}
//                                         </h5>

//                                         {/* <p className="card-text">
//                                             {pro.description}
//                                         </p>

//                                         <h6 className="text-danger">
//                                             ₹{pro.price}
//                                         </h6> */}

//                                         {/* <Link
//                                             to={`/Product/${pro.id}/view`}
//                                             className="btn btn-primary"
//                                         >
//                                             View Product
//                                         </Link> */}

//                                     </div>
//                                        <div className='d-flex align-items-center justify-content-between gap-5'>
//                                    <i className='fa-solid fa-heart ' style={{ color: "rgb(80, 30, 43)" }} onClick={()=>handleRemove(pro.id)}></i>
//                                    <i className="fa-solid fa-cart-shopping " style={{color: "rgb(30, 80, 52)"}} onClick={()=>dispatch(handleCart(pro))}></i>

//                                    </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </>
//     )
// }

// export default Wishlist

import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../redux/slice/Cartslice';
import { removewishlist } from '../redux/slice/Wishlistslice';
import Head from '../component/Head';


function Wishlist() {
  const wishlist = useSelector(state=>state.wishlist)
  const cart = useSelector(state=>state.cart)
  const dispatch = useDispatch()
  const handleCart = (product)=>{
    const existingProduct = cart.find(pro=>pro.id == product.id)
    if(existingProduct){
      alert('product quantity incremented')
      dispatch(addtocart(product))
    }
    else{
      dispatch(addtocart(product))
    }
   }
  
  return (
    <>
<Head/>
    <div  style={{minHeight:'100vh'}}>
      <h3 className='text-center  mt-2' style={{color: 'rgb(167, 12, 62)'}}>Wishlist</h3>

      <div className="row mx-5 mt-5 ">

        {
          wishlist.length>0?
          wishlist?.map((pro)=>(
     <Card className='me-2 mb-2' style={{ width: '18rem',height:'360px' }}>
      <Card.Img variant="top" height={200} className='image-fluid' src={pro?.thumbnail} />
      <Card.Body>
        <Card.Title className='d-block text-center'>{pro?.title}</Card.Title>
       
       <div className="d-flex justify-content-between mt-5">
          <i className="fa-solid fa-heart fa-xl" style={{color: 'rgb(167, 12, 62)'}} onClick={() => dispatch(removewishlist(pro?.id))}></i>
        <i className="fa-solid fa-cart-shopping fa-xl " style={{color: 'rgb(61, 167, 12)'}} onClick={()=>handleCart(pro)}></i>
       </div>
      </Card.Body>
    </Card>
        )
        )
:
<div className='d-flex justify-content-center align-items-center mt-5 pt-5 '>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1g8K-EtTwpI2mCNUfalfZsBvhP6Ixy806y9wAvvX3qg&s=10" alt="" height={400} />
</div>

}
  
    </div>

    </div>
        </>
  )
}

export default Wishlist