import React from 'react';
import TaskProvider from './contexts/TaskProvider';
import TaskList from './contexts/TaskList ';
import TaskCounter from './contexts/TaskCounter';


const App = () => {
  return (
    <TaskProvider>
      <div>
        <h1>Gerenciadorde Tarefas</h1>
        <TaskList />
        <TaskCounter />
      </div>
    </TaskProvider>
  );
};

export default App;
