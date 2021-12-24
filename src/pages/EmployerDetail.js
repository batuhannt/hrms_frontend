import React from 'react'
import { useParams } from 'react-router'
import { Button, Card, Image } from 'semantic-ui-react'
import { useEffect, useState } from 'react'
import EmployerService from '../services/EmployerService'

export default function EmployerDetail() {
    let {name}=useParams()
    const [employer, setEmployer] = useState([])

    useEffect(() => {

        let employerService = new EmployerService()
        employerService.getEmployer(name).then(result => setEmployer(result.data.data))

    },[])
    return (
        <div>
            
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                        />
                        <Card.Header>{employer.companyName}</Card.Header>
                        <Card.Meta>Friends of Elliot</Card.Meta>
                        <Card.Description>
                            Steve wants to add you to the group <strong></strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
                
            </Card.Group>

        </div>
    )
}
