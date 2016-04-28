import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Search from '../components/Search'
import search from '../actions/restaurants/thunk_search'

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    search
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
