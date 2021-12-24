import axios from "axios";


export default class PositionService{

    getPosition(){
        return axios.get("http://localhost:8080/api/positions/getall")
    }
}