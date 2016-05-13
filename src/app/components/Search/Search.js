import React from 'react'
import {browserHistory} from 'react-router'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
  }
  handleSearch(event) {
    event.preventDefault()
    const value = this.refs.postcode.value.toUpperCase()
    console.log('/area/' + encodeURIComponent(value))
    browserHistory.push('/area/' + encodeURIComponent(value))
    return false
  }
  onInputChange(event) {
    if(!this.refs.postcode.value) {
      //disable the submit button
      this.refs.submit.setAttribute('disabled', '')
    } else {
      this.refs.submit.removeAttribute('disabled')
    }
  }

  render () {
    const {searchTerm} = this.props
    const submitStatus = searchTerm ? {} : {disabled: 'disabled'}

    return (
      <section className="search">
        <form className="search-form" onSubmit={this.handleSearch}>
          <input type="text" className="search-form-input"
                 ref="postcode" placeholder="Enter postcode" defaultValue={searchTerm}
                 onChange={this.onInputChange} />
          <button ref="submit" type="submit"
                  className="search-form-button" {...submitStatus}
                  >Find takeaways</button>
        </form>
      </section>
    )
  }
}

export default Search
