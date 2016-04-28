import api from '../../middleware/restaurantApi'
import searchResultsAction from './searchResults'
import flashMessage from '../flashMessage'

export default function search(term) {
  return (dispatch, getState) => {
    if(!term || !term.length) {
      dispatch(searchResultsAction({postcode:'', results:[]}))
      return
    }

    //call the server
    api.get(`?q=${term}`)
      .then((response) => {
        dispatch(searchResultsAction({postcode:term, results:response.data.Restaurants}))
      })
      .catch((error) => {
        dispatch(flashMessage("Error retrieving restaurant list. Please try again"))
      })
  }
}
