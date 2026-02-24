import { useState } from "react";
import type { TaskListProps, TaskStatus } from "../../types";
import TaskItem from "../TaskItem/TaskItem";
import TaskFilter from "../TaskFilter/TaskFilter";

export default function TaskList({
  tasks,
  onStatusChange,
  onDelete,
}: TaskListProps) {

  const [filters, setFilters] = useState<{
    status?: TaskStatus;
    priority?: "low" | "medium" | "high";
  }>({});

  const filteredTasks = tasks.filter((task) => {
    return (
      (!filters.status || task.status === filters.status) &&
      (!filters.priority || task.priority === filters.priority)
    );
  });

  return (
    <div>
      <TaskFilter onFilterChange={setFilters} />

      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}