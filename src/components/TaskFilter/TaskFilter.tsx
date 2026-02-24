import { useState } from "react";
import type { TaskFilterProps, TaskStatus } from "../../types";

export default function TaskFilter({ onFilterChange }: TaskFilterProps) {
  const [status, setStatus] = useState<TaskStatus | "">("");
  const [priority, setPriority] = useState<
    "low" | "medium" | "high" | ""
  >("");

  function handleFilterChange(
    newStatus: typeof status,
    newPriority: typeof priority
  ) {
    setStatus(newStatus);
    setPriority(newPriority);

    onFilterChange({
      status: newStatus || undefined,
      priority: newPriority || undefined,
    });
  }

  return (
    <div>
      <label>Status: </label>
      <select
        value={status}
        onChange={(e) =>
          handleFilterChange(
            e.target.value as TaskStatus,
            priority
          )
        }
      >
        <option value="">All Statuses</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <label>Priority: </label>
      <select
        value={priority}
        onChange={(e) =>
          handleFilterChange(
            status,
            e.target.value as "low" | "medium" | "high"
          )
        }
      >
        <option value="">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
}