import * as Constants from '../constants/constants';
import Immutable  from 'immutable';

export const reducer = (state = Constants.initialState, action) => {
    let newState = {...state};
    switch (action.type) {
        case Constants.SET_PRODUCTS :
            newState = state.set('products', Immutable.fromJS(action.value));
            return newState;
        case Constants.UPDATE_PRODUCT :
            let product = state.get('product').set(action.field, action.value);
            newState = state.set('product', product);
            return newState;
        case Constants.SET_PRODUCT :
            newState = state.set('product', action.value);
            return newState
        default: 
            return state;
    }
}