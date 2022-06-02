import React from 'react';
import './App.css';
import '../Table/Table';
import Table from '../Table/Table';
import Gameover from '../Gameover/Gameover.js';
import Score from '../Score/Score';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const isPairSelected = useSelector(state=>state.pairReducer.isPairSelected);
  const table = useSelector(state => state.pairReducer.table);
  const win = useSelector(state=>state.roundsReducer.win);

  const dispatch = useDispatch();

  const [pair, setPair] = React.useState([]);  
 
  function restart(){
    resetPair();
    dispatch({type: 'FULL_RESET'});
    dispatch({type: 'HIDE_WIN'});
    dispatch({type: 'RESET_ROUND'});
  }
  function resetPair(){
    setPair([]);   
    dispatch({type:'SET_IS_PAIR_SELECTED', payload: false})
    dispatch({type:'RESET'});      
  }
  function nextRound(){
    if(isFound()){
      dispatch({type:'IS_FOUND', payload: pair}); 
      dispatch({type:'INC_SUCCESS'});                                    
    } else {
      dispatch({type:'INC_FAIL'}); 
    }   
    dispatch({type:'NEXT_ROUND'});
  }

  function isFound(){
    return pair[0] === pair[1];
  };

  function endGame(){      
    if(table.filter(tile=>{
      return tile.isFound === false;
    }).length === 0){       
      dispatch({type:'END_GAME'});
    }
  }
  function core(){
    if(isPairSelected){                
        setTimeout(()=>{
        nextRound();
        resetPair();                                 
      },500)     
    }
  } 
  function hanldeCore(){  
    core();  
    endGame();
  }

  function uncover(i){  
    if(!isPairSelected){
      dispatch({type: 'UNCOVER', payload : i});
      if(!table[i].isFound&&!table[i].isUncovered){   
        setPair([...pair, table[i].value]);       
        if(pair.length>=1){        
          dispatch({type:'SET_IS_PAIR_SELECTED', payload: true})
         }         
      }            
    }    
  };
  return (
    <div className="App">  
      <main className='main container'>
        <Table
          core={hanldeCore}
          onCardClick={uncover}        
          restart={restart}>           
        </Table>
        {win && <Gameover handleClick={restart}/>}  
        <Score restart={restart}/>  
      </main>
    </div>
  );
}

export default App;
