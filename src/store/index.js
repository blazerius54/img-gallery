import { createStore } from 'redux';
import { reducer } from '../reducer/index';
import images from '../data/index';

const defaultState = {
    images
};

const store = createStore(reducer, defaultState);
export default store;