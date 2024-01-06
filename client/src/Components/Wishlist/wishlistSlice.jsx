import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const wishlistSlices = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    wihlsitAdd: (state , action) => {
      const wishlistProduct=state.value.find(x=>x._id === action.payload._id)
      if (wishlistProduct) {
      state.value = state.value.filter(item=>item._id !== action.payload._id )
      return
      }
      else{
        state.value.push(action.payload)
      }
    },
    wihlistDelete: (state , action) => {
      state.value = state.value.filter(item=>item._id !== action.payload._id )
    },
    wihlistDeleteAll: (state) => {
      state.value = []
    }
  },
})

export const { wihlsitAdd , wihlistDelete , wihlistDeleteAll } = wishlistSlices.actions

export default wishlistSlices.reducer