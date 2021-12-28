import axios from "axios";


export default class JobExperienceService{
    getJobExperience(){
        axios.get("http://localhost:8080/api/jobExperiences/getall")
    }

    postJobExperience(jobExperience){
        axios.post("http://localhost:8080/api/jobExperiences/add",jobExperience)
    }
}