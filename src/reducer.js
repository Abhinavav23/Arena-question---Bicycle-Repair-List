/*
reducer is defined here and is exproted.
This reducer should handle all the actions.
Example of how to use reducer is as follows:
*/

import { combineReducers } from "redux";

const iniStore = {
  items: [],
  item: {
    owner: '', 
    model: '', 
    description: ''
  },
  editMode: false
}

const bicycleReducer = (state=iniStore, action) => {
  switch(action.type){
    case 'repairAdded': 
    const id = Math.floor(Math.random()*1000000)
    const bicycle = {...action.payload, id}
      return {
        ...state,
        items: [...state.items, bicycle],
        item: action.payload
      };

    case 'repairRemoved':
      const updatedItems = state.items.filter((item) => {
        return item.id !== action.payload
      })
      return {
        ...state,
        items: updatedItems,
        item: action.payload
      }
    case 'repairRemoved':
      const updatedItem = state.items.map((item) => {
        if(item.id === action.id){
          
        }
      })
      return {
        ...state,
        items: updatedItems,
        item: action.payload
      }
    default: 
      return state;
    }
}

const repairList = combineReducers({
  bicycle: bicycleReducer
})

export default repairList;

