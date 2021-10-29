import axios from "axios"
import {BASE_URL} from "../config/urls";

const API_KEY = "rKC1_S6A_p-xtcBKq6aUjUDq8te2qbOStn1_SyP3zXs"

export const fetchImages = async (page) => {
    const url = `${BASE_URL}${API_KEY}&per_page=10&page=${page}`

    return new Promise((resolve, reject) => {
        axios.get(url, {headers: {"content-type": "application/json"}})
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

export const fetchImageStats = (id) => {
    const url = `${BASE_URL}/${id}/statistics${API_KEY}`

    return new Promise((resolve, reject) => {
        axios.get(url, {headers: {"content-type": "application/json"}})
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}