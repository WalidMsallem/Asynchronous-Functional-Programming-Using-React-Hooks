import { createContext } from "react";

const Context = createContext({
  currentUser: "walid",
  todos: [],
  articles : []
});

export default Context;
