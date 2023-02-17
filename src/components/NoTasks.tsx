import { ClipboardText } from 'phosphor-react';
import styles from './NoTasks.module.css';

export const NoTasks = () => {
    return (
        <div className={styles.noTasks}>
            <div className={styles.content}>
                <div className={styles.icon}><ClipboardText size={64} /></div>
                <div className={styles.text}>
                    <p><strong>Você ainda não possui tarefas criadas</strong></p>
                    <p>Crie e organize seus itens a fazer</p>
                </div>
            </div>
        </div>
    )
} 