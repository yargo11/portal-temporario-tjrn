import styles from './styles.module.scss';

export function MainMenu() {
    return (
        <div className={styles.Container}>
            <div className={styles.Content}>
                <ul>
                    <a href="#">
                        <li>
                            Institucional
                        </li>
                    </a>
                    <a href="#">
                        <li>
                            Administrativo
                        </li>
                    </a>
                    <a href="#">
                        <li>
                            Precatórios
                        </li>
                    </a>
                    <a href="#">
                        <li>
                            Judicial
                        </li>
                    </a>
                    <a href="#">
                        <li>
                            Planejamento Estratégico
                        </li>
                    </a>
                    <a href="#">
                        <li>
                            Tecnologia da Informação

                        </li>
                    </a>
                    <a href="#">
                        <li>
                            Fale conosco
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    )
}