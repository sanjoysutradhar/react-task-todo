import { tasks } from "../data/taskData";

const initialState = {
  tasks: tasks, // Filtered list (used in the UI)
  mainTasks: tasks, // Original unfiltered list
};

const TaskReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        mainTasks: [...state.mainTasks, action.payload],
      };

    case "UPDATE":
      return {
        ...state,
        tasks: state.tasks.map((item) =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        ),
        mainTasks: state.mainTasks.map((item) =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        ),
      };

    case "DELETE":
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== action.payload.id),
        mainTasks: state.mainTasks.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    case "SEARCH":
      const searchItem = action.payload.taskName.trim();
      return {
        ...state,
        tasks: searchItem
          ? state.mainTasks.filter((task) => {
              return task.taskName?.toLowerCase().includes(searchItem);
            })
          : state.mainTasks,
      };
    case "SORT":
      return {
        ...state,
        tasks: [
          // Keep tasks from other categories as is
          ...state.tasks.filter(
            (task) => task.category !== action.payload.category
          ),

          // Sort tasks in the matching category
          ...state.tasks
            .filter((task) => task.category === action.payload.category)
            .sort(
              (a, b) =>
                action.payload.isAsc
                  ? new Date(a.dueDate) - new Date(b.dueDate) // Ascending
                  : new Date(b.dueDate) - new Date(a.dueDate) // Descending
            ),
        ],
      };

    default:
      return state;
  }
};

export { initialState, TaskReducer };
