import { useContext, useState } from "react";
import { TaskCategoryContext } from "../contexts/taskContext";

function AddEditTaskModal({ onClose, isAdd, updateTask, onAddUpdate }) {
  const [validationErrors, setValidationErrors] = useState({});
  const [task, setTask] = useState(updateTask);
  const { categories } = useContext(TaskCategoryContext);
  const validate = () => {
    const errors = {};
    if (!task.taskName.trim()) errors.taskName = "Title is required.";
    if (!task.category.trim()) errors.category = "Category is required.";
    if (!task.description.trim())
      errors.description = "Description is required.";
    if (!task.dueDate) errors.dueDate = "Date is required.";

    return errors;
  };
  const handleChange = (evt) => {
    const name = evt.target.name;
    let value = evt.target.value;

    setTask({
      ...task,
      [name]: value,
    });
    // Clear validation error for the field
    setValidationErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    onClose();
    if (isAdd) {
      onAddUpdate("ADD", task);
    } else {
      onAddUpdate("UPDATE", task);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute inset-0 flex items-center justify-center p-4 max-h-[90vh] overflow-auto">
        <div className="w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 bg-gray-800 rounded-lg shadow-xl">
          <div className="p-6">
            <h2 className="mb-6 text-2xl font-bold text-green-400">
              Create Task
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="taskName"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Task Name
                </label>
                <input
                  type="text"
                  id="taskName"
                  name="taskName"
                  required
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                  onChange={handleChange}
                  value={task.taskName}
                />
                {validationErrors.taskName && (
                  <p className="text-red-500 text-sm">
                    {validationErrors.taskName}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="3"
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                  onChange={handleChange}
                  value={task.description}
                ></textarea>
                {validationErrors.description && (
                  <p className="text-red-500 text-sm">
                    {validationErrors.description}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="dueDate"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Due Date
                </label>
                <input
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                  onChange={handleChange}
                  value={task.dueDate}
                />
                {validationErrors.dueDate && (
                  <p className="text-red-500 text-sm">
                    {validationErrors.dueDate}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                  onChange={handleChange}
                  value={task.category}
                >
                  <option value="">--Select Category--</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                  {/* <option value="To-Do">To-Do</option>
                  <option value="On Progress">On Progress</option>
                  <option value="Done">Done</option>
                  <option value="Revised">Revised</option> */}
                </select>
                {validationErrors.category && (
                  <p className="text-red-500 text-sm">
                    {validationErrors.category}
                  </p>
                )}
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                  onClick={handleSave}
                >
                  Create Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEditTaskModal;
