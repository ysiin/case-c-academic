export function getTaskCounts(tasks) {
  return {
    total: tasks.length,
    done: tasks.filter((task) => task.status === 'DONE').length,
  };
}

export function toggleTaskCompletion(tasks, taskId) {
  return tasks.map((task) => {
    if (task.id !== taskId) return task;

    return {
      ...task,
      status: task.status === 'DONE' ? 'TODO' : 'DONE',
    };
  });
}

// Today's date as YYYY-MM-DD in the browser's local time, the same format as task.dueDate.
function getTodayString(now = new Date()) {
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// R1 (P10): a task is active when its official deadline has not passed
// and it is not marked done. A task due today is still active.
export function isActiveTask(task, today = getTodayString()) {
  return task.status !== 'DONE' && task.dueDate >= today;
}

export function getActiveTasks(tasks, today = getTodayString()) {
  return tasks.filter((task) => isActiveTask(task, today));
}