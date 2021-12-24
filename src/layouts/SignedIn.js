import React from 'react'
import { Dropdown, DropdownItem, DropdownMenu, Form, Image, Label, Menu, MenuItem } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { authenticatedEmployerAction } from '../store/actions/employerActions'

export default function SignedIn(props) {

    const dispatch = useDispatch()

    const sendToReducer=()=>{
        dispatch(authenticatedEmployerAction([]))
    }
    
    

    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src={props.authentication.authenticatedEmployer[0].employer[0].image} />
                <Dropdown pointing="top left" text={props.authentication.authenticatedEmployer[0].employer[0].companyName}>
                    <DropdownMenu>
                        <DropdownItem text="Bilgilerim" icon="info" />
                        <DropdownItem onClick={()=>sendToReducer([])} text="Çıkış Yap" icon="sign-out" />


                    </DropdownMenu>
                </Dropdown>


            </Menu.Item>

        </div>
    )
}
