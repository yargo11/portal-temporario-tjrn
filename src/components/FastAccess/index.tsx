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
                                        Transparência
                                    </a>
                                </li>

                                <li>
                                    < a href="http://ouvidoria.tjrn.jus.br/index.php/acesso-a-informacao">
                                        Acesso à Informação
                                    </a>
                                </li>

                                <li>
                                    < a href="http://diario.tjrn.jus.br/">
                                        Diario de Justiça Eletrônico
                                    </a>
                                </li>

                                <li>
                                    < a href="/acesso-rapido/conciliacao">
                                        Conciliação
                                    </a>
                                </li>

                                <li>
                                    < a href="https://agile.tjrn.jus.br/">
                                        Agile
                                    </a>
                                </li>

                                <li>
                                    < a href="/acesso-rapido/cadastro-de-peritos">
                                        Cadastro de Peritos
                                    </a>
                                </li>

                                <li>
                                    < a href="http://corregedoria.tjrn.jus.br/index.php/extrajudicial">
                                        Cartórios
                                    </a>
                                </li>

                                <li>
                                    < a href="/acesso-rapido/certidoes">
                                        Certidões
                                    </a>
                                </li>

                                <li>
                                    < a href="/acesso-rapido/leiloes-judiciais">
                                        Leilões Judiciais
                                    </a>
                                </li>

                                <li>
                                    < a href="http://ouvidoria.tjrn.jus.br/">
                                        Ouvidoria
                                    </a>
                                </li>

                                <li>
                                    < a href="/menu/judicial/fdj">
                                        FDJ
                                    </a>
                                </li>

                                <li>
                                    < a href="/acesso-rapido/calculadora">
                                        Calculadoras
                                    </a>
                                </li>

                                <li>
                                    < a href="/acesso-rapido/consulta-processual">
                                        Consulta Processual
                                    </a>
                                </li>

                                <li>
                                    < a href="/acesso-rapido/vice-presidencia">
                                        Vice-Presidência
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