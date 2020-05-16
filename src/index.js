import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import env from 'get-env'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import {createStore, applyMiddleware, compose} from 'redux'
import {reducer} from './redux/reducers/reducers'
import * as Actions from './redux/actions/actions'
import axios from 'axios'

const store = createProductStore(reducer); 

function createProductStore (reducer)  {
  const composeEnhancers = env() === 'dev' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;

  return createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
}

//store.dispatch(Actions.updateProduct('title', ''));

axios.get('products/get-products').then(
    res => {
      store.dispatch(Actions.setProducts(res.data));   
    }
  ).catch(
    err => console.log(err)
  )

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
