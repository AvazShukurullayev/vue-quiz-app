import http from "../http-common"
const CATEGOrY_BASE_URL = 'http://localhost:8080/api/category'
class CategoryService{
    getAll(){
        return http.get("/all");
    }
    getById(id){
        return http.get(`${id}`);
    }
    create(data){
        return http.post("/create",data);
    }
    update(id,data){
        return http.put(`${id}`,data);
    }
    delete(id){
        return http.delete(`${id}`);
    }
    findByName(name){
        return http.get(`/search=${name}`);
    }
}

export default new CategoryService();