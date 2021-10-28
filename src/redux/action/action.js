import * as types from "../../config/types"


export const setImages = (images = []) => ({type: types.LOAD_IMAGES, data: images})

export const setIsLoading = (isLoading = false) => ({type: types.IS_LOADING, payload: isLoading})

export const error = () => (error) => ({type: types.ERROR, payload: error})

export const imageStats = (stats = {}) => ({type: types.ERROR, payload: stats})