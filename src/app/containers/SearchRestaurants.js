import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Restaurants} from '../components/Restaurants'
import search from '../actions/restaurants/thunk_search'

class SearchRestaurants extends React.Component {
  componentDidMount() {
    //fetch data from server, dispatching an action
    this.props.search(this.props.params.postcode)
  }

  loadingOrResults() {
    const {restaurants, searchTerm, loading} = this.props

    console.log(restaurants, searchTerm, loading)

    return restaurants ?
      <Restaurants restaurants={restaurants} /> :
      loading ?
        <span>Loading...</span> :
      searchTerm ?
        <span>No Results</span> : <span />
  }

  render() {
    //console.log("render", this.props);
    return (
      <div>
        {this.loadingOrResults()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loading: state.restaurants.loading,
    searchTerm: state.restaurants.postcode,
    restaurants: state.restaurants.results
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    search
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchRestaurants)
