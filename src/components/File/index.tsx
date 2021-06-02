import styles from './styles.module.scss';
import { FiDownload } from 'react-icons/fi'

interface FileProps {
    title: string;
    anchor: string;
    description?: string;
    icon: string;
    alt: string;
    spanDescription: string;
}


export function File({ title, anchor, description, icon, alt, spanDescription }: FileProps) {
    return (
        <div className={styles.Files}>
            <div>
                <p>{title}</p>
                <span><img src={icon} alt={alt}/>{spanDescription}</span>
                <p>{description}</p>
            </div>
            <a href={anchor}><FiDownload /><span>Baixar Arquivo</span></a>
        </div>
    )
}