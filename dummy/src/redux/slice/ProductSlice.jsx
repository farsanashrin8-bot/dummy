import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"

 export const  fetchproducts=  createAsyncThunk('products/fetchproducts',async()=>{
 const res=await axios.get ('https://dummyjson.com/products')
 localStorage.setItem ("allproducts",JSON.stringify(res.data.products))
 return res.data.products
})
const productSlice=createSlice({
    name:'product',
    initialState:{
        loading:false,
        products:[],
        error:'',
        dummyproducts:[]
    },
    reducers:{
    searchproducts:(state,action)=>{
      state.products=state.dummyproducts.filter(pro=>pro.title.toLowerCase().includes(action.payload.toLowerCase()))
    }  
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchproducts.pending,(state,action)=>{
state.loading=true
state.products=[]
state.dummyproducts=[]
state.error=''
        })
         builder.addCase(fetchproducts.fulfilled,(state,action)=>{
state.loading=false
state.products=action.payload
state.dummyproducts=action.payload
state.error=''  

})
  builder.addCase(fetchproducts.rejected,(state,action)=>{
state.loading=false
state.products=[]
state.dummyproducts=[]
state.error="api call failed"
  })
}
}
)
export const {searchproducts}=productSlice.actions
export default productSlice.reducer