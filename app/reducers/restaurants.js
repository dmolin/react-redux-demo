import {ACTION_RESTAURANT_SEARCH_RESULTS} from '../actions/restaurants/searchResults'

export const initialState = {
  postcode: '',
  results: []
}

export default function(state = initialState, action) {
  const {type, results} = action
  
  switch(type) {
    case ACTION_RESTAURANT_SEARCH_RESULTS:
      return Object.assign({}, state, results)
      break
    default:
      return state
  }
}
