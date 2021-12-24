import React from 'react'
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { useState } from 'react'
import CartSummary from './CartSummary'
import { useHistory } from 'react-router'
import { NavLink } from 'react-router-dom'
import { useSelector} from 'react-redux'
import { useEffect } from 'react'

export default function Navi() {
    
    const authenticatedEmployer = useSelector(state => state.employer)
    
    let stateAuthorize = authenticatedEmployer.authenticatedEmployer

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
       
        if (stateAuthorize[1]!= null) {
            setIsAuthenticated(false)
        } else { setIsAuthenticated(true) }
    }, [authenticatedEmployer])

    console.log(stateAuthorize)

 

    return (
        <div>
            <Menu inverted>
                <Container>
                    <Menu.Item as={NavLink} to="jobAdvertisements/add"
                        name='Ana Sayfa'

                    />
                    <Menu.Item
                        name='messages'

                    />


                    <Menu.Menu position='right'>
                        <CartSummary />


                        {
                            isAuthenticated ? <SignedIn authentication={authenticatedEmployer}/> : <SignedOut/>
                        }

                    </Menu.Menu>

                </Container>

            </Menu>
        </div>
    )
}
