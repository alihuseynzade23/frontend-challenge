import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FilterState = {
  searchQuery: string
  sortBy: 'price' | 'rating' | ''
}

const initialState: FilterState = {
  searchQuery: '',
  sortBy: ''
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
    setSortBy: (state, action: PayloadAction<'price' | 'rating' | ''>) => {
      state.sortBy = action.payload
    }
  }
})

export const { setSearchQuery, setSortBy } = filterSlice.actions
export default filterSlice.reducer
