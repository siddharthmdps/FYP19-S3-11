import React from 'react';
import { Card, Form, Col, Image, ListGroup, ListGroupItem, ResponsiveEmbed } from 'react-bootstrap';
import classes from './CompanyInfo.module.css'

const companyInfo = props => (
    <React.Fragment>
        <ResponsiveEmbed aspectRatio="1by1">
            <Image src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-P3iJ7YoAPkY%2FT5e57OJGikI%2FAAAAAAAAA38%2FRTHs9cmhndQ%2Fs1600%2Fapple-logo-clouds.jpg&f=1&nofb=1" className={classes.Image} />
        </ResponsiveEmbed>
        <br/>
        <p className={classes.CompanyName}>{props.companyName}</p>
    </React.Fragment>
);

export default companyInfo;