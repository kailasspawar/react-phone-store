import * as Constants from '../constants/constants';

export function setProducts(products) {
    return {
        type: Constants.SET_PRODUCTS,
        value: products
    };
}

export function updateProduct(field, value) {
    return {
        type: Constants.UPDATE_PRODUCT,
        field: field,
        value: value
    };
}

export function setProduct(product) {
    return {
        type: Constants.SET_PRODUCT,
        value: product
    };
}