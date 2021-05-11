import styles from './styles.module.scss';
import { FiChevronRight } from 'react-icons/fi';

export function FastAccess() {
    return (
        <div className={styles.Container}>
            <div className={styles.Content}>
                <h1>Acesso Rápido</h1>

                <hr />
                <div className={styles.Links}>
                    <ul>
                        <li>
                            < a href="#">
                                Transparência <FiChevronRight />
                            </a>
                        </li>

                        <li>
                            < a href="#">
                                Acesso à Informação <FiChevronRight />
                            </a>
                        </li>

                        <li>
                            < a href="#">
                                Diario de Justiça Eletrônico <FiChevronRight />
                            </a>
                        </li>

                        <li>
                            < a href="#">
                                Conciliação <FiChevronRight />
                            </a>
                        </li>

                        <li>
                            < a href="#">
                                Agile <FiChevronRight />
                            </a>
                        </li>

                        <li>
                            < a href="#">
                                Cadastro de Peritos <FiChevronRight />
                            </a>
                        </li>

                        <li>
                            < a href="#">
                                Cartórios <FiChevronRight />
                            </a>
                        </li>

                        <li>
                            < a href="#">
                                Certidões <FiChevronRight />
                            </a>
                        </li>

                        <li>
                            < a href="#">
                                Leilões Judiciais <FiChevronRight />
                            </a>
                        </li>

                        <li>
                            < a href="#">
                                Ouvidoria <FiChevronRight />
                            </a>
                        </li>

                        <li>
                            < a href="#">
                                FDJ <FiChevronRight />
                            </a>
                        </li>

                        <li>
                            < a href="#">
                                Calculadoras <FiChevronRight />
                            </a>
                        </li>

                        <li>
                            < a href="#">
                                Consulta Processual <FiChevronRight />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}