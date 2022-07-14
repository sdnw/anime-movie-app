import React from "react";

function Navbar({ search, setSearch }) {
  return (
    <div className="search">
      <input type="text" className="searchTerm" placeholder="Search by Name, Description or Genre!"
      onChange={(event) => setSearch(event.target.value)}/>
    </div>
  );
}

{/* <form className="d-flex input-group w-auto">
                     <input type="search" className="form-control" placeholder="Search Movie" aria-label="Search" />
                     <button className="btn btn-outline-primary" type="button" data-mdb-ripple-color="dark" onChange={(event) => setSearch(event.target.value)} value={search}>
                          Search
                     </button>
                 </form> */}

export default Navbar;