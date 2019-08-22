export default function reducer(state, { type, payload }) {
  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: state.todos.concat(payload)
      };
    case "success":
      return {
        ...state,
        articles: state.articles.concat(payload)
      };
    case "failure":
      return {
        ...state,
        articles: state.todos.concat(payload)
      };

    default:
      return state;
  }
}
