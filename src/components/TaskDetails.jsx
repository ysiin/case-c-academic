import StatusBadge from './StatusBadge.jsx';
import DeadlineChangedBadge from './DeadlineChangedBadge.jsx';
import { hasDeadlineChanged } from '../utils/taskUtils.js';

export default function TaskDetails({ task, onToggleCompletion }) {
  if (!task) {
    return (
      <div className="empty-state">
        Select a task to view its details.
      </div>
    );
  }

  const isDone = task.status === 'DONE';
  const deadlineChanged = hasDeadlineChanged(task);

  return (
    <>
      <div className="panel-heading">
        <div>
          <p className="eyebrow">{task.id}</p>
          <h2>{task.title}</h2>
        </div>

        <StatusBadge status={task.status} />
      </div>

      <dl className="details-list">
        <dt>Course</dt>
        <dd>{task.course}</dd>

        <dt>Due date</dt>
        <dd>
          <span>{task.dueDate}</span>
          {' '}
          <DeadlineChangedBadge task={task} />
        </dd>

        {deadlineChanged && (
          <>
            <dt>Deadline change</dt>
            <dd>
              <div className="deadline-comparison">
                <span className="old-deadline">
                  {task.previousDueDate}
                </span>

                <span className="deadline-arrow" aria-hidden="true">
                  →
                </span>

                <span className="new-deadline">
                  {task.dueDate}
                </span>
              </div>
            </dd>

            <dt>Change source</dt>
            <dd>
              <span className="change-source-label">
                {task.changeSource || 'Not specified'}
              </span>
            </dd>
          </>
        )}

        <dt>Source</dt>
        <dd>{task.source}</dd>

        <dt>Type</dt>
        <dd>{task.type}</dd>
      </dl>

      <button
        className="primary-button"
        type="button"
        onClick={() => onToggleCompletion(task.id)}
      >
        {isDone ? 'Reopen Task' : 'Mark as Done'}
      </button>
    </>
  );
}
