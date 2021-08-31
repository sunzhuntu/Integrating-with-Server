import axios from "axios"

const baseUrl = 'http://localhost:3001/api/products'

const getAll = () => {
    return axios.get(baseUrl)
            .then(response => response.data)
}

const create = (productObject) => {
    return axios.post(baseUrl, productObject)
            .then(response => response.data)
}

const update = (productObject) => {
    return axios.put(baseUrl+'/'+productObject.id, productObject)
                .then(response => response.data)
}

export default {getAll, create, update}




