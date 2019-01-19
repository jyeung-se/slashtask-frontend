import React, { Fragment } from 'react'

const SearchBar = (props) => {

  return (
    <Fragment>
      <br/>
      <h2>Search by Task Title Keywords</h2>
        <div className="inline fields">
          <div className="eight wide field">
            <input
              type="text"
              placeholder="Search Keyword"
              value={props.searchInput}
              onChange={props.handleChange}
            />
          </div>
        </div>
    </Fragment>
  )
}

export default SearchBar
