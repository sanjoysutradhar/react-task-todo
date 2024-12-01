import Header from "./Header";
import Sidebar from "./Sidebar";
import TaskContent from "./task/TaskContent";

function Pages() {
  return (
    <div className="bg-gray-900 text-white flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
        <TaskContent />
      </main>
    </div>
  );
}

export default Pages;
