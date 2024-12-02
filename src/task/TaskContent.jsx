import { useContext, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { HiSortDescending } from "react-icons/hi";
import { toast } from "react-toastify";
import { TaskCategoryContext } from "../contexts/taskContext";
import { categoriesColor } from "../data/taskData";
import AddEditTaskModal from "./AddEditTaskModal";
import TaskCard from "./TaskCard";
const initialTask = {
  id: crypto.randomUUID(),
  taskName: "",
  category: "",
  description: "",
  dueDate: "",
};
function TaskContent() {
  const [showAddEditTask, setShowAddEditTask] = useState(false);
  const [isAsc, setIsAsc] = useState(false);
  //   const [groupedTasks, setGroupedTask] = useState([]);
  const [isAdd, setIsAdd] = useState(true);
  const [updateTask, setUpdateTask] = useState(initialTask);
  const { state, dispatch, categories } = useContext(TaskCategoryContext);

  //   useEffect(() => {
  //     const newTasks = state.tasks.reduce((groups, task) => {
  //       (groups[task.category] ||= []).push(task);
  //       return groups;
  //     }, {});
  //     setGroupedTask(newTasks);
  //   }, [state]);

  function handleEditTask(e, task) {
    e.preventDefault();
    setIsAdd(false);
    setUpdateTask(task);
    setShowAddEditTask(true);
  }

  function handleAddUpdateTask(type, task) {
    dispatch({
      type: type,
      payload: task,
    });
    setIsAdd(true);
    setUpdateTask(initialTask);
  }

  function handleSorting(cat, IsAscending) {
    setIsAsc(IsAscending);
    dispatch({
      type: "SORT",
      payload: {
        category: cat,
        isAsc: IsAscending,
      },
    });
    toast.success(
      `Tasks are sorting ${
        IsAscending ? "ascending" : "desecending"
      } order of ${cat} category`,
      {
        position: "bottom-right",
      }
    );
  }

  return (
    <>
      {showAddEditTask && (
        <AddEditTaskModal
          onClose={() => setShowAddEditTask(false)}
          updateTask={updateTask}
          onAddUpdate={handleAddUpdateTask}
          isAdd={isAdd}
        />
      )}
      <div className="mx-auto max-w-7xl p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Projectify</h2>
          <div className="flex space-x-2">
            <button
              className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
              onClick={() => (
                setShowAddEditTask(true),
                setUpdateTask(initialTask),
                setIsAdd(true)
              )}
            >
              <FaPlusCircle /> Add
            </button>
          </div>
        </div>

        <div className="-mx-2 mb-6 flex flex-wrap">
          {categories.map((cat) => {
            const tasks = state.tasks.filter((task) => task.category === cat);

            return (
              <div key={cat} className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
                <div
                  className={`rounded-lg ${
                    categoriesColor[cat] ?? "bg-slate-500"
                  } p-4`}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">
                      {cat} {`(${tasks.length})`}
                    </h3>
                    <button onClick={() => handleSorting(cat, !isAsc)}>
                      <HiSortDescending />
                    </button>
                  </div>
                  <div>
                    {tasks.length > 0 ? (
                      tasks.map((task) => (
                        <TaskCard
                          key={task.id}
                          task={task}
                          dispatch={dispatch}
                          onEditTask={handleEditTask}
                        />
                      ))
                    ) : (
                      <div className="mb-4 rounded-lg bg-gray-800 p-4">{`There is no task in ${cat}`}</div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          {/* {Object.entries(groupedTasks).map(([category, tasks]) => (
            <div key={category} className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
              <div className={`rounded-lg ${categoriesColor[category]} p-4`}>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">
                    {category} {`(${tasks.length})`}
                  </h3>
                  <HiSortDescending />
                </div>
                <div>
                  {tasks.map((task) => (
                    <TaskCard
                      key={task.id}
                      task={task}
                      dispatch={dispatch}
                      onEditTask={handleEditTask}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </>
  );
}

export default TaskContent;
