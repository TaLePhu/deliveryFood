import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import { restaurantSclice } from './slices/restaurantSlice'

export const store = configureStore({
  reducer: {
    cart : cartSlice,
    restaurant: restaurantSclice
  },
})