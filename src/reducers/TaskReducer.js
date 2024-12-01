import { tasks } from "../data/taskData";

const initialState = {
  tasks: tasks,
};

const TaskReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        tasks: [...state.tasks, action.payload],
      };

    case "UPDATE":
      //   return {
      //     ...state,
      //     tasks: state.tasks.map((item) => {
      //       if (item.id === action.payload.id) {
      //         return action.payload;
      //       }
      //     }),
      //   };
      return {
        ...state,
        tasks: state.tasks.map((item) =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        ),
      };
    case "DELETE":
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};
export { initialState, TaskReducer };
