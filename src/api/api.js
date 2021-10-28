import {BASE_URL} from "../config/urls"

const ACCESS_KEY = "rKC1_S6A_p-xtcBKq6aUjUDq8te2qbOStn1_SyP3zXs"
const SECRET_KEY = "24fVau8ab6XexfOqeAvttVi8qfDaFY2zXjHLSx43F9s"


export const fetchImages = async (page) => {
    const response = await fetch(`${BASE_URL}${ACCESS_KEY}$per_page=3&page=${page}`)
    const data = await response.json()
    if (response.status >= 400) throw new Error(data.errors)

    return data
}

export const fetchImageStats = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}/statistics${ACCESS_KEY}`)
    const data = await response.json()
    if (response.status >= 400) throw new Error(data.errors)

    return data
}