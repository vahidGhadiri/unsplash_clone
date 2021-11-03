import {IMAGES} from "../../config/types";

const initialState = {
    images: [],
    error: null,
    isLoading: false,
    page: 1
}

export const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case IMAGES.FETCH:
            return {...state, isLoading: true}
        case IMAGES.FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                images: [...state.images, ...action.data],
                page: state.page + 1
            }
        case IMAGES.FETCH_FAILED:
            return {...state, isLoading: false, error: action.data}
        default:
            return state
    }
}