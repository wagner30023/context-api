import { useState } from 'react';
import TaskContext from './TaskContext';

/*
    * Nesse exemplo, temos um estado tasks que armazena a lista de tarefas, 
    * um estado completedTasks que armazena o número de tarefas concluídas e três funções addTask, 
    * completeTask e deleteTask para adicionar, marcar como concluída e excluir tarefas, 
    * respectivamente. Essas funções atualizam os estados conforme necessário.

    * Usando o provedor:
    * Agora podemos usar o nosso provedor de contexto em torno dos componentes que precisam acessar os dados das tarefas. 
    * Vamos criar um componente TaskList que exibe a lista de tarefas e um componente 
    * TaskCounter que exibe o contador de tarefas concluídas. 
*/

const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState(0);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const completeTask = (taskId) => {
        setTasks(tasks.map((task) => {
            if (task.id === taskId) {
                return { ...task, completed: true };
            }
            return task;
        }));
        setCompletedTasks(completedTasks + 1);
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    const taskContextValue = {
        tasks,
        addTask,
        completeTask,
        deleteTask,
        completedTasks,
    };

    return (
        <TaskContext.Provider value={taskContextValue}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskProvider;
