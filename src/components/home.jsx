import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="p-3 bg-light">
        <div className="container-fluid">
          <div className="row">
            <div
              className="
            col-12 col-sm-6 col-md-4 col-lg-3 p-3 
            bg-light"
            >
              <div
                className="d-flex justify-content-around py-4 px2 align-items-center 
                bg-white border border-secondary shadow-sm"
              >
                <i className="bi bi-currency-dollar fs-1 text-success"></i>
                <div>
                  <span>Sales</span>
                  <h2>243</h2>
                </div>
              </div>
            </div>
            <div
              className="
            col-12 col-sm-6 col-md-4 col-lg-3 p-3 
            bg-light"
            >
              <div
                className="d-flex justify-content-around py-4 px2 align-items-center 
                bg-white border border-secondary shadow-sm"
              >
                <i className="bi bi-truck fs-1 text-primary"></i>
                <div>
                  <span>Delivery</span>
                  <h2>243</h2>
                </div>
              </div>
            </div>
            <div
              className="
            col-12 col-sm-6 col-md-4 col-lg-3 p-3 
            bg-light"
            >
              <div
                className="d-flex justify-content-around py-4 px2 align-items-center 
                bg-white border border-secondary shadow-sm"
              >
                <i className="bi bi-graph-up-arrow fs-1 text-danger"></i>
                <div>
                  <span>Increase</span>
                  <h2>20%</h2>
                </div>
              </div>
            </div>
            <div
              className="
            col-12 col-sm-6 col-md-4 col-lg-3 p-3 
            bg-light"
            >
              <div
                className="d-flex justify-content-around py-4 px2 align-items-center 
                bg-white border border-secondary shadow-sm"
              >
                <i className="bi bi-truck fs-1 text-warning"></i>
                <div>
                  <span>Delivery</span>
                  <h2>243</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
