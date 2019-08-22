import React, { useContext, useState } from "react";
import Context from "./context";
export default function AddTodo() {
  const { state, dispatch } = useContext(Context);
  const [todo, setTodo] = useState("");
  return (
    <div>
      <input onChange={e => setTodo(e.target.value)} value={todo} />
      <button
        onClick={() => {
          dispatch({ type: "ADD_TODO", payload: todo });
          setTodo("");
        }}
      >
        add todo
      </button>
    </div>
  );
}
