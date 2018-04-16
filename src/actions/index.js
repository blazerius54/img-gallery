import { ADD_IMG, DELETE_IMG } from '../consts/index';

export const addImg = () => {
    const action = {
        type: ADD_IMG,
    }
    console.log(action)
    return action
}