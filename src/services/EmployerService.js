import axios from "axios";

export default class EmployerService{
    getEmployer(){
        return axios.get("http://localhost:8080/api/employers/getall")
    }

    authentication(authentication){
        return axios.get("http://localhost:8080/api/employers/authentication?email="+authentication.email+"&password="+authentication.password)
    }

    removeEmployer(id){
        return axios.delete("http://localhost:8080/api/employers/deleteById?id="+id)
    }

    

    

}