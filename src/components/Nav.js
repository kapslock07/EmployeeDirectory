import React from "react";

function Nav(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">Employee Directory</a>
      <form className="form-inline">
        <div className="form-group">
          <label htmlFor="search"></label>
          <input
            onChange={props.handleInputChange}
            value={props.value}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search For an Employee"
            id="search"
          />
          <br />
          <button onClick={props.handleFormSubmit} className="btn btn-primary">
            Search
        </button>
        </div>
      </form>
    </nav >
  );
}

export default Nav;
