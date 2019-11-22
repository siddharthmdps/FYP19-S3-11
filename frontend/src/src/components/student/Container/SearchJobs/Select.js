import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import classes2 from './Select.module.css';
import { Col, Row } from 'react-bootstrap';
import Divider from '@material-ui/core/Divider';
import Industries from '../../../common_assets/CommonLists/Industries';
import WorkExpReqList from '../../../common_assets/CommonLists/WorkExpReqList';
import Location from '../../../common_assets/CommonLists/Locations';

import { Form } from 'react-bootstrap';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
        paddingLeft: '9.5%',
        display: 'block',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function SimpleSelect(props) {
    const classes = useStyles();
    // const [age, setAge] = React.useState('');

    //   React.useEffect(() => {
    //     setLabelWidth(inputLabel.current.offsetWidth);
    //   }, []);

    // const handleChange = event => {
    //     setAge(event.target.value);
    // };

    return (
        <Col md={{ span: 12 }} >
            <div className={classes2.Container}>
                <Form.Row>
                    <Form.Group as={Col} sm='12' controlId="Industry">
                        <Form.Label className={classes2.Label}>Industry</Form.Label>
                        <Form.Control as='select' value={props.filter.Industry} onChange={props.changeFn} required>
                            <Industries />
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <div className={classes2.Divider} />
            </div>

            <div className={classes2.Container}>
                <Form.Row>
                    <Form.Group as={Col} sm='12' controlId="WorkExp">
                        <Form.Label className={classes2.Label}>Work Experience</Form.Label>
                        <Form.Control as='select' value={props.filter.WorkExp} onChange={props.changeFn} required>
                            <WorkExpReqList />
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
            </div>

            <div className={classes2.Divider} />

            <div className={classes2.Container}>

                <Form.Row>
                    <Form.Group as={Col} sm='12' controlId="Location">
                        <Form.Label className={classes2.Label}>Location</Form.Label>
                        <Form.Control as='select' value={props.filter.Location} placeholder="Singapore"  onChange={props.changeFn} required>
                            <Location />
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
            </div>
        </Col>
    );
}
