import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, InvalidEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.css';
import { Header } from './components/Header';
import { NoTasks } from './components/NoTasks';

import { TaskTracker } from './components/TaskTracker';
import { Todo } from './components/Todo';
import './global.css';

interface Todo {
  id: string,
  text: string,
  isCompleted: boolean
}

function App() {
  const [tasks, setTasks] = useState<Todo[]>([])
  const [newTask, setNewTask] = useState<string>('');

  const completeTask = (id:string) => {
    setTasks((tasks) => {
      const selectedTask = tasks.find(todo => todo.id === id);
      const selectedTaskIndex = tasks.findIndex(todo => todo.id === id);

      const taskToChange = {
        id: selectedTask!.id,
        text: selectedTask!.text,
        isCompleted: !selectedTask!.isCompleted,
      };
      
      const tasksWithoutUpdatedOnes = tasks.filter(todo => todo.id !== id);
      tasksWithoutUpdatedOnes.splice(selectedTaskIndex, 0, taskToChange);
      return tasksWithoutUpdatedOnes;
    });
  }

  const deleteTask = (id:string) => {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== id
    });
    setTasks(tasksWithoutDeletedOne);
  }

  const handleNewTaskChange = (e:ChangeEvent<HTMLInputElement>) => {
      e.target.setCustomValidity('')
      setNewTask(e.target.value);
  }

  const handleNewTaskInvalid = (e:InvalidEvent<HTMLInputElement>) => {
    e.target.setCustomValidity('A nova tarefa não pode ser vazia')
  }

  const handleCreateNewTask = () => {
    if(newTask === '') {
      alert('A nova tarefa não pode ser vazia');
    } else {
      const newCreatedTask = {
        id:uuidv4(),
        text: newTask,
        isCompleted: false
      };
      setTasks([...tasks, newCreatedTask]);
      setNewTask('');
    }
  }

  return (
    <div className="App">
      <header>
          <Header />
      </header>
      <div className={styles.wrapper}>
        <div className={styles.createTasks}>
          <input 
            type='text' 
            placeholder='Adicione uma nova tarefa'
            value={newTask} 
            onChange={handleNewTaskChange}
            onInvalid={handleNewTaskInvalid}
            required
          />
          <button onClick={handleCreateNewTask}>Criar <PlusCircle size={18} /> </button>
        </div>
        <main className={styles.content}>
          <div>
            { tasks.length > 0 && (<TaskTracker tasks={tasks} />)}
            {tasks.length > 0 ? tasks.map(task => {
                return (
                  <Todo
                    key={task.id}
                    id={task.id}
                    isCompleted={task.isCompleted}
                    onCompleteTask={completeTask}
                    onDeleteTask={deleteTask}
                    text={task.text}
                  />
                )
              })
              :
              <NoTasks />
            }
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
