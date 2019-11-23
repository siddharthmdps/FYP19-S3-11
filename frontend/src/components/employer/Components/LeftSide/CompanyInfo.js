import React from 'react';
import { Card, Form, Col, Image, ListGroup, ListGroupItem, ResponsiveEmbed } from 'react-bootstrap';
import classes from './CompanyInfo.module.css'

const companyInfo = props => (
    <React.Fragment>
        <ResponsiveEmbed aspectRatio="1by1">
            <Image src="default3.png" className={classes.Image} />
        </ResponsiveEmbed>
        <br />
        <p className={classes.CompanyName}>{props.companyName}</p>
    </React.Fragment>
);

export default companyInfo;