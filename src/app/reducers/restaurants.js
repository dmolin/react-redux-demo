import {ACTION_RESTAURANT_SEARCH_RESULTS} from '../actions/restaurants/searchResults'
import {ACTION_RESTAURANT_SEARCH_STARTED} from '../actions/restaurants/searchStarted'

export const initialState = {
  loading: false,
  postcode: '',
  result: {}
}

export default function(state = initialState, action) {
  const {type, result} = action
  
  switch(type) {
    case ACTION_RESTAURANT_SEARCH_STARTED:
      let {postcode} = action
      return Object.assign({}, state, {postcode, loading:true})
      break
    case ACTION_RESTAURANT_SEARCH_RESULTS:
      return Object.assign({}, state, result, {loading:false})
      break
    default:
      return state
  }
}
