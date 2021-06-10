import Banner from '../../../components/PageMenu/Banner';
import MenuCards from '../../../components/PageMenu/MenuCards';
import styles from '../styles.module.scss';


export default function judicial() {
    return (
        <>
            <Banner title="Judicial" />
            <div className={styles.CardOptions + ' ' + 'container'}>
                {/* <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 "> */}
                <MenuCards
                    title="Envio de Memorial"
                    anchor="/menu/judicial/envio-de-memorial"
                />

                <MenuCards
                    title="Pauta de Julgamento"
                    anchor="http://transparencia.tjrn.jus.br/index.php/orgaos-colegiados/pautas-julgamento-menu"
                />

                <MenuCards
                    title="Calendário das Sessões de Julgamento"
                    anchor="/menu/judicial/calendario-de-sessoes"
                    
                />

                <MenuCards
                    title="Custas - Tribunais Superiores"
                    anchor="/menu/judicial/custas-tribunais-superiores"
                />

                <MenuCards
                    title="STF - GRU Cobrança"
                    anchor="http://www.stf.jus.br/portal/recolhimentoDeCustas/recolhimentoDeCustas.asp"
                />

                <MenuCards
                    title="Tabela de Custas"
                    anchor="/menu/judicial/tabela-de-custas"
                />

                <MenuCards
                    title="Sistema SISCONJD"
                    anchor="https://apps.tjrn.jus.br/portalsiscondj/login.jsp;jsessionid=940E51C72E23F8B7F78A7290E7E88195"
                />

                <MenuCards
                    title="FDJ"
                    anchor="/menu/judicial/fdj"
                />

                <MenuCards
                    title="Súmulas"
                    anchor="/menu/judicial/sumulas"
                />

                <MenuCards
                    title="Peticionamento CNJ"
                    anchor="/files/peticionamento-cnj/peticionamento-eletronico-comunicacao-cnj.pdf"
                />
{/* A definir
                <MenuCards
                    title="Juizados Especiais"
                /> */}
{/* A definir
                <MenuCards
                    title="Foro da comarca de Natal"
                /> */}

                <MenuCards
                    title="SIGPEC"
                    description="Se sua instituição ainda não está cadastrada no SIGPEC"
                    anchor="https://apps.tjrn.jus.br/sigpecexterno/f/pages/preinstituicao/preinstituicao.xhtml"
                />

                <MenuCards
                    title="SIGPEC"
                    description="Ministério Público e Instituições já cadastradas"
                    anchor="https://apps.tjrn.jus.br/sigpecexterno/f/login.xhtml"
                />
                {/* </div> */}
            </div>
        </>
    )
}