import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Default from './components/Default'
import ProductList from './components/ProductList'
import Footer from './components/Footer'
import {connect} from 'react-redux'
import {setProducts, updateProduct} from './redux/actions/actions'
import ProductDetails from './components/ProductDetails'
import AddProduct from './components/product-crud/AddProduct'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import Cart from './components/cart/Cart';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar {...this.props}/>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/products" component={() => <ProductList products={this.props.products} handleAddToCart={(id) => this.handleAddToCart(id)}/>} />
            <Route exact path="/details" component={ProductDetails} />
            <Route exact path="/add-product" component={() => <AddProduct {...this.props}/>} />
            <Route exact path="/cart" component={() => <Cart setCartItem={this.setCartItem} clearIncart={this.clearIncart}/> }/>
            <Route component={Default} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }

  handleAddToCart = (id) => {
    this.setCartItem(id, true); 
    const token = localStorage.usertoken
    const decoded = jwt_decode(token) 
    axios.post('products/add-cart-item', {id: id, uid: decoded.id, total: 1}).then( response => {
      console.log("Added to cart sucessfully");
    }
    ).catch(err => {
      console.log(err)
    })
  }

  setCartItem = (id, inCart) => {
    const newData = this.props.products.map(
      product => {
        if (product.get('id') === id) {
          return product.set('inCart', inCart);
        }
        return product;
      }
    )
    this.props.setProducts(newData);
   } 
  clearIncart = () => {
    const newData = this.props.products.map(
        product => product.set('inCart', false)
    );
    this.props.setProducts(newData);
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
      products: state.get('products'),
      product: state.get('product')
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setProducts: (products) => dispatch(setProducts(products)),
    updateProduct : (field, value) => dispatch(updateProduct(field, value))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)