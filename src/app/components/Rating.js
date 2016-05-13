import React from 'react'

class Rating extends React.Component {
  render() {
    const ratingValue = ("" + this.props.rating).replace('.','')
    return (
      <div className="rating">
        <img src={`//dy3erx8o0a6nh.cloudfront.net/images/serp/stars-${ratingValue}.png`} width="102" height="17" />
        <span>({this.props.numberOfRatings})</span>
      </div>
    )
  }
}

export default Rating
