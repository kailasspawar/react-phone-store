import React, { Component } from 'react'

class Landing extends Component {
  render() {
    return (
      <>
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-12 mx-auto">
            <h2 className="text-title">Our Store</h2>
            <p>Please visit our products to buy....</p>
            <div className="row">
              <div className="col-sm-3">
                <img src="/mobiles.jpg" alt="" className="img-container side-images"/>
              </div>
              <div className="col-sm-6">
                <img src="/store.jpg" alt="" className="img-container"/>
              </div>
              <div className="col-sm-3">
                <img src="/redmi.png" alt="" className="img-container side-images"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default Landing