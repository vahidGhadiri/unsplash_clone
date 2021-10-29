import {combineReducers} from "redux";
import {imagesReducer as images} from "./images.reducer";

export const rootReducer = combineReducers({
    images
})