import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Dashboard
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item ">
                <a className="nav-link" href="#">
                    <i className="bi bi-search m-2"></i>
                  Search
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  Account
                </a>
              </li>
              <li className="nav-item mx-2 rounded border">
                <a className="nav-link" href="#">
                    <i className="bi bi-logout"></i>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
