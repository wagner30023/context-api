import React, { useContext } from 'react';
import TaskContext from './TaskContext';

const TaskCounter = () => {
  const { completedTasks } = useContext(TaskContext);

  return (
    <div>
      <h2>Contador de Tarefas Concluídas</h2>
      <p>Total: {completedTasks}</p>
    </div>
  );
};

export default TaskCounter;
