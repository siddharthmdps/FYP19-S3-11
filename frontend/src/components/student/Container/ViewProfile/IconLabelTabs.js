import React from 'react';
import classes from './IconLabelTabs.module.css';

import Paper from '@material-ui/core/Paper';
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
import StarIcon from '@material-ui/icons/Star';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Button, Card } from 'react-bootstrap'
import Bounce from 'react-reveal/Bounce';
import Flip from 'react-reveal/Flip';

let TabPanel = props => {
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

// const useStyles = makeStyles({
//     root: {
//         flexGrow: 1,
//         maxWidth: 1250,
//     },
//     Skill: {
//         textTransform: 'uppercase',
//         fontSize: '11px',
//         letterSpacing: '2.5px',
//         fontWeight: '500',
//         color: '#000',
//         backgroundColor: '#fff',
//         border: 'none',
//         borderRadius: '45px';
//         box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
//         transition: all 0.3s ease 0s;
//         cursor: pointer;
//         outline: none;
//         position: relative;
//         text-align: center;
//         display: inline-block;
//         text-align: center;
//         margin-right: 2%;
//         margin-top: 1%;
//     }
// });



let IconLabelTabs = props => {
    const [value, setValue] = React.useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                <Tab className={classes.Tab} icon={<SchoolIcon />} label="Education" />
                <Tab className={classes.Tab} icon={<WorkIcon />} label="Work Experience" />
                <Tab className={classes.Tab} icon={<ImportContactsIcon />} label="Certifications" />
                <Tab className={classes.Tab} icon={<StarHalfIcon />} label="Awards" />
                <Tab className={classes.Tab} icon={<WebIcon />} label="Projects" />
                <Tab className={classes.Tab} icon={<DoneIcon />} label="Skills" />
            </Tabs>

            <TabPanel value={value} index={0} style={{ backgroundColor: "#fff" }}>
                <VerticalTimeline className={classes.verticalTimeline}>
                    {props.Education.map(educationDetail => {
                        return (
                            <VerticalTimelineElement
                                className={classes.EduTab}
                                contentStyle={{
                                    background: 'white', color: 'black', borderTop: '3px solid #00FF99',
                                    boxShadow: '0px 2px 14px 2px rgba(148,140,148,1)'
                                }}
                                contentArrowStyle={{ borderRight: '7px solid  #00FF33' }}
                                date={educationDetail.StartDate + " - " + educationDetail.EndDate}
                                iconStyle={{ background: '#00FF99', color: '#fff' }}
                                icon={<SchoolIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">{educationDetail.Degree + " in " +
                                    educationDetail.FieldOfStudy + " (" +
                                    educationDetail.Major + ")"}</h3>
                                <p>
                                    {educationDetail.University}
                                    <br />
                                    {educationDetail.GPA}
                                </p>
                            </VerticalTimelineElement>
                        );
                    })}
                    <VerticalTimelineElement
                        iconStyle={{ background: '#9900FF', color: '#fff' }}
                        icon={<StarIcon />}
                    />
                </VerticalTimeline>
            </TabPanel>
            <TabPanel value={value} index={1} style={{ backgroundColor: "#fff" }}>
                <VerticalTimeline className={classes.verticalTimeline}>
                    {props.WorkExp.map(workDetail => {
                        return (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{
                                    background: 'white', color: 'black', borderTop: '3px solid rgb(33, 150, 243)',
                                    boxShadow: '0px 2px 14px 2px rgba(148,140,148,1)'
                                }}
                                date={workDetail.StartDate + " - " + workDetail.EndDate}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">{workDetail.Position + " at " +
                                    workDetail.Company + " (" + workDetail.Mode + ")"} </h3>
                                <p>
                                    {workDetail.Industry + ", " + workDetail.AnnualSalary}
                                    <br />
                                    {workDetail.Description}
                                </p>
                            </VerticalTimelineElement>
                        );
                    })}
                    <VerticalTimelineElement
                        iconStyle={{ background: '#9900FF', color: '#fff' }}
                        icon={<StarIcon />}
                    />
                </VerticalTimeline>
            </TabPanel>
            <TabPanel value={value} index={2} style={{ backgroundColor: "#fff" }}>
                <VerticalTimeline className={classes.verticalTimeline}>
                    {props.Certification.map(certificateDetail => {
                        return (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{
                                    background: 'white', color: 'black', borderTop: '3px solid red',
                                    boxShadow: '0px 2px 14px 2px rgba(148,140,148,1)'
                                }}
                                contentArrowStyle={{ borderRight: '7px solid  red' }}
                                date={certificateDetail.IssueDate + " - " + certificateDetail.ValidUntil}
                                iconStyle={{ background: 'red', color: '#fff' }}
                                icon={<ImportContactsIcon />}
                                key={certificateDetail.CertificateID}
                            >
                                <h3 className="vertical-timeline-element-title">{certificateDetail.Name}</h3>
                                <h4 className="vertical-timeline-element-subtitle">- {certificateDetail.IssuedBy}</h4>
                            </VerticalTimelineElement>
                        );
                    })}
                    <VerticalTimelineElement
                        iconStyle={{ background: '#9900FF', color: '#fff' }}
                        icon={<StarIcon />}
                    />
                </VerticalTimeline>
            </TabPanel>
            <TabPanel value={value} index={3} >
                <VerticalTimeline className={classes.verticalTimeline}>
                    {props.Awards.map(awardDetail => {
                        return (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date={awardDetail.Date}
                                contentStyle={{
                                    background: 'white', color: 'black', borderTop: '3px solid #FFD700',
                                    boxShadow: '0px 2px 14px 2px rgba(148,140,148,1)'
                                }}
                                contentArrowStyle={{ borderRight: '7px solid  #FFD700' }}
                                iconStyle={{ background: '#FFDF00', color: '#fff' }}
                                icon={<StarHalfIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">{awardDetail.Award}</h3>
                                <p>
                                    {awardDetail.Description}
                                </p>
                            </VerticalTimelineElement>
                        );
                    })}
                    <VerticalTimelineElement
                        iconStyle={{ background: '#9900FF', color: '#fff' }}
                        icon={<StarIcon />}
                    />
                </VerticalTimeline>
            </TabPanel>
            <TabPanel value={value} index={4} >
                {props.Projects.map(projectDetail => {
                    return (
                        <React.Fragment key={projectDetail.ProjectID}>
                            <Bounce right>
                                <Card className={classes.Project}>
                                    {/* <Card.Body>{projectDetail.Title} ({projectDetail.Status})</Card.Body> */}
                                    <Card.Body><strong>{projectDetail.Title} ({projectDetail.Status})</strong> <br /> <br /> {projectDetail.Description}</Card.Body>
                                </Card>
                                <br />
                            </Bounce>
                        </React.Fragment>
                    );
                })}
            </TabPanel>
            <TabPanel value={value} index={5} >
                {props.Skills.map(skillDetail => {
                    return (
                        <Button className={classes.Skill} key={skillDetail.SkillID}>
                            {skillDetail.SkillName}
                        </Button>
                    );
                })}
            </TabPanel>
        </Paper>
    );
}

export default IconLabelTabs;