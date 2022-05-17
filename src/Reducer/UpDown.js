
let initialState ={
    value:0
  }

let ChangeTheNumber=(oldState=initialState,action)=>{
    console.log(oldState)
    switch(action.type){
      case "Increment":
            return  {
                ...oldState,
                value: oldState.value+1
            }
      case "Dicrement":
            return {
                ...oldState,
                value: oldState.value-1
            }
      default:
            return oldState;
    }
  }

  export default ChangeTheNumber;