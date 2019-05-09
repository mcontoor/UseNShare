import {FETCH_PRODUCTS, NEW_PRODUCTS } from '../Actions/type';

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        default:
        return state;
    }
} 