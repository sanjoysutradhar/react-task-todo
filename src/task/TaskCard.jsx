import { FaPen } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { toast } from "react-toastify";
import { dateFormatting } from "../utils/dateFormatting";

function TaskCard({ task, dispatch, onEditTask }) {
  function handleDelete(e) {
    e.preventDefault();

    dispatch({
      type: "DELETE",
      payload: task,
    });
    toast.error(`Task '${task.taskName}' deleted successfully`, {
      position: "bottom-right",
    });
  }
  return (
    <div className="mb-4 rounded-lg bg-gray-800 p-4">
      <div className="flex justify-between">
        <h4 className="mb-2 flex-1 font-semibold text-indigo-500">
          {task.taskName}
        </h4>

        <div className="flex gap-2">
          <button onClick={(e) => handleDelete(e)}>
            <FaRegTrashCan />
          </button>
          <button onClick={(e) => onEditTask(e, task)}>
            <FaPen />
          </button>
        </div>
      </div>
      <p className="mb-2 text-sm text-zinc-200">{task.description}</p>

      <p className="mt-6 text-xs text-zinc-400">
        {dateFormatting(task.dueDate)}
      </p>
    </div>
  );
}

export default TaskCard;
