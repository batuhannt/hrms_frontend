import axios from "axios";


export default class JobAdvertisementService{

    getJobAdvertisement(){
        
        return axios.get("http://localhost:8080/api/jobAdvertisements/getall")
    }

    postJobAdvertisement(jobAdvertisement){
        return axios.post("http://localhost:8080/api/jobAdvertisements/add",jobAdvertisement)
    }

    removeJobAdvertisement(id){
        return axios.delete("http://localhost:8080/api/jobAdvertisements/remove?id="+id)
    }
   
}