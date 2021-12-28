import axios from "axios";


export  default class ProgrammingLanguageService{

    getProgrammingLanguage(){
        axios.get("http://localhost:8080/api/programmingLanguages/getall")
    }

    postProgrammingLanguage(programmingLanguage){
        axios.post("http://localhost:8080/api/programmingLanguages/add",programmingLanguage)
    }
}