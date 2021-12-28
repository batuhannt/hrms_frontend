import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { toast } from 'react-toastify'
import * as Yup from "yup"
import { FormField, Button, Label } from 'semantic-ui-react'
import CandidateService from '../services/CandidateService'
import { useState, useEffect } from 'react'
import EducationService from '../services/EducationService'
import JobExperienceService from '../services/JobExperienceService'
import ForeignLanguageService from '../services/ForeignLanguage'
import ProgrammingLanguageService from '../services/ProgrammingLanguageService'


export default function CandidateAdd() {

    const candidateService = new CandidateService()
    const jobExperienceService=new JobExperienceService()
    const educationService = new EducationService()
    const foreignLanguageService=new ForeignLanguageService()
    const programmingLanguageService=new ProgrammingLanguageService()

    const [candidates, setCandidates] = useState({})

    const initialValues = { firstName: "", lastName: "", identityNumber: "", email: "",
     password: "" ,educationDepartment:"",schoolName:"",firmName:"",position:"",languageName:"",level:"",programmingLanguage:"",programmingLevel:""}


    const validationSchema = Yup.object({
        firstName: Yup.string().required("Girilmesi zorunlu"),
        lastName:Yup.string().required("Girilmesi zorunludur"),
        identityNumber:Yup.number().required("Girilmesi zorunludur"),
        email:Yup.string().required("Girilmesi zorunludur"),
        password:Yup.string().required("Girilmesi zorunludur"),
        educationDepartment:Yup.string().required("Girilmesi zorunludur"),
        schoolName:Yup.string().required("Girilmesi zorunludur"),
        firmName:Yup.string().required("Girilmesi zorunludur"),
        position:Yup.string().required("Girilmesi zorunludur"),
        languageName:Yup.string().required("Girilmesi zorunludur"),
        level:Yup.number().required("Girilmesi zorunludur"),
        programmingLanguage:Yup.string().required("Girilmesi zorunludur"),
        programmingLevel:Yup.number().required("Girilmesi zorunludur")


    })

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    let candidate = {
                        password: values.password,
                        firstName: values.firstName,
                        lastName: values.lastName,
                        identityNumber: parseInt(values.identityNumber, 10),
                        email: values.email
                    }
                    
                    candidateService.postCandidate(candidate).then(result => {
                        if(result.data.success){
                            candidateService.getCandidate().then(response => {
                            
                                let id
                                response.data.data.forEach(element => {
                                    
                                    id = element.id
                                });
                                let education={
                                    educationDepartment:values.educationDepartment,
                                    schoolName:values.schoolName,
                                    candidate:{id:id}
                                }
                                educationService.postEducation(education)
    
                                let jobExperience={
                                    firmName:values.firmName,
                                    position:values.position,
                                    candidate:{id:id}
                                }
                                jobExperienceService.postJobExperience(jobExperience)
    
                                let foreignLanguage={
                                    languageName:values.languageName,
                                    level: parseInt(values.level, 10),
                                    candidate:{id:id}
                                }
                                foreignLanguageService.postForeignLanguage(foreignLanguage)
    
                                let programmingLanguage={
                                    name:values.programmingLanguage,
                                    level:parseInt(values.programmingLevel, 10),
                                    candidate:{id:id}
                                }
                                programmingLanguageService.postProgrammingLanguage(programmingLanguage)
    
                                
    
                            })
                            toast.success("Başarıyla Eklendi.")
                        }else{ toast.error(result.data.message)}
                        

                    })
                }}>
                <Form className="ui form">
                    <FormField><Label size='big' circular >Aday Bilgileri</Label></FormField>

                    <FormField>
                        <Field name="firstName" placeholder="Ad"></Field>
                        <ErrorMessage name='firstName' render={error=>(
                            <Label pointing basic color='red' content={error}></Label>
                        )}></ErrorMessage>
                    </FormField>
                    <FormField>
                        <Field name="lastName" placeholder="Soyad"></Field>
                    </FormField>
                    <FormField>
                        <Field name="email" placeholder="Email"></Field>
                    </FormField>
                    <FormField>
                        <Field name="password" placeholder="Şifre"></Field>
                    </FormField>
                    <FormField>
                        <Field name="identityNumber" placeholder="Kimlik Numarası"></Field>
                    </FormField>
                    <FormField><Label size='big' circular >Eğitim Bilgileri</Label></FormField>
                    <FormField>
                        <Field name="educationDepartment" placeholder="Eğitim Bölümü"></Field>
                    </FormField>
                    <FormField>
                        <Field name="schoolName" placeholder="Okul Adı"></Field>
                    </FormField>
                    <FormField><Label size='big' circular >İş Tecrübeleri</Label></FormField>
                    <FormField>
                        <Field name="firmName" placeholder="Firma Adı"></Field>
                    </FormField>
                    <FormField>
                        <Field name="position" placeholder="Pozisyon"></Field>
                    </FormField>
                    <FormField><Label size='big' circular >Yabancı Diller</Label></FormField>
                    <FormField>
                        <Field name="languageName" placeholder="Yabancı Dil"></Field>
                    </FormField>
                    <FormField>
                        <Field name="level" placeholder="Seviye"></Field>
                    </FormField>
                    <FormField><Label size='big' circular >Programlama Dilleri</Label></FormField>
                    <FormField>
                        <Field name="programmingLanguage" placeholder="Programlama Dili"></Field>
                    </FormField>
                    <FormField>
                        <Field name="programmingLevel" placeholder="Seviye"></Field>
                    </FormField>
                    <Button type="submit">Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
