import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addItem: (state,action)=>{
            state.items.push(action.payload);
        },
        removeItem: (state,action)=>{
            state.items.pop();
        },
        clearCart: (state)=>{
            state.items= [];
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;  //not the reducers insde the cartSlice


/*

Backend something like this:

cartSlice = {
    actions:{
    addItems,
    removeItem,
    clearCart
    },
    reducer: reducers  
}



*/