import { CheckSquare, Square, Trash } from "phosphor-react";

import styles from './Todo.module.css';

export interface TodoProps {
    id:string;
    isCompleted: boolean;
    onCompleteTask: (id:string) => void;
    onDeleteTask: (id:string) => void;
    text: string;
}

export const Todo = ({id, isCompleted, onCompleteTask, onDeleteTask,text}:TodoProps) => {
    const handleCompleteTask = () => { 
        onCompleteTask(id);
    }

    const handleDeleteTask = () => { 
        onDeleteTask(id);
    }

    return(
        <div className={styles.todo}>
            <div onClick={handleCompleteTask} className={styles.todoClickable}>
                <div>
                    {isCompleted && (
                        <CheckSquare 
                            className={styles.checked} 
                            size={20} 
                            weight="bold" 
                        />
                    )}
                    {!isCompleted && (<Square className={styles.notChecked} size={20}  />)}
                </div>
                <div className={isCompleted ? styles.todoTextWithLine : styles.todoText}>
                    <p>{text}</p>
                </div>
            </div>
            <div className={styles.trashButton}>
                <button onClick={handleDeleteTask}><Trash size={20} /></button>
            </div>
        </div>
    )
}