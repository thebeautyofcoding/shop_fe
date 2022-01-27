import React from "react"
import "./searchbar.css"
function SearchBar() {
  return (
    <div className="searchbar">
      <input placeholder="Search..." />
      <div className="searchButtonContainer">
        <button className="searchButton">Search</button>
      </div>
    </div>
  )
}

export default SearchBar
