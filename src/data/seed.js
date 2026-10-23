// shortcut: only the latest deadline change is stored; upgrade to a history
// array if Q1 (change frequency) requires more than one previous deadline.
const tasks = [
  {
    id: 'TASK-001',
    title: 'Submit group outline',
    course: 'Software Engineering',
    dueDate: '2026-10-20',
    previousDueDate: null,
    changeSource: null,
    source: 'LMS',
    type: 'GROUP',
    status: 'TODO',
  },
  {
    id: 'TASK-002',
    title: 'Review database notes',
    course: 'Database Systems',
    dueDate: '2026-10-18',
    previousDueDate: null,
    changeSource: null,
    source: 'Personal Notes',
    type: 'INDIVIDUAL',
    status: 'IN_PROGRESS',
  },
  {
    id: 'TASK-003',
    title: 'Prepare presentation slides',
    course: 'Communication Skills',
    dueDate: '2026-10-22',
    previousDueDate: null,
    changeSource: null,
    source: 'Class Announcement',
    type: 'GROUP',
    status: 'TODO',
  },
  {
    id: 'TASK-004',
    title: 'Complete practice quiz',
    course: 'Discrete Mathematics',
    dueDate: '2026-10-16',
    previousDueDate: null,
    changeSource: null,
    source: 'LMS',
    type: 'INDIVIDUAL',
    status: 'DONE',
  },
  {
    id: 'TASK-005',
    title: 'Draft interface sketch',
    course: 'Human Computer Interaction',
    dueDate: '2026-10-24',
    previousDueDate: null,
    changeSource: null,
    source: 'Personal Notes',
    type: 'INDIVIDUAL',
    status: 'IN_PROGRESS',
  },
  {
    id: 'TASK-006',
    title: 'Read networking chapter',
    course: 'Computer Networks',
    dueDate: '2026-10-25',
    previousDueDate: '2026-10-23',
    changeSource: 'LMS',
    source: 'Class Announcement',
    type: 'INDIVIDUAL',
    status: 'TODO',
  },
];

export function createSeedData() {
  return { tasks: tasks.map((task) => ({ ...task })) };
}
