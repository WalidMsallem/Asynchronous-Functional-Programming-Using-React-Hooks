import React, { useContext, useReducer } from "react";

import Context from "./context";
import reducer from "./reducer";
import Todos from "./todos";
import AddTodo from "./addTodo";
import "./App.css";

function App() {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <AddTodo />
      <div className="App">
        <Todos />
      </div>
    </Context.Provider>
  );
}

export default App;
