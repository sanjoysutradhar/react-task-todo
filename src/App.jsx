import { useReducer } from "react";
import { TaskCategoryContext } from "./contexts/taskContext";
import Pages from "./Pages";
import { initialState, TaskReducer } from "./reducers/taskReducer";
import { categories } from "./data/taskData";

export default function App() {
  const [state, dispatch] = useReducer(TaskReducer, initialState);
  return (
    <TaskCategoryContext.Provider value={{ state, dispatch, categories }}>
      <Pages />
    </TaskCategoryContext.Provider>
  );
}
