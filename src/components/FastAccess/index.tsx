import styles from './styles.module.scss';
import { FiChevronRight } from 'react-icons/fi';

export function FastAccess() {
    return (
        <div className={styles.Container }>
            <div className={styles.Content + ' ' + 'container'}>
                <div className={'row'}>
                    <div className={'col-12' + ' '}>
                        <h1>Acesso Rápido</h1>

                        <div className={'col-12 margin-top-32'}>
                            <div className='Border-bottom-line'/>
                        </div>
                    </div>
                    <div className={'col-12'}>
                        <div className={styles.Links}>
                            <ul>
                                <li>
                                    < a href="http://transparencia.tjrn.jus.br/">
                                        Transparência <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="http://ouvidoria.tjrn.jus.br/index.php/acesso-a-informacao">
                                        Acesso à Informação <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="http://diario.tjrn.jus.br/">
                                        Diario de Justiça Eletrônico <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="/acesso-rapido/conciliacao">
                                        Conciliação <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="https://agile.tjrn.jus.br/">
                                        Agile <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="/acesso-rapido/cadastro-de-peritos">
                                        Cadastro de Peritos <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="http://corregedoria.tjrn.jus.br/index.php/extrajudicial">
                                        Cartórios <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="/acesso-rapido/certidoes">
                                        Certidões <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="/acesso-rapido/leiloes-judiciais">
                                        Leilões Judiciais <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="http://ouvidoria.tjrn.jus.br/">
                                        Ouvidoria <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="/menu/judicial/fdj">
                                        FDJ <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="/acesso-rapido/calculadora">
                                        Calculadoras <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="/acesso-rapido/consulta-processual">
                                        Consulta Processual <FiChevronRight />
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}