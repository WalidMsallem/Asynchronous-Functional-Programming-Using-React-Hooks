import React, { useContext, useEffect } from "react";
import Context from "./context";

import axios from "axios";
export default function Todos() {
  const { state, dispatch } = useContext(Context);

  useEffect(() => updateProductBackend(dispatch), []);
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{ margin: "30px", border: "1px solid black", padding: "20px" }}
      >
        current user from context : {state.currentUser}
      </div>
      <div
        style={{ margin: "30px", border: "1px solid black", padding: "20px" }}
      >
        Todos list :
        {state.todos.map(el => (
          <p>{el}</p>
        ))}
      </div>
      <div
        style={{ margin: "30px", border: "1px solid black", padding: "20px" }}
      >
        articles list :
        {state.articles.map((el, i) => {
          return <p>{el.title}</p>;
        })}
      </div>
    </div>
  );
}

const updateProductBackend = async dispatch => {
  const result = await axios.get(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=c39a26d9c12f48dba2a5c00e35684ecc"
  );

  if (result.data.status === "ok") {
    dispatch({ type: "success", payload: result.data.articles });
  } else {
    dispatch({ type: "failure", payload: ["error when fetching data"] });
  }
};
