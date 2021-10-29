import {IMAGES} from "../../config/types";

const initialState = {
    images: [],
    error: null,
    isLoading: false
}

export const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case IMAGES.FETCH:
            return {...state, isLoading: true}
        case IMAGES.FETCH_SUCCESS:
            return {...state, isLoading: false, images: action.data}
        case IMAGES.FETCH_FAILED:
            return {...state, isLoading: false}
        default:
            return state
    }
}