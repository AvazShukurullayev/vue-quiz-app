import axios from "./axios.js";

const ServiceCategories = {
    getAll() {
        return axios.get("/all")
    },
    getById(id) {
        return axios.get(`${id}`)
    },
    create(data) {
        return axios.post("/create", data)
    },
    update(id, data) {
        return axios.put(`${id}`, data)
    },
    delete(id) {
        return axios.delete(`${id}`)
    },
    findByName(name) {
        return axios.get(`/search=${name}`)
    }
}

export default ServiceCategories