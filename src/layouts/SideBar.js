import React from 'react'
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import '../App.css';
import { useSelector} from 'react-redux'

export default function SideBar() {
    
    const authenticatedEmployer = useSelector(state => state.employer)

    let stateAuthorize = authenticatedEmployer.authenticatedEmployer
 


    return (
        <div>
            <Menu pointing vertical className="Menu">
                <Menu.Item as={NavLink} to="/employers"
                    name='Employer'
                    
                />
                <Menu.Item as={NavLink} to="/jobAdvertisements"
                    name='İş İlanları'
                    
                />
                {stateAuthorize[1]== null&&<Menu.Item as={NavLink} to="/jobAdvertisements/add" name='İş İlanı Ekle' />}

                <Menu.Item as={NavLink} to="/cities/add"
                    name="Şehir Ekle"
                    
                />
                <Menu.Item as={NavLink} to="/candidates"
                    name='Aday Listesi'
                    
                />
            </Menu>
        </div>
    )
}
