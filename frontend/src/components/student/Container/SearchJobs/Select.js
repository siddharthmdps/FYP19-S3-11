import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import classes2 from './Select.module.css';
import { Col, Row } from 'react-bootstrap';

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

export default function SimpleSelect() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    //   React.useEffect(() => {
    //     setLabelWidth(inputLabel.current.offsetWidth);
    //   }, []);

    const handleChange = event => {
        setAge(event.target.value);
    };

    return (
        <Row>
            <Col md={{ span: 3, offset: 1 }} >
                <div className={classes2.Container}>
                    <label className={classes2.Title}>Work Experience</label>
                    <div className={classes2.Select}>
                        <FormControl style={{minWidth: '120px'}}>
                            <InputLabel shrink id="Years" className={classes2.InputLabel}>
                                Years
                    </InputLabel>
                            <Select
                                labelId="Years"
                                id="YearsSelect"
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                className={classes.selectEmpty}
                            >
                                <MenuItem value="">None</MenuItem>
                                <MenuItem value={0}>0</MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <p style={{ display: 'inline-block', width: '120px' }}></p>
                    <div className={classes2.Select}>
                        <FormControl style={{minWidth: '120px'}}>
                            <InputLabel shrink id="Months" className={classes2.InputLabel}>
                                Months
                        </InputLabel>
                            <Select
                                labelId="Months"
                                id="MonthsSelect"
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                className={classes.selectEmpty}
                            >
                                <MenuItem value="">None</MenuItem>
                                <MenuItem value={0}>0</MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={11}>11</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </Col>
            <Col md={{ span: 3, offset: 1 }} >
                <div className={classes2.Container}>
                    <label className={classes2.Title}>Industry</label>
                    <div className={classes2.Select}>
                        <FormControl style={{minWidth: '150px'}}>
                            <InputLabel shrink id="Years" className={classes2.InputLabel}>
                                Industry
                            </InputLabel>
                            <Select
                                labelId="Years"
                                id="YearsSelect"
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                className={classes.selectEmpty}
                            >
                                <MenuItem value="">None</MenuItem>
                                <MenuItem value={0}>0</MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </Col>
            <Col md={{ span: 3}} >
                <div className={classes2.Container}>
                    <label className={classes2.Title}>Location</label>
                    <div className={classes2.Select}>
                        <FormControl style={{minWidth: '150px'}}>
                            <InputLabel shrink id="Years" className={classes2.InputLabel}>
                                Location
                            </InputLabel>
                            <Select
                                labelId="Years"
                                id="YearsSelect"
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                className={classes.selectEmpty}
                            >
                                <MenuItem value="">None</MenuItem>
                                <MenuItem value={0}>0</MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </Col>
        </Row>
    );
}
