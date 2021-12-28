import React from 'react'
import { useField } from "formik"
import { FormField, Label } from 'semantic-ui-react'

export default function KodlamaIoTextInput({ ...props }) {
    const [fields, meta] = useField(props)
    console.log(meta)
    return (

        <FormField error={!!meta.error && meta.touched}>
            <input {...fields} {...props} />
            {!!meta.error && meta.touched ?
                <Label basic color="red" pointing content={meta.error}></Label> : null}

        </FormField>

    )
}
