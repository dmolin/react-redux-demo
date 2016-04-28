import React from 'react'

class Restaurant extends React.Component {
  render() {
    const {Name} = this.props

    console.log(this.props)
    return (
      <div className="restaurant" >
        <p>{Name}</p>
      </div>
    )
  }
}

export default Restaurant
