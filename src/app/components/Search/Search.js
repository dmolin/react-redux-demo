import React from 'react'
import {browserHistory} from 'react-router'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this)
  }
  handleSearch(event) {
    event.preventDefault()
    //this.props.search(this.refs.postcode.value)
    //this.props.history.push('/area/' + encodeURIComponent(this.refs.postcode.value))
    //this.context.router.push('area/' + encodeURIComponent(this.refs.postcode.value))
    browserHistory.push('/area/' + encodeURIComponent(this.refs.postcode.value))
  }
  render () {
    return (
      <section className="search">
        <form className="search-form">
          <input type="text" className="search-form-input" ref="postcode" placeholder="Enter postcode" />
          <button type="submit"
                  className="search-form-button"
                  onClick={this.handleSearch}>Find takeaways</button>
        </form>
      </section>
    )
  }
}

export default Search
