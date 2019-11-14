import React, { Component } from 'react';
import classes from './Blog.module.css';

import AboutUs from './AboutUs/AboutUs';
import ContactUs from './ContactUs/ContactUs'

class Blog extends Component {

    componentDidMount(){
        this.props.useBlog(true);
    }

    render(){
        return(
            <React.Fragment>
                {/* <AboutUs /> */}
                <ContactUs />
            </React.Fragment>
        );
    }
}

export default Blog;