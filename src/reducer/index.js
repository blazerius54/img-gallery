import { ADD_IMG, DELETE_IMG } from '../consts/index';

export function reducer(state = [], action) {
    switch (action.type) {
        case ADD_IMG: 
        return {
            ...state,
            images: [...state.images, action.payload ]
        }
        case DELETE_IMG:
            return {
                ...state,
                images: [
                    ...state.images.slice(0, action.index),
                    ...state.images.slice(action.index+1),
                ]
            }
            return state;
        default: return state;
    } 
}