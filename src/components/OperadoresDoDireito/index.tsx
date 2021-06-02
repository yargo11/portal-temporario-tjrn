import Link from 'next/link';
import styles from './styles.module.scss';
import { FiChevronRight } from 'react-icons/fi'

export function OperadoresDoDireito() {
    return (
        <>
            <div className={styles.Container}>
                <div className={styles.Content}>
                    <h1>Operadores do Direito</h1>
                    {/* <h1><Link href="/operadores-do-direito">Operadores do Direito</Link></h1> */}

                    <h3>Sistemas</h3>
                    <div className={'col-12'}>
                        <div className={styles.Links}>
                            <ul>
                                <li>
                                    < a href="http://plenariovirtual.tjrn.jus.br/">
                                        Plenário Virtual <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="/operadores-do-direito/pje">
                                        PJe <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="https://apps.tjrn.jus.br/siri/f/public/consultarIndisponibilidade/index.xhtml">
                                        Sistema de Registro de Indisponibilidade <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="https://seeu.pje.jus.br/seeu/">
                                        Sistema Eletrônico de Execução Unificado (SEEU) <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="/acesso-rapido/calculadora/">
                                        Calculadoras <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="https://www.cnj.jus.br/sistemas/">
                                        Sistemas do CNJ <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="https://renajud.denatran.serpro.gov.br/renajud/login.jsf">
                                        RENAJUD <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="https://www.cnj.jus.br/sistemas/infoseg/">
                                        INFOSEG <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="https://www.cnj.jus.br/sistemas/infojud/">
                                        INFOJUD <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="https://www.bcb.gov.br/?bcjud">
                                        Bacen Jud <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="https://projudi.tjrn.jus.br/projudi/">
                                        PROJUDI <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="http://esaj.tjrn.jus.br/sajcas/login?service=http%3A%2F%2Fesaj.tjrn.jus.br%2Fpush%2Fj_spring_cas_security_check">
                                        Push <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="http://sistemasdis-01.tjrn.jus.br/cep/login.jsf">
                                        CEP - Controle Estatístico de Prisões <FiChevronRight />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h3>Serviçoes e Informações</h3>

                    <div className={'col-12'}>
                        <div className={styles.Links}>
                            <ul>
                                <li>
                                    < a href="http://sistemasdis-01.tjrn.jus.br/formularioJudiciario/inicial.jsf">
                                        Sustentação Oral (Formulário) <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="/menu/judicial/sumulas">
                                        Súmulas <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="/produtividade-e-funcionamento/plantao-do-judiciario/">
                                        Plantão do Judiciário <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="http://transparencia.tjrn.jus.br/index.php/orgaos-colegiados/pautas-julgamento-menu">
                                        Pauta de Julgamento <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="/operadores-do-direito/calendario-das-sessoes-de-julgamento">
                                        Calendário das Sessões de Julgamento <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="https://jurisprudencia.tjrn.jus.br/">
                                        Jurisprudência <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="">
                                        Envio de Memorial <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="http://esaj.tjrn.jus.br/esaj/portal.do?servico=820100">
                                        Peticionamento Eletrônico de 1º Grau <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="/menu/judicial/tabela-de-custas/">
                                        Tabela de Custas <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="https://www.bb.com.br/pbb/pagina-inicial/setor-publico/judiciario/depositos-judiciais#/">
                                        Depósito Judicial <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="/files/operadores-do-direito/portaria-295-2015.pdf">
                                        Portaria Nº 295/2015 <FiChevronRight />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h3>Estudantes</h3>

                    <div className={'col-12'}>
                        <div className={styles.Links}>
                            <ul>
                                <li>
                                    < a href="https://jurisprudencia.tjrn.jus.br/">
                                        Jurisprudência <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="http://centraldeestagio.tjrn.jus.br/">
                                        Central de Estágio <FiChevronRight />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>



                </div>
            </div >
            <div className={styles.Container2}>
                <div className={styles.Content}>
                    <h1>Temas</h1>

                    <div className={'col-12'}>
                        <div className={styles.Links}>
                            <ul>
                                <li>
                                    < a href="http://www.tjrn.jus.br/index.php/judicial/2013-03-07-17-23-58/justica-comum/formularios">
                                        Infância e Juventude  <FiChevronRight />
                                    </a>
                                </li>

                                <li>
                                    < a href="http://cemulher.tjrn.jus.br/">
                                        Mulher <FiChevronRight />
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