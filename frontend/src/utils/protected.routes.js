import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import auth from './auth'

import EmpNavbar from '../components/employer/EmpNavbar'
import Navbar2 from '../components/common_assets/Navbar2'

export const ProtectedRoute = ({component: Component,... rest}) => {

    // render accordingly depending on the usertype
    const NavbarToRender = () => {
        switch(localStorage.getItem('usertype')){
            case 'student'  : return <Navbar2/>
            case 'employer' : return <EmpNavbar/>
            case 'admin'    : return <div></div>
        }
    }

    return (
        <Route {...rest} render={
            (props) => {
                // user needs to be authenticated
                // && needs to be the same user type (e.g. employer cannot visit student page)
                if(auth.isAuthenticated()) {
                    console.log(auth.isAuthenticated())
                    return (
                        <div>
                            <NavbarToRender/>
                            <Component {...props} />
                        </div>
                    )
                }
                else {
                    return <Redirect to={
                        {
                            pathname: '/',
                            state: {
                                from: props.location
                            }
                        }
                    } />
                }
            }
        } />
    )
}