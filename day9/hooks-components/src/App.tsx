import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './GreetingFunctional';

const reducer = (state: any, action: any) => {
  console.log("enterednameReducer");
  switch (action.type) {
    case "enteredName":
      if(state.enteredName === action.payload) {
        return state;
      }
      return {...state, enteredName: action.payload}
      
    case "message":
      return {
        ...state, message: `Hello, ${action.payload}`
      }
    default:
      throw new Error("Invalid action type " + action.type);
  }
}

const initialState = {
  enteredName: "",
  message: "",
}

function App() {
  const [{ message, enteredName }, dispatch] = useReducer(reducer, initialState);
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "enteredName", payload: e.target.value
    });
    dispatch({
      type: "message", payload: e.target.value
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input value={enteredName} onChange={onChangeName} />
        <Greeting message={message} />
      </header>
    </div>
  );
}

export default App;
