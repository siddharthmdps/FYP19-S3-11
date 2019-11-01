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

export default function IconLabelTabs() {
  const classes = useStyles();
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
        <Tab icon={<SchoolIcon />} label="Education" /> 
        <Tab icon={<WorkIcon />} label="Work Experience" /> 
        <Tab icon={<ImportContactsIcon />} label="Certifications" />
        <Tab icon={<StarHalfIcon />} label="Awards" />
        <Tab icon={<WebIcon />} label="Projects" />
        <Tab icon={<DoneIcon />} label="Skills" />
      </Tabs>

      <TabPanel value={value} index={0} >
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} >
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} >
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3} >
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4} >
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5} >
          Item Six
        </TabPanel>
    </Paper>
  );
}