// import { createSlice } from "@reduxjs/toolkit";

//  const Cartslice=createSlice({
//     name:'cart',
//     initialState:[],
//     reducers:{
//         addtocart:(state,action)=>{
//           const existingProduct=state.find(pro=>pro.id==action.payload.id)
//           if(existingProduct){
// existingProduct.quantity++
// existingProduct.totalprice=existingProduct.quantity*existingProduct.price
//           }else{
//             state.push({...action.payload,quantity:1,totalprice:action.payload.price})
//           }
//         },
//         incrementquantity:(state,actions)=>{
//             const existingProduct=state.find(pro=>pro.id==actions.payload)
//             existingProduct.quantity++
//             existingProduct.totalprice=existingProduct.quantity=existingProduct.price
//         },
//          decrementquantity:(state,actions)=>{
//             const existingProduct=state.find(pro=>pro.id==actions.payload)
//             existingProduct.quantity--
//             existingProduct.totalprice=existingProduct.quantity=existingProduct.price

//         },
//         remove: (state, action) => {
//     return state.filter(pro => pro.id !== action.payload)
// },
//       emptyCart:()=>{
//         return[]
//       }
//     }
// })

// export const {addtocart,incrementquantity,decrementquantity,remove,emptyCart}=Cartslice.actions
// export default Cartslice.reducer



import { createSlice } from "@reduxjs/toolkit";

const Cartslice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addtocart: (state, action) => {
      const existingProduct = state.find(
        pro => pro.id == action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity++;
        existingProduct.totalprice =
          existingProduct.quantity * existingProduct.price;
      } else {
        state.push({
          ...action.payload,
          quantity: 1,
          totalprice: action.payload.price
        });
      }
    },

    incrementquantity: (state, action) => {
      const existingProduct = state.find(
        pro => pro.id == action.payload
      );

      if (existingProduct) {
        existingProduct.quantity++;
        existingProduct.totalprice =
          existingProduct.quantity * existingProduct.price;
      }
    },

    decrementquantity: (state, action) => {
      const existingProduct = state.find(
        pro => pro.id == action.payload
      );

      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity--;
        existingProduct.totalprice =
          existingProduct.quantity * existingProduct.price;
      }
    },

    remove: (state, action) => {
      return state.filter(pro => pro.id !== action.payload);
    },

    emptyCart: () => {
      return [];
    }
  }
});

export const {
  addtocart,
  incrementquantity,
  decrementquantity,
  remove,
  emptyCart
} = Cartslice.actions;

export default Cartslice.reducer;
