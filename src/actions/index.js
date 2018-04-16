import { ADD_IMG, DELETE_IMG } from '../consts/index';

export const addImg = (title, src) => {
    const action = {
        type: ADD_IMG,
        payload: {
            title,
            src
        }
    }
    console.log(action)
    return action

}
export const deleteImg = (index) => {
    const action = {
        type: DELETE_IMG,
        index
    }
    return action
}