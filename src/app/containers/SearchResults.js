import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Restaurants} from '../components/Restaurants'
import search from '../actions/restaurants/thunk_search'

class SearchResults extends React.Component {
  componentDidMount() {
    console.log("mounted", this.props)
    //fetch data from server, dispatching an action
    this.props.search(this.props.params.postcode)
  }

  loadingOrResults() {
    const {restaurants, searchTerm} = this.props
    return restaurants ?
      <Restaurants searchTerm={searchTerm} restaurants={restaurants} /> :
      <span>Loading...</span>
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
    searchTerm: state.restaurants.postcode,
    restaurants: state.restaurants.results
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    search
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)
