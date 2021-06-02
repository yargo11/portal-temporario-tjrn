import styles from '../styles.module.scss';
import { FileInterface } from '../../../interfaces/generalFileInterface';
import { FaRegFileWord } from "react-icons/fa";
import { FiDownload } from 'react-icons/fi';

export default function FileDoc({title, anchor, description}: FileInterface) {
    return (
        <div className={styles.Files}>
            <div>
                <p>{title}</p>
                <span><FaRegFileWord/>DOC</span>
                <p>{description}</p>
            </div>
            <a href={anchor}><FiDownload /><span>Baixar Arquivo</span></a>
        </div>
    );
}