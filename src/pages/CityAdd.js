import { Form, Formik } from 'formik'
import React from 'react'
import { toast } from 'react-toastify'
import { Button } from 'semantic-ui-react'
import * as Yup from "yup"
import CityService from '../services/CityService'
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput'
import { useState,useEffect} from "react"
export default function CityAdd() {

    const initialValue={
        cityName:""
    }

    const validationSchema=Yup.object({
        cityName:Yup.string().required("Girilmesi Zorunlu")
    })

    return (
        <div>
            <Formik initialValues={initialValue}
                    validationSchema={validationSchema}
                    onSubmit={(values)=>{
                        let cityValue=new CityService()
                        cityValue.postCity(values).then(result=>toast.success("Başarıyla Eklendi"))

                    }}
                    >
                <Form className="ui form">
                    <KodlamaIoTextInput name="cityName" placeholder="Şehir Adı"/>
                    <Button color="green" type="submit">Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
