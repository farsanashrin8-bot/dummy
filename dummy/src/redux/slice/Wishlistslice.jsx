import { createSlice } from "@reduxjs/toolkit";

const wishlistslice = createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        addToWishList:(state,action)=>{
            state.push(action.payload)
        },
        removewishlist:(state,action)=>{
            return state.filter(pro=>pro.id!=action.payload)
        }
    }
})
export const {addToWishList,removewishlist} = wishlistslice.actions
export default wishlistslice.reducer