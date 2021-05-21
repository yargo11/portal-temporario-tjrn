import styles from './styles.module.scss';
import { FiDownload } from 'react-icons/fi'

interface FileProps {
    title: string;
    anchor: string;
    description?: string
}


export function File({ title, anchor, description }: FileProps) {
    return (
        <div className={styles.Files}>
            <div>
                <p>{title}</p>
                <span><img src="/images/icons/word.svg" alt="Arquivo Word"/>DOC</span>
                <p>{description}</p>
            </div>
            <a href={anchor}><FiDownload /><span>Baixar Arquivo</span></a>
        </div>
    )
}