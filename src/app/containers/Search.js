import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Search from '../components/Search'
import search from '../actions/restaurants/thunk_search'

function mapStateToProps(state) {
  return {
    searchTerm: state.restaurants.postcode
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    search
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
