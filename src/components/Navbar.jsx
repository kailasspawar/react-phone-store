import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import {Button} from 'react-bootstrap'
import mobile from  '../../src/logo.svg'
//import axios from 'axios';
import '../App.css';

class Landing extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {
    const loginRegLink = (
      <>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </li>
        </ul>
      </>
    )

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            User
          </Link>
        </li>
        <li className="nav-item">
          <a href="#section" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    )

    return (
      <nav className="navbar navbar-expand-lg navbar-dark rounded bg-navbar">
        <Link to="/" className="nav-link">
        <img src={mobile} alt="logo" className="navbar-brand" /> 
        </Link>
        <Link to="/products" className="nav-link nav-item ml-2">
            Our Products
        </Link>
        <Link to="/add-product" className="nav-link nav-item ml-2">
          Add Product
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-end"
          id="navbarsExample10"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
        <Link to="/cart" className="ml-auto">
          <Button varient="primary">
            <span className="mr-2">
              <i className="fas fa-cart-plus " />
            </span>
            my cart
          </Button>
        </Link>
      </nav>
    )
  }
}

export default withRouter(Landing)