import React from 'react'
import { Route } from 'react-router'
import { Container, Grid, GridColumn, GridRow } from 'semantic-ui-react'
import EmployerList from '../pages/EmployerList'
import EmployerDetail from '../pages/EmployerDetail'
import Navi from './Navi'
import SideBar from './SideBar'

import CandidateList from '../pages/CandidateList'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import jobAdvertisementAdd from '../pages/JobAdvertisementAdd'
import { ToastContainer } from 'react-toastify'
import CityList from '../pages/CityList'

import "react-toastify/dist/ReactToastify.min.css"
import SignedIn from './SignedIn'
import Authentication from '../pages/Authentication'
import { useSelector} from 'react-redux'
import CandidateAdd from '../pages/CandidateAdd'
import CandidateDetail from '../pages/CandidateDetail'
import JobPostingStaffValidationList from '../pages/JobPostingStaffValidationList'

export default function Dashboard() {

    const authenticatedEmployer = useSelector(state => state.employer)

    let stateAuthorize = authenticatedEmployer.authenticatedEmployer
    return (
        <div>
            <ToastContainer position="bottom-right" />
            <Grid>
                <GridRow>
                    <GridColumn width={4}>
                        <SideBar />

                    </GridColumn>
                    <GridColumn width={12}>
                        <Route exact path="/" component={EmployerList} />
                        <Route exact path="/employers" component={EmployerList} />
                        <Route path="/employers/:name" component={EmployerDetail} />

                        <Route exact path="/candidates" component={CandidateList} />
                        <Route exact path="/jobAdvertisements" component={JobAdvertisementList} />
                        {stateAuthorize[1]== null&&<Route path="/jobAdvertisements/add" component={jobAdvertisementAdd} />}
                        <Route exact path="/cities" component={CityList} />
                       
                        <Route path="/authentication" component={Authentication} />
                        <Route path="/candidates/add" component={CandidateAdd} />
                        <Route path="/candidates/detail/:id" component={CandidateDetail} />
                        <Route path="/jobPostingStaffValidation" component={JobPostingStaffValidationList} />


                    </GridColumn>
                </GridRow>
            </Grid>


        </div>
    )
}
