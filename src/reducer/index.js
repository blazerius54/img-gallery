import { ADD_IMG, DELETE_IMG } from '../consts/index';

export function reducer(state = [], action) {
    switch (action.type) {
        case ADD_IMG:
            console.log(action)
            return state;
        default: return state;
    } 
}