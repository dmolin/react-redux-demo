import React from 'react'
import Restaurant from './Restaurant'

class Restaurants extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const {restaurants, searchTerm} = this.props

    console.log('restaurants', restaurants)
    return (
      restaurants.length ?
        <section className="restaurants">
          {restaurants.map((item,index) => {
            return (<Restaurant {...item} key={'r_' + index} />)
          })}
        </section>
        :
        searchTerm ?
          <p>No Restaurants available with the current search value</p>
          :
          <p>Input your postcode and let's order something!</p>
    )
  }
}

export default Restaurants
