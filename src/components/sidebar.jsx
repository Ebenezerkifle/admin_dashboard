import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";
import React, { Component } from "react";

class Sidebar extends Component {
  state = {
    active: 0,
  };

  setActive = (active) => {
    this.setState({ active });
  };
  render() {
    return (
      <div className="d-flex sidebar justify-content-between flex-column bg-dark text-white py-3 ps-3 pe-3 vh-100">
        <div>
          {/* <img src={require("../assets/logo.png")} alt="logo" className="m-3" /> */}
          <div>
            <i className="bi bi-alipay m-2 fs-2"></i>
            <span className="fs-2">Fresh Delivery</span>
          </div>
          <hr className="text secondary fs-3" />
          <ul className="nav nav-pills flex-column mt-3">
            <li
              className={
                this.state.active === 1 ? "active nav-item p-2" : "nav-item p-1"
              }
              onClick={(e) => this.setActive(1)}
            >
              <i className="bi bi-speedometer me-3 fs-5"></i>
              <span>Dashboard</span>
            </li>
            <li
              className={
                this.state.active === 2 ? "active nav-item p-2" : "nav-item p-1"
              }
              onClick={(e) => this.setActive(2)}
            >
              <i className="bi bi-people me-3 fs-5"></i>
              <span>Users</span>
            </li>
            <li
              className={
                this.state.active === 3 ? "active nav-item p-2" : "nav-item p-1"
              }
              onClick={(e) => this.setActive(3)}
            >
              <i className="bi bi-table me-3 fs-5"></i>
              <span>Orders</span>
            </li>
            <li
              className={
                this.state.active === 4 ? "active nav-item p-2" : "nav-item p-1"
              }
              onClick={(e) => this.setActive(4)}
            >
              <a>
                <i className="bi bi-grid me-3 fs-5"></i>
                <span>Reports</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <hr className="text-white" />
          <div className=" ">
            <i className="bi bi-person-circle me-3 fs-5"></i>
            <span>Abeniezer</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
