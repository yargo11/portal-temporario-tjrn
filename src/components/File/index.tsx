import styles from './styles.module.scss';
import { FiDownload } from 'react-icons/fi'

interface FileProps {
    title: string;
    anchor: string
}


export function File({ title, anchor }: FileProps) {
    return (
        <div className={styles.Files}>
            <div>
                <p>{title}</p>
                <span><img src="/images/icons/word.svg" alt="Arquivo Word"/>DOC</span>
            </div>
            <a href={anchor}><FiDownload /><span>Baixar Arquivo</span></a>
        </div>
    )
}