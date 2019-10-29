import React from 'react';
import classes from './Timeline.module.css';

export const Timeline = ({ children }) =>
  <div className={classes.Container}>
    <ul className={classes.Timeline}>
      {children}
    </ul>
  </div>

export const Event = ({ title, subtitle, interval, children }) =>
  <li className={classes.Event}>
    <label className={classes.Icon}></label>
    <div className={classes.Body}>
      <p className={classes.Date}>{interval}</p>
      <h3>{title}</h3>
      {subtitle && <h4>{subtitle}</h4>}
      <div className={classes.Description}>
        {children}
      </div>
    </div>
  </li>
