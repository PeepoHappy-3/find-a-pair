import React from "react";
import './Gameover.css';
export default function Gameover(props){
  function handleClick(){
    props.handleClick();
  }
  return(
    <div className="gameover" onClick={handleClick}>
      <h2 className="gameover__title">
        DONE!
      </h2>
    </div>
  )
}