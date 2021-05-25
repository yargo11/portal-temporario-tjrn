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
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                />

                <MenuCards
                    title="Pauta de Julgamento"
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                    anchor="http://transparencia.tjrn.jus.br/index.php/orgaos-colegiados/pautas-julgamento-menu"
                />

                <MenuCards
                    title="Calendário das Sessões de Julgamento"
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                />

                <MenuCards
                    title="Custas - Tribunais Superiores"
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                />

                <MenuCards
                    title="STF - GRU Cobrança"
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                    anchor="http://www.stf.jus.br/portal/recolhimentoDeCustas/recolhimentoDeCustas.asp"
                />

                <MenuCards
                    title="Tabela de Custas"
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                    anchor="/menu/judicial/tabela-de-custas"
                />

                <MenuCards
                    title="Sistema SISCONJD"
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                    anchor="https://apps.tjrn.jus.br/portalsiscondj/login.jsp;jsessionid=940E51C72E23F8B7F78A7290E7E88195"
                />

                <MenuCards
                    title="FDJ"
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                    anchor="/menu/judicial/fdj"
                />

                <MenuCards
                    title="Súmulas"
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                    anchor="/menu/judicial/sumulas"
                />

                <MenuCards
                    title="Peticionamento CNJ"
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                />

                <MenuCards
                    title="Juizados Especiais"
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                />

                <MenuCards
                    title="Foro da comarca de Natal"
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                />

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