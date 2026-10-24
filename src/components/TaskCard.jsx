import StatusBadge from './StatusBadge.jsx';
import DeadlineChangedBadge from './DeadlineChangedBadge.jsx';
import { hasDeadlineChanged } from '../utils/taskUtils.js';

export default function TaskCard({ task, isSelected, onSelect }) {
  return (
    <button className={`record-card${isSelected ? ' selected' : ''}`}
      type="button"
      onClick={() => onSelect(task.id)}
      aria-pressed={isSelected}
>
      <span className="card-heading">
        <span> <strong>{task.title}</strong>
        <span className="meta"> · {task.id}</span>
        </span>
        <StatusBadge status={task.status} />
      </span>

      <span className="card-footer">
        <span>{task.course}</span>
        <span>
          Due {task.dueDate}
          {hasDeadlineChanged(task) && (
            <span className="meta"> (was {task.previousDueDate})</span>
          )}
        </span>
      </span>
      <DeadlineChangedBadge task={task} />
    </button>
  );
}
