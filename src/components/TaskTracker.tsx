import styles from './TaskTracker.module.css';

interface Task {
    id: string;
    text: string;
    isCompleted: boolean;
}

interface TaskTrackerProps {
    tasks:Task[];
}

export const TaskTracker = ({tasks}:TaskTrackerProps) => {
    
    const createdTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.isCompleted).length;
  
    
    return (
        <div className={styles.taskTracker}>
            <p className={styles.createdTasks}><strong>Tarefas criadas:</strong> <span>{createdTasks}</span></p>
            <p className={styles.completedTasks}>
               { completedTasks >= createdTasks ?
                    ( 
                        <><strong>Todas as tarefas foram concluídas!</strong></>
                    )
                    :
                    ( 
                        <>Tarefas concluidas: <span>{completedTasks} de {createdTasks}</span></>
                    )
               }
            </p>
        </div>
    )
}