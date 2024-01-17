import axios from "axios";

export default axios.create({
    baseURL: "http://192.168.8.245:8080/api/category",
    headers: {
        "Content-type": "application/json"
    }
});