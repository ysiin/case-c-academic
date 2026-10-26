import { isOverdue } from '../utils/overdue.js';

export default function OverdueBadge({ task }) {
  if (!isOverdue(task)) return null;
  return <span className="status-badge danger overdue-badge">Overdue</span>;
}