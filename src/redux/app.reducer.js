import { ADD_CART } from './app.actions'

// initialState
const initialState = {
  carts: []
}

export function appReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_CART:
      return {
        ...state,
        carts: [...state.carts, payload]
      }
    default:
      return state
  }
}