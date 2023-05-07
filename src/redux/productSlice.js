import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    loading : false,
    data : [],
    error : ''
}

// export function getProducts() {
//     return async function getProductsThunk(dispatch, getState) {
//         const result = await axios.get("https://fakestoreapi.com/products");
//         dispatch(fetchProducts(result.data));
//     }
// }
export const getProducts = (createAsyncThunk('products/get', async() => {
   
         const result = await axios.get("https://fakestoreapi.com/products");
         return result.data;
                
}))
const productSlice = createSlice({
    name : 'product',
    initialState,
    // reducers : {
    //     fetchProducts(state, action) {
    //         state.data = action.payload
    //     }
    // }
    extraReducers : (builder) => {
        builder.addCase(getProducts.pending, state => {
            state.loading = true
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = ''
        })
        builder.addCase(getProducts.rejected, (state, action) => {
            state.loading = false;
            state.data = [];
            state.error = action.error.message;
        })
    }
})

export default productSlice.reducer;
// export const { fetchProducts } = productSlice.actions;