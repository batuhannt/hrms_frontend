import axios from "axios";

export default class CityService{

    getCity(){
        return axios.get("http://localhost:8080/api/cities/getall")
    }

    postCity(city){
        return axios.post("http://localhost:8080/api/cities/add",city)
    }
}