import { Task } from './task';
import { tasks } from '../tasks';

export function TaskList() {
  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} tasks={task} />
      ))}
    </ul>
  );
}
