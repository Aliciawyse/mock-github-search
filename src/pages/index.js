import React, { Component } from 'react'
import axios from 'axios'
import { UserDataList } from '../components/UserDataList'

class FetchUsersExample extends Component {
  state = {
    error: '',
    isLoading: false,
    search_text: '',
    users: [],
  }

  handleInputChange = event => {
    const {
      target: { value, name },
    } = event

    if (name) {
      this.setState({
        [name]: value,
      })
    }
  }

  handleSubmit = async event => {
    event.preventDefault()

    const { search_text: user_input } = this.state

    try {
      const results = await axios.get(
        `https://api.github.com/search/users?q=${user_input}`
      )

      // console.log("check",results.data.items)
      // const my_data = JSON.stringify(results.data.items)

      if (!results) {
        this.setState({ isLoading: false, error: '' })
      }

      const {
        data: { items },
      } = results
      console.log('Users: ', items)

      if (items && items.length) {
        this.setState({
          users: items,
          isLoading: false,
          error: '',
        })
      } else {
        this.setState({ isLoading: false, error: '' })
        console.log('no data')
      }
    } catch (error) {
      this.setState({
        isLoading: false,
        error: error.message,
      })
    }
  }

  render() {
    const { error, isLoading, users, search_text } = this.state

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Search GitHub users
            <input
              type="text"
              name="search_text"
              value={search_text}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>

        <h1>Github api loads at run time</h1>

        {error && <p>Error: {error}</p>}

        {/* {console.log("yo",this.state.my_data)} */}
        {isLoading && <p>Loading...</p>}
        {!isLoading && users && users.length > 0 && (
          <UserDataList users={users} />
        )}

        {/* <div>
              { this.state.my_data ? <p>{this.state.my_data}</p>: <p>please enter text</p> }
          </div> */}
      </div>
    )
  }
}

export default FetchUsersExample
