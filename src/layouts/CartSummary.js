import React from 'react'
import { NavLink } from 'react-router-dom'
import { DropdownDivider, Dropdown, Menu } from 'semantic-ui-react'

export default function CartSummary() {
    return (
        <div>


            <Dropdown item text='Sepetiniz'>
                <Dropdown.Menu>
                    <Dropdown.Item>English</Dropdown.Item>
                    <Dropdown.Item>Russian</Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/employers">Sepetiniz</Dropdown.Item>
                    <DropdownDivider />
                </Dropdown.Menu>
            </Dropdown>



        </div>
    )
}
