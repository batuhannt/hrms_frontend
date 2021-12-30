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
                <Menu.Item as={NavLink} to="/employers">İş Verenler</Menu.Item>

                <Menu.Item as={NavLink} to="/jobAdvertisements">İş İlanları</Menu.Item>

                {stateAuthorize[1]== null&&<Menu.Item as={NavLink} to="/jobAdvertisements/add">İş İlanı Ekle</Menu.Item>}

                
                  
                <Menu.Item as={NavLink} to="/candidates">Adaylar</Menu.Item>
                    
                <Menu.Item as={NavLink} to="/candidates/add" >Aday Ekle</Menu.Item>
                {stateAuthorize[1]== null&&<Menu.Item as={NavLink} to="/jobPostingStaffValidation" >Bekleyen İş İlanları</Menu.Item>}
                
            </Menu>
        </div>
    )
}
