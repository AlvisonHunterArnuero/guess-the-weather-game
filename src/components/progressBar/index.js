import React from "react";
const ProgressBar = ({currentCity}) => {
  return (
    <div className='progress'>
    <div
      className='progress-bar progress-bar-striped progress-bar-animated'
      role='progressbar'
      aria-valuenow='75'
      aria-valuemin='0'
      aria-valuemax='100'
      style={{ width: currentCity * 20 + "%" }}
    ></div>
  </div>
  );
};

export default ProgressBar;