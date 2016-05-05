import React from 'react'
import Search from '../containers/Search'
import Restaurants from '../containers/Restaurants'
import Header from './Header'

class Landing extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Search />
        <Restaurants />
      </div>
    )
  }
}

export default Landing
