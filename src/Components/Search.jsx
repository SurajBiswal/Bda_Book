import React from "react";
import "../StyleComponents/Search.css";
import { FaSearch, FaAngleDown } from "react-icons/fa";

function Search() {
  return (
    <div className="searchDrop">
      <div className="search">
        <div className="underSerch">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="search"></input>
        </div>

        <div class="dropdown">
          {/* <button class="dropbtn">Dropdown</button> */}
          <div className="dropbtn">
            <p>Sports arena</p>
            <FaAngleDown className="dropdown-icon" />
          </div>
          <div class="dropdown-content">
            <a href="#">Events</a>
            <a href="#">Parks</a>
            <a href="#">Others</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
