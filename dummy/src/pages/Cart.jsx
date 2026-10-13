import React from 'react'
import Head from '../component/Head'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrementquantity, emptyCart, incrementquantity, remove } from '../redux/slice/Cartslice'






function Cart() {

   const cart = useSelector(state=>state.cart)
  const dispatch = useDispatch()
  const handleCheckOut =()=>{
    alert('order has place successfully...Thank you for shopping.....')
    dispatch(emptyCart())
  }
    return (
  <>
  <Head/>
  <div >
    <h1 className="text-center mb-5 text-primary" > cart summery</h1>
    {/* <Row>
    <Col lg={6} >
    <table className="table table-bordered table-striped text-center align-middle">
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>image</th>
        <th> quantity </th>
         <th>price  </th>
          <th> action </th>
      </tr>
      <tr>
        <td>1</td>
        <td>eyeshadow pallette with mirror</td>
        <td> <img 
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?"
            className="card-img-top"
            alt="Product" style={{ width: "80px", height: "80px", objectFit: "cover" }}
          /></td>
          <td><button>-</button>
             <input
                    type='text'
                    value='1'
                    className='mx-2 text-center '
                    style={{ width: '40px' }}
                  /><button>+</button></td>
          <td>56</td>
          <td>
  <i className="fa-solid fa-trash-can" style={{ color: "rgb(80, 30, 43)" }}></i>
</td>
      </tr>
    </table>
    </Col>
    <Col lg={6} className=' d-flex align-items-center justify-content-center flex-column '>
    <h4>Total items:<span className='text-warning'>0</span></h4>
    <h4>Total price:<span className='text-warning'>0</span></h4>
    <button className='btn btn-warning ' style={{width:"400px"}}>Check out</button>
    </Col>
  </Row> */}
<div className="row mt-5 mx-5">


  <div className="col-lg-8 col-sm-12">
  {
          cart?.length>0?
    <table className="table">
      <thead>
        <tr className="text-warning">
          <th>ID</th>
          <th>Title</th>
          <th>Image</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
      {
       cart?.map((pro,index)=>(
        <tr>
          <td>{index+1}</td>

          <td>{pro?.title}</td>

          <td>
            <img
              width={70}
              src={pro?.thumbnail}
            />
          </td>

          <td>
            <button className="btn border-0" disabled={pro.quantity == 1} onClick={()=>dispatch(decrementquantity(pro?.id))}>-</button>
            <input
              type="text"
              style={{ width: "50px" }}
              value={pro?.quantity}
              readOnly
            />
            <button className="btn border-0" onClick={()=>dispatch(incrementquantity(pro?.id))} >+</button>
          </td>

          <td>{pro?.totalprice}</td>

          <td>
            <button className="btn border-0 text-danger" onClick={()=>dispatch(remove(pro?.id))}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
       ))
       }

      </tbody>
    </table>
:
 <div className="d-flex justify-content-center align-items-center flex-column">
          <img src="https://assets.streamlinehq.com/image/private/w_800,h_800,ar_1/f_auto/v1/icons/shopping/empty-cart-lb2qls3hc10oh95ysepyyf.png/empty-cart-eudzxdt3f49bo2oyjh77m.png?_a=DATAiZAAZAA0" alt="" height={200} />
          <h4 className='text-center text-warning mt-2'>Empty Cart</h4>
         </div>
 }
  </div>
  <div className="col-lg-4 col-sm-12">

    <div className="d-flex flex-column align-items-center">
      <h4>Total Items: <span className='text-danger'>{cart?.length}</span></h4>
      <h4>Total Price: <span className='text-danger'>{cart?.reduce((sum,pro)=>sum+pro.totalprice,0)}</span></h4>

      <button className="btn btn-warning w-75" onClick={handleCheckOut}>
        Checkout
      </button>
    </div>

  </div>

</div>
   <div className="row ms-5 mt-5">
      <div className="d-flex">
      <button className='btn btn-danger' onClick={()=>dispatch(emptyCart())}>Empty Cart</button>
      <Link to={'/'} className='btn btn-warning ms-2'>Show More</Link>
      </div>
     </div>

    </div>
    </>
  )
}

export default Cart