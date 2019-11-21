import React, { Component } from 'react';
import classes from './Blog.module.css';
import Product from './Product/Product'
class Blog extends Component {

    componentDidMount(){
        this.props.useBlog(true);
    }

    render(){
        return(
            <Product {...this.props} useBlog={this.props.useBlog}/>
        );
    }
}

export default Blog;