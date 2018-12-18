import React, { Component, Fragment } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   searchInput: ''
    // }
  }


  // updateSearchInput = (event) => {
  //   this.setState({
  //     ...this.props.searchInput,
  //     [event.target.name]: event.target.value   // this way requires you add 'name' to the input fields in your Form
  //   })
  //   this.props.tasks.filter((task) => task.title.includes(this.props.searchInput) || task.description.includes(this.props.searchInput))
  // }


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
                id="searchinput"
                type="text"
                name="searchinput"
                placeholder="Search Keyword"
                value={this.props.searchInput}
                onChange={this.props.updateSearchInput}
              />
            </div>
          </div>
      </Fragment>
    )
  }
  }

export default SearchBar
