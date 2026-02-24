import { useState } from "react";
import TaskList from "./components/TaskList/TaskList";
import type { Task, TaskStatus } from "./types";
import "./App.css";

const initialTasks: Task[] = [
  {
    id: "001",
    title: "Task 1",
    description: "Description 1",
    status: "pending",
    priority: "low",
    dueDate: "2026-02-19",
  },
  {
    id: "002",
    title: "Task 2",
    description: "Description 2",
    status: "in-progress",
    priority: "medium",
    dueDate: "2026-02-15",
  },
  {
    id: "003",
    title: "Task 3",
    description: "Description 3",
    status: "completed",
    priority: "high",
    dueDate: "2026-02-13",
  },
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  function handleStatusChange(taskId: string, newStatus: TaskStatus) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, status: newStatus }
          : task
      )
    );
  }

  function handleDelete(taskId: string) {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== taskId)
    );
  }

  return (
    <>
      <h1>My Task List</h1>
      <TaskList
        tasks={tasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </>
  );
}

export default App;