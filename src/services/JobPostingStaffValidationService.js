import axios from "axios";

export default class JobPostingStaffValidationService{

    getJobPostingStaffValidation(){
        return axios.get("http://localhost:8080/api/JobPostingStaffValidation/getAllStagingValidation")
    }
    verifyJobPosting(id){
        return axios.get("http://localhost:8080/api/JobPostingStaffValidation/verifyJobPosting?id="+id)
    }
}