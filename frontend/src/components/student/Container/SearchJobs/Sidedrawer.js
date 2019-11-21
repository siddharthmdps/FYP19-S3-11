import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Select from './Select';
import classes2 from './SearchJobs.module.css';

const useStyles = makeStyles({
  list: {
    width: 250,
  }
});

const SwipeableTemporaryDrawer = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
    //   onClick={toggleDrawer(side, false)}
    //   onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <Select filter={props.filter} changeFn={event => props.changeFn(event)}/>
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('left', true)} className={classes2.Sidedrawer} style={{color: '#d4d3d3'}}>Advanced Search</Button>
      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {sideList('left')}
      </SwipeableDrawer>
    </div>
  );
}
export default SwipeableTemporaryDrawer;