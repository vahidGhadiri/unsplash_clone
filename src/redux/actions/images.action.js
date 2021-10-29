import {IMAGES} from "../../config/types";


export const fetchImages = () => ({type: IMAGES.FETCH})

export const setImages = images => ({type: IMAGES.FETCH_SUCCESS, data: images})

export const setErr = error => ({type: IMAGES.FETCH_FAILED, data: error})