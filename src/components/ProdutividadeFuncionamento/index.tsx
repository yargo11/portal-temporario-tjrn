import styles from './styles.module.scss';
import { FiChevronRight } from 'react-icons/fi';

export function ProdutividadeFuncionamento() {
    return (
        <div className={styles.Container}>
            <div className={styles.Content}>
                <h1>Produtividade e Funcionamento</h1>
                
                <div className={'col-12 margin-top-32'}>
                    <div className='Border-bottom-line' />
                </div>

                <h3>Atendimento ao Público <FiChevronRight color="#fff" /></h3>
                <p>
                    <span>Segunda a quinta:</span><br />
                    08h - 15h (15h às 18h apenas para medidas de urgência)<br />

                    <span>Sexta-feira:</span><br />
                    07h - 14h
                </p>

                <div className={styles.Links}>
                    <ul>
                        <li>
                            < a href="/produtividade-e-funcionamento/atendimento-a-imprensa">
                                Atendimento a Imprensa <FiChevronRight />
                            </a>
                        </li>
                        <li>
                            < a href="/produtividade-e-funcionamento/cerimonial-e-relacoes-publicas">
                                Cerimonial e Relações Públicas <FiChevronRight />
                            </a>
                        </li>
                        <li>
                            < a href="http://www.tjrn.jus.br/produtividade-covid19/">
                                Produtividade Semanal do Poder Judiciário do RN <FiChevronRight />
                            </a>
                        </li>
                        <li>
                            < a href="http://www.tjrn.jus.br/canaisdeatendimento/">
                                Canais de Atendimento <FiChevronRight />
                            </a>
                        </li>
                        <li>
                            < a href="/produtividade-e-funcionamento/plantao-do-judiciario">
                                Plantão do Judiciário <FiChevronRight />
                            </a>
                        </li>
                        <li>
                            < a href="http://ouvidoria.tjrn.jus.br/pdf/Carta_de_Servi%C3%A7os_ao_Cidad%C3%A3o_TJRN_.pdf">
                                Carta de Serviços ao Cidadão <FiChevronRight />
                            </a>
                        </li>
                        <li>
                            < a href="http://transparencia.tjrn.jus.br/">
                                Feriados <FiChevronRight />
                            </a>
                        </li>
                        <li>
                            < a href="/produtividade-e-funcionamento/estatistica">
                                Estatística <FiChevronRight />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}