import React from 'react'

class Restaurant extends React.Component {
  render() {
    const {Name, Logo} = this.props

    console.log(this.props)
    return (
      <div className="restaurant" >
        <img src={Logo && Logo.length && Logo[0].StandardResolutionURL || ""} /><span>{Name}</span>
      </div>
    )
  }
}

export default Restaurant
