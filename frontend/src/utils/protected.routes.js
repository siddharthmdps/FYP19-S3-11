import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import auth from './auth'


export const ProtectedRoute = ({component: Component,... rest}) => {

    return (
        <Route {...rest} render={
            (props) => {
                // user needs to be authenticated
                // && needs to be the same user type (e.g. employer cannot visit student page)
                let currentPath = props.location.pathname.slice(1,2)
                let usertype = localStorage.getItem('usertype')
                // console.log('usertype' , localStorage.getItem('usertype'))
                
                if(auth.isAuthenticated() && auth.isCorrectPath(currentPath, usertype)) {
                    
                    return <Component {...props} />
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