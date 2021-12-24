export const AUTHENTİCATED_EMPLOYER="AUTHENTİCATED_EMPLOYER"

export function authenticatedEmployerAction(employer){
    return{
        type:AUTHENTİCATED_EMPLOYER,
        payload:employer
    }
}