// constants
export const ADD_CART = 'APP/ADD_CART';
export const REMOVE_CART = 'APP/REMOVE_CART';
export const INCREMENT_COST = 'APP/INCREMENT_COST';
export const DECREMENT_COST = 'APP/DECREMENT_COST';

// action creator
export const addCart = (payload) => ({
  type: ADD_CART,
  payload
})

// export const removeCart = (itemId) => ({
//   type: REMOVE_CART,
//   payload: itemId
// })

export const removeCart = (itemId) => (dispatch, getState) => {
  const isExsites = getState().app.carts.some(cart => cart.id === cart.id);
  if(isExsites) {
    console.log('exsited')
    dispatch({
      type: REMOVE_CART,
      payload: itemId
    })
    return;
  }
  console.log('no existed')
 
}

export const incrementCost = (itemId) => ({
  type: INCREMENT_COST,
  payload: itemId 
})

export const decrementCost = (itemId) => ({
  type: DECREMENT_COST,
  payload: itemId 
})