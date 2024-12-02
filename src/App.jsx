import { useReducer } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TaskCategoryContext } from "./contexts/taskContext";
import { categories } from "./data/taskData";
import Pages from "./Pages";
import { initialState, TaskReducer } from "./reducers/taskReducer";

export default function App() {
  const [state, dispatch] = useReducer(TaskReducer, initialState);
  return (
    <TaskCategoryContext.Provider value={{ state, dispatch, categories }}>
      <Pages />
      <ToastContainer />
    </TaskCategoryContext.Provider>
  );
}
