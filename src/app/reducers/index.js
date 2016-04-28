import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'
import restaurants from './restaurants'
import flashMessage from './flashMessage'

export default combineReducers({
  restaurants,
  flashMessage,
  routing: routerReducer
})
