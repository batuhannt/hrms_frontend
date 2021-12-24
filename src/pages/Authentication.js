import React, { useState } from 'react'
import { Checkbox, FormField, Dropdown, Button } from 'semantic-ui-react'
import { Field, Form, Formik, useFormik } from 'formik'
import EmployerService from '../services/EmployerService'
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput'
import { useDispatch } from 'react-redux'
import { authenticatedEmployerAction } from '../store/actions/employerActions'
import { useHistory } from 'react-router'
import * as Yup from "yup"
import { toast } from "react-toastify"



export default function Authentication() {

   
    const history = useHistory()
    let employerService = new EmployerService()

    const dispatch = useDispatch()

    const [employersAuthentication, setEmployersAuthentication] = useState({})

    



    const initialValues = {
        email: "", password: ""
    }

    const validationSchema = Yup.object({
        
        email:Yup.string().required("Girilmesi Zorunlu"),
        password: Yup.string().required("Girilmesi Zorunlu"),
        

    })

    const authenticatedEmployers = (employersAuthentication) => {
        dispatch(authenticatedEmployerAction(employersAuthentication))
        
    }
    
   
    
   



    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {

                    const jobAdvertisement = {
                        email: values.email,
                        password: values.password
                    }

                    employerService.authentication(jobAdvertisement).then(result => {
                        
                        authenticatedEmployers(result.data.data)
                        
                        
                        if(result.data.data.length!=0){ history.push("/")}else{
                            toast.warn("Böyle bir işveren mevcut değil!")
                        }
                        
                       
                    })
               
                }}>
                {formik => (

                    <Form className="ui form">
                        <KodlamaIoTextInput name="email" placeholder="Email" />
                        <KodlamaIoTextInput name="password" placeholder="Şifre" />
                        <Button color="green" type="submit">Oturum Aç</Button>
                    </Form>
                )}

            </Formik>

        </div>
    )
}
