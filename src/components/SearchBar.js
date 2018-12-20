import React, { Component, Fragment } from 'react'

class SearchBar extends Component {

  render () {
    console.log("SearchBar this.props are: ", this.props)

    return (
      <Fragment>
        <br/>
        <a href="/"><button className="ui button left">Back to my Task List</button></a>
        <h2>Search by Task Title Keywords</h2>
          <div className="inline fields">
            <div className="eight wide field">
              <input
                type="text"
                placeholder="Search Keyword"
                value={this.props.searchInput}
                onChange={this.props.handleChange}
              />
            </div>
          </div>
      </Fragment>
    )
  }
  }

export default SearchBar
