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
                                    < a href="http://www.tjrn.jus.br/index.php/judicial/2013-03-07-17-23-58/direcao-do-foro/nucleo-de-pericias">
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
                                    < a href="http://www.tjrn.jus.br/index.php/judicial/2013-03-07-17-23-58/leiloes">
                                        Leilões Judiciais <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="http://ouvidoria.tjrn.jus.br/">
                                        Ouvidoria <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="#">
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