import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.music.estrelatest.ru',
    withCredentials: true,
    headers: {
        accept: 'application/json',
    },
})

export default instance