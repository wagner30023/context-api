import React, { useContext } from 'react';
import TaskContext from './TaskContext';

const TaskList = () => {
  const { tasks, completeTask, deleteTask } = useContext(TaskContext);

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} {task.completed ? "(Concluída)" : ""}
            <button onClick={() => completeTask(task.id)}>
              Concluir
            </button>
            <button onClick={() => deleteTask(task.id)}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
