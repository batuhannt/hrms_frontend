import { useState,useEffect} from "react"
import React from 'react'
import JobAdvertisementService from "../services/JobAdversitementService"
import { Icon, Label, Menu, Table,Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { toast } from "react-toastify"

export default function JobAdvertisementList() {

    let jobAdvertisementService =new JobAdvertisementService()

    const [jobAdvertisements, setJobAdvertisements] = useState([])

    console.log("Dış")
    

    useEffect(() => {
        
        jobAdvertisementService.getJobAdvertisement().then(result=>setJobAdvertisements(result.data.data))
        console.log("İç")
   
    }, [])

    const handleRemove=(jobAdvertisement)=>{
        
        jobAdvertisementService.removeJobAdvertisement(jobAdvertisement.id).then(result=>refreshPage())
        
        toast.success("Başarıyla Silindi.")
        
    }

    const refreshPage=()=>{
        
        jobAdvertisementService.getJobAdvertisement().then(result=>setJobAdvertisements(result.data.data))
    }
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Oluşturma Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Bitiş Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Maximum Maaş</Table.HeaderCell>
                        <Table.HeaderCell>Minimum Maaş</Table.HeaderCell>
                        <Table.HeaderCell>Açık Pozisyon Miktarı</Table.HeaderCell>
                        <Table.HeaderCell>Şehir Adı</Table.HeaderCell>
                        <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                        <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>


                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {

                        jobAdvertisements.map(jobAdvertisement => (

                            <Table.Row key={jobAdvertisement.id}>
                                <Table.Cell><Link to={`/jobAdvertisements/${jobAdvertisement.createDate}`}>{jobAdvertisement.createDate}</Link></Table.Cell>
                                <Table.Cell>{jobAdvertisement.expirationDate}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.maxSalary}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.minSalary}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.openPositionAmount}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.city.cityName}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.positions.position}</Table.Cell>
                                <Table.Cell><Button onClick={()=>handleRemove(jobAdvertisement)} color="yellow">Sil</Button></Table.Cell>

                            </Table.Row>

                        ))
                    }

                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
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
