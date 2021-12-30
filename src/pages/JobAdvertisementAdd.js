import { Field, Form, Formik, useFormik } from 'formik'
import { React, useState, useEffect } from 'react'
import * as Yup from "yup"
import { Checkbox, FormField, Dropdown, Button } from 'semantic-ui-react'
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput'
import JobAdvertisementService from '../services/JobAdversitementService'
import { toast } from 'react-toastify'
import CityService from '../services/CityService'
import PositionService from '../services/PositionService'



export default function JobAdvertisementAdd() {

    const jobAdvertisementService = new JobAdvertisementService()


    const [cities, setCities] = useState([])

    const [positions, setPositions] = useState([])


    useEffect(() => {
        const citiesService = new CityService()
        citiesService.getCity().then(result => setCities(result.data.data))
        const positionsService = new PositionService()
        positionsService.getPosition().then(result => setPositions(result.data.data))
    }, [])



    const initialValues = {
        createDate: "", expirationDate: "", maxSalary: "", minSalary: "",
        openPositionAmount: "", employer: "", positionId: 1, cityId: 1
    }
    const validationSchema = Yup.object({
        createDate: Yup.date().required("Girilmesi Zorunlu"),
        expirationDate: Yup.date().required("Girilmesi Zorunlu"),
        maxSalary: Yup.number().required("Girilmesi Zorunlu"),
        minSalary: Yup.number().required("Girilmesi Zorunlu"),
        openPositionAmount: Yup.number().required("Girilmesi Zorunlu"),

        companyName: Yup.string().required("Girilmesi Zorunlu"),


    })

    return (
        <div>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {

                    const jobAdvertisement = {
                        city: { id: parseInt(values.cityId, 10) },
                        createDate: values.createDate,
                        expirationDate: values.expirationDate,
                        maxSalary: parseInt(values.maxSalary, 10),
                        minSalary: parseInt(values.minSalary, 10),
                        openPositionAmount: parseInt(values.openPositionAmount, 10),
                        employer: { id: 9 },
                        positions: { id: parseInt(values.positionId, 10) }
                    }
                    jobAdvertisementService.postJobAdvertisement(jobAdvertisement).then(result => toast.success("Başarıyla Eklendi"))
                    console.log(jobAdvertisement)

                }}>
                {formik => (

                    <Form className="ui form">
                        <FormField name="cityId" control="select" onChange={formik.handleChange}>
                            {cities.map(city => (<option key={city.id} value={city.id}>{city.cityName}</option>))}
                        </FormField>

                        <KodlamaIoTextInput name="createDate" placeholder="Oluşturma Tarihi(YYYY-AA-GG)" />
                        <KodlamaIoTextInput name="expirationDate" placeholder="Bitiş Tarihi(YYYY-AA-GG)" />
                        <KodlamaIoTextInput name="maxSalary" placeholder="Maximum Maaş" />

                        <KodlamaIoTextInput style={{ marginTop: "1em" }} name="minSalary" placeholder="Minimum Maaş" />
                        <KodlamaIoTextInput name="openPositionAmount" placeholder="Açık Poziyon Miktarı" />

                        <KodlamaIoTextInput name="companyName" placeholder="Şirket Adı" />
                        <FormField name="positionId" control="select" onChange={formik.handleChange}>
                            {positions.map(position => (<option key={position.id} value={position.id}>{position.position}</option>))}
                        </FormField>

                        <Button color="green" type="submit">Ekle</Button>
                    </Form>
                )}

            </Formik>

        </div >
    )
}
