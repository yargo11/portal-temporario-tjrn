import { Cards } from '../../components/Cards'
import Banner from '../../components/PageMenu/Banner'
import MenuCards from '../../components/PageMenu/MenuCards'
import styles from './styles.module.scss'

export default function operadoresdodireito() {
    return (
        <>
            <Banner title="Operadores do Direito" />
            <div className={styles.Content}>

                <h1>Sitemas</h1>

                <div className={styles.CardOptions}>
                    <MenuCards
                        title="Plenário Virtual"
                        anchor="http://plenariovirtual.tjrn.jus.br/"
                    />

                    <MenuCards
                        title="PJe"
                        anchor=""
                    />

                    <MenuCards
                        title="Sistema de Registro de Indisponibilidade"
                        anchor="https://apps.tjrn.jus.br/siri/f/public/consultarIndisponibilidade/index.xhtml"
                    />

                    <MenuCards
                        title="Sistema Eletrônico de Execução Unificado (SEEU)"
                        anchor="https://seeu.pje.jus.br/seeu/"
                    />

                    <MenuCards
                        title="Calculadoras"
                        anchor="/acesso-rapido/calculadora/"
                    />

                    <MenuCards
                        title="Sistemas do CNJ"
                        anchor="https://www.cnj.jus.br/sistemas/"
                    />

                    <MenuCards
                        title="RENAJUD"
                        anchor="https://renajud.denatran.serpro.gov.br/renajud/login.jsf"
                    />

                    <MenuCards
                        title="INFOSEG"
                        anchor="https://www.cnj.jus.br/sistemas/infoseg/"
                    />

                    <MenuCards
                        title="INFOJUD"
                        anchor="https://www.cnj.jus.br/sistemas/infojud/"
                    />

                    <MenuCards
                        title="Bacen Jud"
                        anchor="https://www.bcb.gov.br/?bcjud"
                    />

                    <MenuCards
                        title="PROJUDI"
                        anchor="https://projudi.tjrn.jus.br/projudi/"
                    />

                    <MenuCards
                        title="Push"
                        anchor="http://esaj.tjrn.jus.br/sajcas/login?service=http%3A%2F%2Fesaj.tjrn.jus.br%2Fpush%2Fj_spring_cas_security_check"
                    />

                    <MenuCards
                        title="CEP - Controle Estatístico de Prisões"
                        anchor="http://sistemasdis-01.tjrn.jus.br/cep/login.jsf"
                    />
                </div>

                <h1>Serviçoes e Informações</h1>

                <div className={styles.CardOptions}>
                    <MenuCards
                        title="Sustentação Oral (Formulário)"
                        anchor="http://sistemasdis-01.tjrn.jus.br/formularioJudiciario/inicial.jsf"
                    />

                    <MenuCards
                        title="Súmulas"
                        anchor="/menu/judicial/sumulas"
                    />

                    <MenuCards
                        title="Plantão do Judiciário "
                        anchor="/produtividade-e-funcionamento/plantao-do-judiciario/"
                    />

                    <MenuCards
                        title="Pauta de Julgamento"
                        anchor="http://transparencia.tjrn.jus.br/index.php/orgaos-colegiados/pautas-julgamento-menu"
                    />

                    <MenuCards
                        title="Calendário das Sessões de Julgamento"
                        anchor="/operadores-do-direito/calendario-das-sessoes-de-julgamento"
                    />

                    <MenuCards
                        title="Jurisprudência "
                        anchor="https://jurisprudencia.tjrn.jus.br/"
                    />

                    <MenuCards
                        title="Envio de Memorial"
                        anchor=""
                    />

                    <MenuCards
                        title="Peticionamento Eletrônico de 1º Grau"
                        anchor="http://esaj.tjrn.jus.br/esaj/portal.do?servico=820100"
                    />

                    <MenuCards
                        title="Tabela de Custas"
                        anchor="/menu/judicial/tabela-de-custas/"
                    />

                    <MenuCards
                        title="Depósito Judicial"
                        anchor="https://www.bb.com.br/pbb/pagina-inicial/setor-publico/judiciario/depositos-judiciais#/"
                    />

                    <MenuCards
                        title="Portaria Nº 295/2015"
                        anchor="/files/operadores-do-direito/portaria-295-2015.pdf"
                    />
                </div>

                <h1>Estudantes</h1>

                <div className={styles.CardOptions}>

                    <MenuCards
                        title="Jurisprudência"
                        anchor="https://jurisprudencia.tjrn.jus.br/"
                    />

                    <MenuCards
                        title="Central de Estágio"
                        anchor="http://centraldeestagio.tjrn.jus.br/"
                    />
                </div>
            </div>
        </>
    )
}