import React from 'react'

class RestaurantsSummary extends React.Component {
  render() {
    const {total, postcode, area} = this.props
    
    return (
      <div className="restaurants-summary" >
        <p className="important">{total} takeaway restaurants in {postcode} {area}</p>
      </div>  
    )
  }
}

export default RestaurantsSummary
