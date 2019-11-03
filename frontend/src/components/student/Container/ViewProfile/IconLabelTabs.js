import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import WebIcon from '@material-ui/icons/Web';
import DoneIcon from '@material-ui/icons/Done';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import classes from './IconLabelTabs.module.css';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            <Box p={6}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth: 1250,
    },
});



export default function IconLabelTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    let  tab = (event) => {
        console.log(event.target.value, event.target.id);
    }

    return (
        <Paper square className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary"
                aria-label="icon label tabs example"
            >
                <Tab className={classes.Test} icon={<SchoolIcon />} label="Education" />
                <Tab icon={<WorkIcon />} label="Work Experience" />
                <Tab icon={<ImportContactsIcon />} label="Certifications" />
                <Tab icon={<StarHalfIcon />} label="Awards" />
                <Tab icon={<WebIcon />} label="Projects" />
                <Tab icon={<DoneIcon />} label="Skills" />
            </Tabs>

            <TabPanel value={value} index={0} style={{backgroundColor: "rgb(33, 150, 243)"}}>
                <VerticalTimeline>
                    {props.Education.map(educationDetail => {
                        return (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date={educationDetail.StartDate + " - " + educationDetail.EndDate}
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<SchoolIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">{educationDetail.Degree + " in " +
                                    educationDetail.FieldOfStudy + " (" +
                                    educationDetail.Major + ")"}</h3>
                                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                                <p>
                                    {educationDetail.University}
                                    <br />
                                    {educationDetail.GPA}
                                </p>
                            </VerticalTimelineElement>
                        );
                    })}
                    </VerticalTimeline>
            </TabPanel>
            <TabPanel value={value} index={1} style={{backgroundColor: "rgb(33, 150, 243)"}}>
                <VerticalTimeline>
                    {props.WorkExp.map(workDetail => {
                        return (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date={workDetail.StartDate + " - " + workDetail.EndDate}
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">{workDetail.Position + " at " +
                                    workDetail.Company + " (" + workDetail.Mode + ")"} </h3>
                                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                                <p>
                                    {workDetail.Industry + ", " + workDetail.AnnualSalary}
                                    <br />
                                    {workDetail.Description}
                                </p>
                            </VerticalTimelineElement>
                        );
                    })}
                </VerticalTimeline>
            </TabPanel>
            <TabPanel value={value} index={2} >
                <VerticalTimeline>
                    {props.Certification.map(certificateDetail => {
                        return (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date={certificateDetail.IssueDate + " - " + certificateDetail.ValidUntil}
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<ImportContactsIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">{certificateDetail.Name}</h3>
                                <h4 className="vertical-timeline-element-subtitle">- {certificateDetail.IssuedBy}</h4>
                            </VerticalTimelineElement>
                        );
                    })}
                </VerticalTimeline>
            </TabPanel>
            <TabPanel value={value} index={3} >
                <VerticalTimeline>
                    {props.Awards.map(awardDetail => {
                        return (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date={awardDetail.Date}
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<StarHalfIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">{awardDetail.Award}</h3>
                                <p>
                                    {awardDetail.Description}
                                </p>
                            </VerticalTimelineElement>
                        );
                    })}
                </VerticalTimeline>
            </TabPanel>
            <TabPanel value={value} index={4} >
                May use time line or other stuffs
            </TabPanel>
            <TabPanel value={value} index={5} >
                Other stuffs
            </TabPanel>
        </Paper>
    );
}