import Immutable from 'immutable';

export const SET_PRODUCTS = 'SET_PRODUCTS';
export const UPDATE_PRODUCT = 'ADD_PRODUCT';
export const SET_PRODUCT = 'SET_PRODUCT';

export const initialState = Immutable.fromJS({
    products : Immutable.List(),
    product : Immutable.fromJS({
        title : '',
        price: 0,
        company: '',
        info: '',
        inCart: false,
        img: ''
    })
});
