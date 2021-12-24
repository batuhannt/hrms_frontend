import { AUTHENTİCATED_EMPLOYER } from "../actions/employerActions";
import { authenticatedEmployer } from "../initialValues/AuthenticatedEmployer";

export const initialState={
    authenticatedEmployer:authenticatedEmployer
}

export default function employerReducer(state=initialState,{type,payload}){

    switch (type) {
        case AUTHENTİCATED_EMPLOYER:
            if(payload[0]!=null){
                
                return{
                    ...state,
                    authenticatedEmployer:[{employer: payload}]
                }
            }
           
    
        default:
            return{
                ...state,
                authenticatedEmployer:[{employer: [{companyName:""}]},{}]
                
            }
            
    }

}