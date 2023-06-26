import React from "react";
import './task.css';
import taskHeaderIcon1 from '../assest/task_header_icon1.svg';
import taskHeaderIcon2 from '../assest/task_header_icon2.svg';
import taskHeaderIcon3 from '../assest/task_header_icon3.svg';
import filterToday from '../assest/filter_today.svg';
import share from '../assest/share.svg';

function Task() {
  return (
    <div className="task">
      <div className="task-header">
        <div className="icons">
          <h1>Mobile App</h1>
          <img src={taskHeaderIcon1} alt="Icon 1"></img>
          <img src={taskHeaderIcon2} alt="Icon 2"></img>
        </div>
        <div className="icons group">
          <img src={taskHeaderIcon3} alt="Icon 3"></img>
        </div>
      </div>
      <div className="dropbox">
        <div className="icons">
          <img src={filterToday} alt="Filter Today"></img>
        </div>
        <div className="icons dropbox-1">
          <img src={share} alt="Share"></img>
        </div>
      </div>
    </div>
  );
}

export default Task;
