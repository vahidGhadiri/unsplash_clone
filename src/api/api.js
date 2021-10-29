import axios from "axios"
import {BASE_URL} from "../config/urls";

// const ACCESS_KEY = "rKC1_S6A_p-xtcBKq6aUjUDq8te2qbOStn1_SyP3zXs"
// const SECRET_KEY = "24fVau8ab6XexfOqeAvttVi8qfDaFY2zXjHLSx43F9s"

const API_KEY = "rKC1_S6A_p-xtcBKq6aUjUDq8te2qbOStn1_SyP3zXs"

export const fetchImages = async (page) => {
    const url = `${BASE_URL}${API_KEY}`

    return new Promise((resolve, reject) => {
        axios.get(url, {headers: {"content-type": "application/json"}})
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

export const fetchImageStats = (id) => {
    const url = `${BASE_URL}/${10}/statistics${API_KEY}`

    return new Promise((resolve, reject) => {
        axios.get(url, {headers: {"content-type": "application/json"}})
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}