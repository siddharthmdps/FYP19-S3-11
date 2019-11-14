import React, { Component } from 'react';
import classes from './Blog.module.css';

class Blog extends Component {

    componentDidMount(){
        this.props.useBlog(true);
    }

    render(){
        return(
            <React.Fragment>
                
            </React.Fragment>
        );
    }
}

export default Blog;