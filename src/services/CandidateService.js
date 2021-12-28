import axios from "axios";

export default class CandidateService{

    getCandidate(){
        return axios.get("http://localhost:8080/api/candidates/getall")
    }

    postCandidate(candidates){
        return axios.post("http://localhost:8080/api/candidates/add",candidates)
    }
    getCandidateByCv(id){
        return axios.get("http://localhost:8080/api/candidates/getByCandidateId?candidateId="+id)
    }

    deleteCandidate(id){
        return axios.delete("http://localhost:8080/api/candidates/deleteByCandidateId?candidateId="+id)
    }
}