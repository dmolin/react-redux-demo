import React from 'react'
import Search from '../containers/Search'
import Restaurants from '../containers/Restaurants'

class Landing extends React.Component {
  render () {
    return (
      <div>
        <Search />
        <Restaurants />
      </div>
    )
  }
}

export default Landing
