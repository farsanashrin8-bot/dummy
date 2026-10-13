
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchproducts } from '../redux/slice/ProductSlice'
import { Link } from 'react-router-dom'
import Head from '../component/Head'
import Spinner from 'react-bootstrap/Spinner'
import Pagination from '../component/Pagination'



function Home() {
  const dispatch = useDispatch()
  const { loading, products, error } = useSelector(
    state => state.products
  )
const [currentpage,setcurrentpage]=useState(1)
const cartperpage=6

let endingIndex=currentpage*cartperpage

let startingIndex=endingIndex-cartperpage

let currentproducts=products.slice(startingIndex,endingIndex)
  useEffect(() => {
    dispatch(fetchproducts())
  }, [dispatch])

  console.log(loading, products, error)

  return (
    <>
      <Head insideHome />

      {loading ? (
        <div className="text-center my-5">
          <Spinner animation="border" variant="warning" />
        </div>
      ) : error ? (
        <p className="text-center text-danger">{String(error)}</p>
      ) : (
        <>
        <div className="row m-5">
          {currentproducts?.length > 0 ? (
            currentproducts.map(pro => (
              <div className="col-lg-3 col-md-4 mb-4" key={pro.id}>
                <div className="card h-100" style={{ width: '250px' }}>
                  <img
                    src={pro.thumbnail}
                    className="card-img-top p-3"
                    alt={pro.title}
                    style={{ height: '220px', objectFit: 'contain' }}
                  />

                  <div className="card-body">
                    <h5 className="card-title">{pro.title}</h5>
                    <p className="card-text">
                      {/* {pro.description?.slice(0, 80)}... */}
                    </p>
                    <h6>₹{pro.price}</h6>

                    <Link to={`/Product/${pro.id}/view`}>
                      View option
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
        <div className='text-center my-5'>
        <Pagination  totalproducts={products?.length} cartperpage={cartperpage} currentpage={currentpage} setcurrentpage={setcurrentpage}/>
        </div>
       
        </>
      )}
    </>
  )
}

export default Home

