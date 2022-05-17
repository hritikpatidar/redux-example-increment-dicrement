
import { useDispatch, useSelector } from 'react-redux';
import { dicNumber, incNumber } from './Actions/ActionCreator';
import './App.css';

function App(props) {
  const state = useSelector(state => state.ChangeTheNumber)

  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>{state?.value}</h1>
      <button onClick={()=>{dispatch(dicNumber())}} >Dicrement</button>
      <button onClick={()=>{dispatch(incNumber())}}>Increment</button>
    </div>
  );
}

export default App;
