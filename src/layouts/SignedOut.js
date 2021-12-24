import React from 'react'
import { Button, MenuItem } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

export default function SignedOut(props) {
    return (
        <div>
            <MenuItem>
                <Button primary  as={NavLink} to="/authentication" >Giriş Yap</Button>
                <Button primary onClick={props.signedIn} style={{marginLeft:"0.5em"}}>Kayıt Ol</Button>

            </MenuItem>


        </div>
    )
}
