
import React from 'react'
import { Icon, Label, Menu, Table, Button } from 'semantic-ui-react'
import { useState, useEffect } from "react"
import JobPostingStaffValidationService from '../services/JobPostingStaffValidationService'
import { toast } from "react-toastify"

export default function JobPostingStaffValidationList() {
    let jobPostingStaffValidationService = new JobPostingStaffValidationService()
    const [jobPostingStaffValidations, setJobPostingStaffValidations] = useState([])
    useEffect(() => {
        
        jobPostingStaffValidationService.getJobPostingStaffValidation().then(result => setJobPostingStaffValidations(result.data.data))

    }, [])

    let validate=(id)=>{
        jobPostingStaffValidationService.verifyJobPosting(id).then(result=>refreshPage())
        toast.success("İş ilanı onaylandı.")
    }

    const refreshPage=()=>{
        
        jobPostingStaffValidationService.getJobPostingStaffValidation().then(result => setJobPostingStaffValidations(result.data.data))
    }

    console.log(jobPostingStaffValidations)

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Onay ID</Table.HeaderCell>
                        <Table.HeaderCell>Onaylandı mı</Table.HeaderCell>
                        <Table.HeaderCell>Onaylandığı Tarih</Table.HeaderCell>
                        <Table.HeaderCell>İş İlanı ID</Table.HeaderCell>
                        <Table.HeaderCell>İş İlanı Veren Şirket</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>

                        


                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobPostingStaffValidations.map(jobPostingStaffValidation => (
                            <Table.Row key={jobPostingStaffValidation.id}>
                                <Table.Cell>{jobPostingStaffValidation.id}</Table.Cell>
                                <Table.Cell>{jobPostingStaffValidation.isVerified}</Table.Cell>
                                <Table.Cell>{jobPostingStaffValidation.verifiedAt}</Table.Cell>
                                <Table.Cell>{jobPostingStaffValidation.jobAdvertisement&&jobPostingStaffValidation.jobAdvertisement.id}</Table.Cell>
                                <Table.Cell>{jobPostingStaffValidation.jobAdvertisement&&jobPostingStaffValidation.jobAdvertisement.employer.companyName}</Table.Cell>
                                <Table.Cell><Button primary onClick={()=>validate(jobPostingStaffValidation.id) }>Onayla</Button></Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='6'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
