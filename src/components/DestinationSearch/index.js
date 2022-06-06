import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    const searchedName = event.target.value
    const lowerCaseSearchedName = searchedName.toLowerCase()
    this.setState({searchInput: lowerCaseSearchedName})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="searchContainer">
        <h1 className="main-heading">Destination Search</h1>
        <div className="input-main-container">
          <div className="input-container">
            <input
              type="search"
              placeholder="Search"
              onChange={this.onChangeSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
        </div>

        <ul>
          {searchResults.map(eachItem => (
            <DestinationItem eachDestination={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
