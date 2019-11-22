import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const SmallCard = (props) => {
    return (
        <React.Fragment>
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text"> {props.text}</p>
        </React.Fragment>
        // <div className="col-sm-4">

        // </div>
    )
};

export default SmallCard;
