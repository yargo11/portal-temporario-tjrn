import styles from './styles.module.scss';
import {FiArrowRight} from 'react-icons/fi';

interface CardOptions {
    title: string;
    icon?: string;
    description?: string;
    anchor?: string;
}

export default function MenuCards({title, description, anchor}: CardOptions) {
    return (
        <div className={styles.Cards + ' ' + 'col'}>
            <div className={styles.Content}>
                <a href={anchor}>
                    <div>
                        <h3>{title}</h3>
                        <FiArrowRight/>
                    </div>
                    <p>
                        {description}
                    </p>
                </a>
            </div>
        </div>
    )
}