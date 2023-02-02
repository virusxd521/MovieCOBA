import React from "react";
import './style.css';

const Check = ({checked, onCheck}) => {
  const handleOnClick=()=>{
    onCheck(!checked);
  }

  return (
    <button 
      className={checked ? "check check--enabled" : "check check--disabled"}
      onClick={handleOnClick}
    >
      {checked ? '✓' : 'x'}
    </button>
  )
};

export default Check;
