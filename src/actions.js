/*
Here all the actions are defined.
Example of defining an actoin is as follows

export const repairAdded = (var1,va2) => {
  return {
    type: "actionType1",
    payload: {
      var1,
      var2
    }
  }
}

*/


 export const repairAdded = (bicycleInfo) => {
  return {
    type: 'repairAdded',
    payload: bicycleInfo
  }
 }

 export const repairRemoved = (id) => {
  return {
    type: 'repairRemoved',
    payload: id
  }
 }

 export const repairUpdated = (id) => {
  return {
    type: 'repairUpdated',
    payload: id
  }
 }