import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Restaurants from '../components/Restaurants'

function mapStateToProps(state) {
  return {
    searchTerm: state.restaurants.postcode,
    restaurants: state.restaurants.results
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants)
