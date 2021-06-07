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
                                        Plenário Virtual 
                                    </a>
                                </li>

                                <li>
                                    < a href="/operadores-do-direito/pje">
                                        PJe 
                                    </a>
                                </li>

                                <li>
                                    < a href="https://apps.tjrn.jus.br/siri/f/public/consultarIndisponibilidade/index.xhtml">
                                        Sistema de Registro de Indisponibilidade 
                                    </a>
                                </li>

                                <li>
                                    < a href="https://seeu.pje.jus.br/seeu/">
                                        Sistema Eletrônico de Execução Unificado (SEEU) 
                                    </a>
                                </li>

                                <li>
                                    < a href="/acesso-rapido/calculadora/">
                                        Calculadoras 
                                    </a>
                                </li>

                                <li>
                                    < a href="https://www.cnj.jus.br/sistemas/">
                                        Sistemas do CNJ 
                                    </a>
                                </li>

                                <li>
                                    < a href="https://renajud.denatran.serpro.gov.br/renajud/login.jsf">
                                        RENAJUD 
                                    </a>
                                </li>

                                <li>
                                    < a href="https://www.cnj.jus.br/sistemas/infoseg/">
                                        INFOSEG 
                                    </a>
                                </li>

                                <li>
                                    < a href="https://www.cnj.jus.br/sistemas/infojud/">
                                        INFOJUD 
                                    </a>
                                </li>

                                <li>
                                    < a href="https://www.bcb.gov.br/?bcjud">
                                        Bacen Jud 
                                    </a>
                                </li>

                                <li>
                                    < a href="https://projudi.tjrn.jus.br/projudi/">
                                        PROJUDI 
                                    </a>
                                </li>

                                <li>
                                    < a href="http://esaj.tjrn.jus.br/sajcas/login?service=http%3A%2F%2Fesaj.tjrn.jus.br%2Fpush%2Fj_spring_cas_security_check">
                                        Push 
                                    </a>
                                </li>

                                <li>
                                    < a href="http://sistemasdis-01.tjrn.jus.br/cep/login.jsf">
                                        CEP - Controle Estatístico de Prisões 
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h3>Serviços e Informações</h3>

                    <div className={'col-12'}>
                        <div className={styles.Links}>
                            <ul>
                                <li>
                                    < a href="http://sistemasdis-01.tjrn.jus.br/formularioJudiciario/inicial.jsf">
                                        Sustentação Oral (Formulário) 
                                    </a>
                                </li>

                                <li>
                                    < a href="/menu/judicial/sumulas">
                                        Súmulas 
                                    </a>
                                </li>

                                <li>
                                    < a href="/produtividade-e-funcionamento/plantao-do-judiciario/">
                                        Plantão do Judiciário 
                                    </a>
                                </li>

                                <li>
                                    < a href="http://transparencia.tjrn.jus.br/index.php/orgaos-colegiados/pautas-julgamento-menu">
                                        Pauta de Julgamento 
                                    </a>
                                </li>

                                <li>
                                    < a href="/operadores-do-direito/calendario-das-sessoes-de-julgamento">
                                        Calendário das Sessões de Julgamento 
                                    </a>
                                </li>

                                <li>
                                    < a href="https://jurisprudencia.tjrn.jus.br/">
                                        Jurisprudência 
                                    </a>
                                </li>

                                <li>
                                    < a href="">
                                        Envio de Memorial 
                                    </a>
                                </li>

                                <li>
                                    < a href="http://esaj.tjrn.jus.br/esaj/portal.do?servico=820100">
                                        Peticionamento Eletrônico de 1º Grau 
                                    </a>
                                </li>

                                <li>
                                    < a href="/menu/judicial/tabela-de-custas/">
                                        Tabela de Custas 
                                    </a>
                                </li>

                                <li>
                                    < a href="https://www.bb.com.br/pbb/pagina-inicial/setor-publico/judiciario/depositos-judiciais#/">
                                        Depósito Judicial 
                                    </a>
                                </li>

                                <li>
                                    < a href="/files/operadores-do-direito/portaria-295-2015.pdf">
                                        Portaria Nº 295/2015 
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
                                        Jurisprudência 
                                    </a>
                                </li>

                                <li>
                                    < a href="http://centraldeestagio.tjrn.jus.br/">
                                        Central de Estágio 
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