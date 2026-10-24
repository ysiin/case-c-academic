import { hasDeadlineChanged } from '../utils/taskUtils.js';

// R2 (P10): marks a task whose official deadline changed.
// Renders nothing when the deadline is unchanged.
export default function DeadlineChangedBadge({ task }) {
  if (!hasDeadlineChanged(task)) return null;

  const label = `Deadline changed from ${task.previousDueDate} to ${task.dueDate}`;

  return (
    <span className="deadline-badge" title={label} aria-label={label}>
      <span aria-hidden="true">⚠</span> Deadline changed
    </span>
  );
}