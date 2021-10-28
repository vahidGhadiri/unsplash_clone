import * as types from "../../config/types"

export const setImages = (images = []) => ({type: types.FETCH_IMAGES, data: images})
