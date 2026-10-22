import TaskCard from "./TaskCard.jsx";

export default function TaskList({
  tasks,
  selectedId,
  onSelect,
  showActiveOnly,
}) {
  if (tasks.length === 0) {
    const emptyMessage = showActiveOnly
      ? "No active tasks match your filter."
      : "No academic tasks are available.";

    return <div className="empty-state">{emptyMessage}</div>;
  }

  return (
    <ul className="record-list" aria-label="Academic tasks">
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskCard
            task={task}
            isSelected={task.id === selectedId}
            onSelect={onSelect}
          />
        </li>
      ))}
    </ul>
  );
}
