import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Restaurants, RestaurantsSummary, Filter} from '../components/Restaurants'
import Header from '../components/Header'
import Spinner from '../components/Spinner'
import search from '../actions/restaurants/thunk_search'

class SearchRestaurantsPage extends React.Component {
  componentDidMount() {
    //fetch data from server, dispatching an action
    this.props.search(this.props.params.postcode)
  }

  loadingOrResults() {
    const {restaurants, searchTerm, loading, result} = this.props

    console.log(`searching ${searchTerm} loading is ${loading}`)

    return loading ?
        <Spinner /> :
        restaurants ?
          <div className="restaurant-results-wrapper centered-panel">
            <Filter />
            <div className="restaurant-results">
              <RestaurantsSummary total={restaurants.length} postcode={searchTerm} area={result.Area} />
              <Restaurants restaurants={restaurants} />
            </div>  
          </div>  :
          searchTerm ?
            <span>No Results</span> : <span />
  }

  render() {
    const {result, loading} = this.props

    return (
      <div className={`search-restaurants loading-${loading}`}>
        <Header area={result.ShortResultText ? `${result.ShortResultText} ${result.Area}` : ''}/>
        {this.loadingOrResults()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loading: state.restaurants.loading,
    searchTerm: state.restaurants.postcode,
    restaurants: state.restaurants.result.Restaurants,
    result: state.restaurants.result || {}
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    search
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchRestaurantsPage)
