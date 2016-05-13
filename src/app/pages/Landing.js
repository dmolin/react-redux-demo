import React from 'react'
import Search from '../containers/Search'
import Header from '../components/Header'

class Landing extends React.Component {
  render () {
    return (
        <div className="landing-backdrop backdrop backdrop--people">
          <Header theme="transparent"/>
          <section className="centered-panel">
            <div className="landing-cta cta cta--light">
              <p>Order takeaway online</p>
              <small className="landing-cta-sub">Choose from over 20,000 takeaways</small>
              <Search />
            </div>
          </section>
        </div>  
    )
  }
}

export default Landing
