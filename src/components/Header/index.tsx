import styles from './styles.module.scss';
import { FiChevronRight } from 'react-icons/fi';

export function Header() {
    return (
        <div className={styles.Container}>
            <img src="/images/logo.svg" />
            <div>
                <ul>
                    <a href="">
                        <li>
                            INTRANET <FiChevronRight />
                        </li>
                    </a>
                    <a href="">
                        <li>
                            WEBMAIL <FiChevronRight />
                        </li>
                    </a>
                    <a href="">
                        <li>
                            TRANSPARÊNCIA <FiChevronRight />
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    )
}