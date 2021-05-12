import styles from './styles.module.scss';
import { FiArrowRight } from 'react-icons/fi';

interface CardOptions {
    title: string;
    icon?: string;
    description: string;
}

export default function MenuCards({ title, description }: CardOptions) {
    return (
        <div className={styles.Cards}>
            <a href="">
                <div>
                    <h3>{title}</h3>
                    <FiArrowRight />
                </div>
                <p>
                    {description}
                </p>
            </a>
        </div>
    )
}