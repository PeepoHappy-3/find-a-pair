import React from "react";
import './Score.css';
import { useSelector } from "react-redux";

export default function Score(props){
  const roundsCounter = useSelector(state=> state.roundsReducer.rounds); 
  const failed = useSelector(state=>state.roundsReducer.failedRounds);
  const success = useSelector(state=>state.roundsReducer.successRounds);

  function restart(){
    props.restart();
  }
  return  (
    <div className="score">
      <p className="score__rounds-counter">
         Round: {roundsCounter}
      </p>
      <p className="score__failed">
        Fails: {failed}
      </p>  
      <button className='score__button' onClick={restart}>Restart</button>
      <p className="score__success">
        Nice! {success}
      </p>
    </div>
  );
}