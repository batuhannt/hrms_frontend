import axios from "axios";


export default class ForeignLanguageService{

    getForeignLanguage(){
        axios.get("http://localhost:8080/api/foreignLanguages/getall")
    }

    postForeignLanguage(foreignLanguage){
        axios.post("http://localhost:8080/api/foreignLanguages/add",foreignLanguage)
    }
}