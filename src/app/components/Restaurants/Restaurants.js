import React from 'react'
import Restaurant from './Restaurant'

class Restaurants extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const {restaurants} = this.props

    //console.log('restaurants', restaurants)
    return (
      restaurants.length ?
        <section className="restaurants">
          {restaurants.map((item,index) => {
            return (<Restaurant {...item} key={'r_' + index} />)
          })}
        </section> : <section className="restaurants-empty" />
    )
  }
}

export default Restaurants
