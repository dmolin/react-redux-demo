import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this)
  }
  handleSearch(event) {
    event.preventDefault()
    this.props.search(this.refs.postcode.value)
  }
  render () {
    return (
      <section className="search">
        <form>
          <input type="text" data-id="search-postcode" ref="postcode" placeholder="postcode?" />
          <br />
          <button type="submit" onClick={this.handleSearch}>Search</button>
        </form>
      </section>
    )
  }
}

export default Search
