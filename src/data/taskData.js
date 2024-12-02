const tasks = [
  {
    id: crypto.randomUUID(),
    taskName: "Content Writer",
    category: "To-Do",
    description: "Prepare proctor for client meeting",
    dueDate: "2024-12-13",
  },
  {
    id: crypto.randomUUID(),
    taskName: "Develop API",
    category: "To-Do",
    description: "Prepare proctor for client meeting",
    dueDate: "2024-12-13",
  },
  {
    id: crypto.randomUUID(),
    taskName: "Content Writer",
    category: "On Progress",
    description: "Prepare proctor for client meeting",
    dueDate: "2024-12-13",
  },
  {
    id: crypto.randomUUID(),
    taskName: "Content Writer",
    category: "Done",
    description: "Make Promotional Ads for Instagram fasto's",
    dueDate: "2024-12-13",
  },
  {
    id: crypto.randomUUID(),
    taskName: "Content Writer",
    category: "Done",
    description: "Make Promotional Ads for Instagram fasto's",
    dueDate: "2024-12-13",
  },
  {
    id: crypto.randomUUID(),
    taskName: "Content Writer",
    category: "Revised",
    description: "Make Promotional Ads for Instagram fasto's",
    dueDate: "2024-12-13",
  },
];

// function tasksGroupByCategory() {
//   return tasks.reduce((groups, task) => {
//     if (!groups[task.category]) {
//       groups[task.category] = [];
//     }
//     groups[task.category].push(task);
//     return groups;
//   }, {});
// }

// export { tasksGroupByCategory };

// function groupTasksByCategory(tasks) {
//   return tasks.reduce((groups, task) => {
//     (groups[task.category] ||= []).push(task); // Use logical OR assignment
//     return groups;
//   }, {});
// }
const categoriesColor = {
  "To-Do": "bg-indigo-600",
  "On Progress": "bg-yellow-500",
  Done: "bg-teal-500",
  Revised: "bg-rose-500",
};

const categories = ["To-Do", "On Progress", "Done", "Revised"];
// const groupedTasks = groupTasksByCategory(tasks);

export { categories, categoriesColor, tasks };
