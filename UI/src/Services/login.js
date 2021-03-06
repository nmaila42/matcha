import axios from 'axios'

const api = axios.create({baseURL: 'http://localhost:5000'})

const postLogin =  (success, error, data) => {
    api.post('/login', data)
    .then(success)
    .catch(error)
}

export default postLogin