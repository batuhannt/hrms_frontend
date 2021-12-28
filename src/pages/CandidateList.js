import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import CandidateService from '../services/CandidateService'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import { toast } from "react-toastify"
export default function CandidateList() {
    let candidateService= new CandidateService()
    console.log("nasılsın")

    const [candidates, setCandidates] = useState([])

    useEffect(() => {
       
        candidateService.getCandidate().then(result=>setCandidates(result.data.data))
        
    }, [])

    let deleteCandidate=(id)=>{
        candidateService.deleteCandidate(id).then(result=>{
            refreshPage()
            toast.success("Başarıyla silindi.")
        })
        
    }

    const refreshPage=()=>{
        
        candidateService.getCandidate().then(result=>setCandidates(result.data.data))
    }


    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Ad</Table.HeaderCell>
                        <Table.HeaderCell>Soyad</Table.HeaderCell>
                        <Table.HeaderCell>Email Adresi</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {

                        candidates.map(candidate => (

                            <Table.Row key={candidate.id}>
                                <Table.Cell><Link to={`/candidates/${candidate.firstName}`}>{candidate.firstName}</Link></Table.Cell>
                                <Table.Cell>{candidate.lastName}</Table.Cell>
                                <Table.Cell>{candidate.email}</Table.Cell>
                                <Table.Cell><Button as={NavLink} to={`/candidates/detail/${candidate.id}`}>Cv</Button></Table.Cell>
                                <Table.Cell><Button onClick={()=>deleteCandidate(candidate.id)}>Sil</Button></Table.Cell>
                            </Table.Row>

                        ))
                    }

                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='5'>
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
