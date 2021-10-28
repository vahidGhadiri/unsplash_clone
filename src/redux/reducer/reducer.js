import {FETCH_IMAGES} from "../../config/types";

const initialState = {
    image: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_IMAGES:
            return {...state, image: [...state.image, action.data]}
        default :
            return state
    }
}