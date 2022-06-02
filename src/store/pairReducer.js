
import { getArray } from "../utils/createArray"
const defaultState = { 
  table: getArray(8),
  isPairSelected: false,  
}
export const pairReducer = (state = defaultState, action) => {
  switch(action.type){   
    case 'UNCOVER':
      return {...state, table: state.table.map((tile, index)=>{    
        return index === action.payload ? {
          ...tile, isUncovered: true
        } : tile
      })}       
    case 'RESET' :    
       return {...state, table: state.table.map((tile)=>{
          return tile.isUncovered&&!tile.isFound ? {...tile, isUncovered: false} : tile
       }),}    
    case 'IS_FOUND':
        return {...state, table: state.table.map(tile=>{             
           return tile.value===action.payload[0] ? {...tile, isFound: true} : tile
          })
        }
    case 'FULL_RESET':
      return {...state, table: getArray(8)}
    case 'SET_IS_PAIR_SELECTED':
      return {...state, isPairSelected: action.payload}
    case 'UNSET_IS_PAIR_SELECTED':
      return {...state, isPairSelected: false}
    default: 
       return state;
  }
}

