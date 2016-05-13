import api from '../../middleware/restaurantApi'
import searchResults from './searchResults'
import searchStarted from './searchStarted'
import flashMessage from '../flashMessage'

export default function search(term) {
  return (dispatch, getState) => {
    if(!term || !term.length) {
      dispatch(searchResults({postcode:'', result:{}}))
      return
    }

    //start the search action processing
    dispatch(searchStarted(term))

    //call the server
    api.get(`?q=${term}`)
      .then((response) => {
        //remove 'Errors' and 'HasErrors' from the result object
        ['Errors','HasErrors'].forEach((p) => {delete response.data[p]})
        const result = response.data
        dispatch(searchResults({postcode:term, result}))
      })
      .catch((error) => {
        dispatch(flashMessage("Error retrieving restaurant list. Please try again"))
      })
  }
}
