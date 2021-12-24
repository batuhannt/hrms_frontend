import React from 'react'
import CityService from '../services/CityService'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function CityList() {

    const [cities, setCities] = useState([])

    useEffect(() => {
        const cityService = new CityService()
        cityService.getCity().then(result => setCities(result.data.data))
    }, [])

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Şehir Numarası</Table.HeaderCell>
                        <Table.HeaderCell>Şehir Adı</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {

                        cities.map(city => (

                            <Table.Row key={city.id}>
                                <Table.Cell>{city.id}</Table.Cell>
                                <Table.Cell><Link to={`/cities/${city.cityName}`}>{city.cityName}</Link></Table.Cell>


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
