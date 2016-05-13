import api from '../../middleware/restaurantApi'
import searchResults from './searchResults'
import searchStarted from './searchStarted'
import flashMessage from '../flashMessage'

export default function search(term) {
  return (dispatch, getState) => {
    if(!term || !term.length) {
      dispatch(searchResults({postcode:'', results:[]}))
      return
    }

    //start the search action processing
    dispatch(searchStarted(term))

    //make it slower...
    setTimeout(() => {
      //call the server
      api.get(`?q=${term}`)
        .then((response) => {
          dispatch(searchResults({postcode:term, results:response.data.Restaurants}))
        })
        .catch((error) => {
          dispatch(flashMessage("Error retrieving restaurant list. Please try again"))
        })

    }, 2000)
  }
}
