import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon, Label, Menu, Table } from 'semantic-ui-react'
import EmployerService from '../services/EmployerService'
import { toast } from "react-toastify"
export default function EmployerList() {

    let employerService=new EmployerService()

    const [employers, setEmployers] = useState([])

    useEffect(() => {
        
        let employerService = new EmployerService()
        employerService.getEmployer().then(result => setEmployers(result.data.data))
        console.log("İÇ")
        
    },[])
    console.log("DIŞ")
    const handleRemove=(employer)=>{
        
        employerService.removeEmployer(employer.id).then(result=>refreshPage())
        
        toast.success("Başarıyla Silindi.")
        
    }

    const refreshPage=()=>{
        
        employerService.getEmployer().then(result=>setEmployers(result.data.data))
    }

    

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Company Name</Table.HeaderCell>
                        <Table.HeaderCell>Web Adress</Table.HeaderCell>
                        <Table.HeaderCell>Phone Number</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {

                        employers.map(employer => (

                            <Table.Row key={employer.id}>
                                <Table.Cell><Link to={`/employers/${employer.companyName}`}>{employer.companyName}</Link></Table.Cell>
                                <Table.Cell>{employer.webAdress}</Table.Cell>
                                <Table.Cell>{employer.phoneNumber}</Table.Cell>
                                <Table.Cell><Button onClick={()=>handleRemove(employer)} color="yellow">Sil</Button></Table.Cell>
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
