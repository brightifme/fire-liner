import { ADD_LINER_REQUEST, ADD_LINERS_REQUEST, ADD_AUTHORS_REQUEST } from './constants';

export const fetchLinersRequest = data => {
    return {
        type: ADD_LINERS_REQUEST,
        data
    }
}

export const fetchAuthorsRequest = () => {
    return {
        type: ADD_AUTHORS_REQUEST
    }
}

export const addLiner = data => {
    return {
        type: ADD_LINER_REQUEST,
        data
    }
}
