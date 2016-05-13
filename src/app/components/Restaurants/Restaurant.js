import React from 'react'
import Rating from '../Rating'

class Restaurant extends React.Component {
  renderBadgeIfSponsored() {
    const {IsSponsored} = this.props
    return IsSponsored ? <div className="restaurant--sponsored">Sponsored</div> : ''
  }
  
  render() {
    const {Name, Logo, CuisineTypes, Address, City, Postcode, DriveDistance, DeliveryCost, MinimumDeliveryValue} = this.props
    const cuisine = CuisineTypes.reduce((acc, r) => { acc.push(r.Name); return acc; }, []).join(',')
    const deliveryCost = DeliveryCost ? DeliveryCost + '£' : 'FREE'
    const minimumDeliveryValue = MinimumDeliveryValue + '£'

    //console.log(this.props)
    return (
      <div className="restaurant" >
        <div className="restaurant-logo">
          <img src={Logo && Logo.length && Logo[0].StandardResolutionURL || ""} />
        </div>  
        <div className="restaurant-info">
          <h2>{Name}</h2>
          {this.renderBadgeIfSponsored()}
          <Rating rating={this.props.RatingStars} numberOfRatings={this.props.NumberOfRatings} />
          <p>{cuisine}</p>
          <p>{Address}, {City}, {Postcode}, ({DriveDistance} miles)</p>
          <p><span className="padded-e">Delivery: {deliveryCost}</span>Minimum:{minimumDeliveryValue}</p>
        </div>
      </div>
    )
  }
}

export default Restaurant
