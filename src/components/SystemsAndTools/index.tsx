import { Cards } from '../Cards';
import styles from './styles.module.scss';

export function SystemsAndTools() {
    return (
        <div className={styles.Container}>
            <div className={styles.Content + ' ' + 'container'}>

                <div className="row">
                    <div className="col-12">
                        <h1>Ferramentas e sistemas</h1>
                        <div className={'margin-top-32'}>
                            <div className='Border-bottom-line' />
                        </div>

                    </div>
                    <div className="col-12 mt-5">
                        <div className={styles.Card + ' ' + 'row'}>
                            <Cards
                                title="Serviços (SAJ)"
                                description="Consultas Processuais, Jurisprudência, Push, Pauta de Julgamento, Peticionamento
                    Eletrônico de 1º Grau, Conferência de Documento Digital do 1º Grau, Intimações e Citações On-line,
                    Certidões"
                                anchor="http://esaj.tjrn.jus.br/esaj/portal.do?servico=740000"
                            />

                            <Cards
                                title="PJe"
                                description="Acessos, Consulta Pública, Cadastro Juspostulandi, Autenticidade de Documentos"
                                anchor="/operadores-do-direito/pje"
                            />

                            <Cards
                                title="Plenário virtual"
                                description="Acompanhamento de Julgamento Virtual de Processos"
                                anchor="http://plenariovirtual.tjrn.jus.br/"
                            />

                            <Cards
                                title="SIGAJUS"
                                description="Sistema Integrado de Gestão Administrativa da Justiça"
                                anchor="http://sigajus.tjrn.jus.br/public/jsp/portal.jsf"
                            />

                            <Cards
                                title="OUVIDORIA"
                                description="Acesso a informação, dúvidas, críticas, sugestões, denúncias e reclamações"
                                anchor="http://ouvidoria.tjrn.jus.br/"
                            />

                            <Cards
                                title="PROJUD"
                                description="Processos dos Juizados Especiais"
                                anchor="https://projudi.tjrn.jus.br/projudi/"
                            />

                            <Cards
                                title="SISCONDJ"
                                description="O Sistema de Controle de Depósitos Judiciais. Permite a emissão de alvarás eletrônicos pelo Banco do Brasil"
                                anchor="https://apps.tjrn.jus.br/portalsiscondj/login.jsp;jsessionid=940E51C72E23F8B7F78A7290E7E88195"
                            />

                            <Cards
                                title="GPS-JUS"
                                description="Acompanhamento de metas do CNJ por unidades Judiciárias"
                                anchor="http://gpsjus.tjrn.jus.br/"
                            />
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}