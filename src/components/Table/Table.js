
import './Table.css';
import Tile from '../Tile/Tile.js';
import React from 'react';
import {useSelector } from 'react-redux';

export default function Table(props){
  const isPairSelected = useSelector(state=>state.pairReducer.isPairSelected);
  const table = useSelector(state => state.pairReducer.table); 
  

  React.useEffect(()=>{
    hanldeCore();   
  },[isPairSelected]);
  function hanldeCore(){
    props.core();
  }
  function uncover(i){
    props.onCardClick(i);
  }
  return (
    <div className='main container'>
      <h1 className="title">
        Find the pair (test task)
      </h1>
      <div className='table'>
        { table.map((tile, i) => {        
            return (
              <Tile 
                key={i}
                tile={tile.value}
                isUncovered={tile.isUncovered}
                index = {i}
                handleClick={()=>{
                  uncover(i)
                }
              }/>
            );               
          })
        }
      </div>    
    </div>
  );
}