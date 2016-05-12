import React from 'react'
import Search from '../containers/Search'
import Restaurants from '../containers/Restaurants'
import Header from './Header'

class Landing extends React.Component {
  render () {
    return (
      <div>
        <div className="landing-backdrop backdrop backdrop--people">
          <section className="centered-panel">
            <Header />
            <div className="landing-cta cta cta--light">
              <p>Order takeaway online</p>
              <small className="landing-cta-sub">Choose from over 20,000 takeaways</small>
              <Search />
            </div>
          </section>
        </div>  
      </div>
    )
  }
}

export default Landing
