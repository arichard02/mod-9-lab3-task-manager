import type { TaskItemProps, TaskStatus } from "../../types";

export default function TaskItem({
  task,
  onStatusChange,
  onDelete,
}: TaskItemProps) {

  function handleStatusChange() {
    const nextStatus: TaskStatus =
      task.status === "pending"
        ? "in-progress"
        : task.status === "in-progress"
        ? "completed"
        : "pending";

    onStatusChange(task.id, nextStatus);
  }

  function getStyle() {
    if (task.status === "completed") return "task-completed";
    if (task.status === "in-progress") return "task-in-progress";
    return "task";
  }

  return (
    <div className={getStyle()}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>
      <p>Due: {task.dueDate}</p>

      <button onClick={handleStatusChange}>
        Change Status
      </button>

      <button onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </div>
  );
}