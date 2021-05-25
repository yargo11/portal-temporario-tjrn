import Link from 'next/link';
import styles from './styles.module.scss';

export function OperadoresDoDireito() {
    return (
        <div className={styles.Container}>
            <div className={styles.Content}>
                <h1><Link href="/operadores-do-direito">Operadores do Direito</Link></h1>
                <h1>Temas</h1>
            </div>
        </div >
    )
}