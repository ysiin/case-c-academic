export default function TaskFilter({ showActiveOnly, activeCount, onChange }) {
  return (
    <button
      className={showActiveOnly ? 'primary-button' : 'secondary-button'}
      type="button"
      aria-pressed={showActiveOnly}
      onClick={() => onChange(!showActiveOnly)}
    >
      {showActiveOnly ? 'Showing Active Tasks' : 'Show Active Tasks'} ({activeCount})
    </button>
  );
}