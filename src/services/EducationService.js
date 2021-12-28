import axios from "axios";

export default class EducationService{
    getEducation(){
        axios.get("http://localhost:8080/api/educations/getall")
    }

    postEducation(education){
        axios.post("http://localhost:8080/api/educations/add",education)
    }
}