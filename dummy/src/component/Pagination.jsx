import React from 'react'


function Pagination({ totalproducts, cartperpage,currentpage,setcurrentpage })  {

    let pages=[]
    for(let i=1;i<=(totalproducts/cartperpage);i++){
       pages.push(i)
    }
  return (
    <>
     <button className=' btn mx-2' onClick={()=>setcurrentpage(currentpage-1)} disabled={currentpage==1}><i className="fa-solid fa-backward" style={{color: "black"}}></i></button>
   
     {
        pages.map(page=>(
            <button  className={currentpage==page?'btn bg-warning text-light mx-2':'btn mx-2'} key={page} onClick={()=>setcurrentpage(page)}>{page} </button>
        ))
     }
     <button  className=' btn mx-2' onClick={()=>setcurrentpage(currentpage+1)} disabled={currentpage==pages.length}><i className="fa-solid fa-forward" style={{color: "black"}}></i></button>
    </>
  
  )
}

export default Pagination

