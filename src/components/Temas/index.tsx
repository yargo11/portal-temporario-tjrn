import styles from './styles.module.scss';

export function Temas() {
    return (
        <>
            <div className={styles.Container}>
                <div className={styles.Content}>
                    <h1>Temas</h1>

                    <div className={'col-12'}>
                        <div className={styles.Links}>
                            <ul>
                                <li>
                                    < a href="http://www.tjrn.jus.br/index.php/judicial/2013-03-07-17-23-58/justica-comum/formularios">
                                        Infância e Juventude
                                    </a>
                                </li>

                                <li>
                                    < a href="http://cemulher.tjrn.jus.br/">
                                        Mulher
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}