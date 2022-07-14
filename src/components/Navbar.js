import React from "react";

function Navbar({ search, setSearch }) {
  return (
    <div className="search">
      <input type="text" className="searchTerm" placeholder="Search by Name, Description or Genre!"
      onChange={(event) => setSearch(event.target.value)}/>
    </div>
  );
}

export default Navbar;