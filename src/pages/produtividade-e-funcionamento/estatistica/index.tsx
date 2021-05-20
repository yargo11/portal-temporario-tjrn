import Banner from '../../../components/PageMenu/Banner';
import styles from './styles.module.scss';

export default function estatistica() {
    return (
        <>
            <Banner title="Estatística" />
            <div className={styles.ContactOptions}>

                <h1>Painéis das Metas Nacionais do TJRN:</h1>
                <p id={styles.pHeader}>
                    Meta 1
                </p>
                <p id={styles.pDescription}>
                    <a href="http://gpsjus.tjrn.jus.br/1grau_metas.php?meta=1" target="_blank"> Julgar mais processos
                    que os distribuídos</a>
                </p>

                <p id={styles.pHeader}>
                    Meta 2
                </p>
                <p id={styles.pDescription}>
                    <a href="http://gpsjus.tjrn.jus.br/1grau_metas.php?meta=2" target="_blank"> Julgar processos mais
                    antigos</a>
                </p>

                <p id={styles.pHeader}>
                    Meta 4
                </p>
                <p id={styles.pDescription}>
                    <a href="http://gpsjus.tjrn.jus.br/1grau_metas.php?meta=4" target="_blank"> Priorizar o julgamento
                    dos processos relativos a crimes contra a administração pública, à improbidade administrativa e aos
                    ilícitos eleitorais</a>
                </p>

                <p id={styles.pHeader}>
                    Meta 6
                </p>
                <p id={styles.pDescription}>
                    <a href="http://gpsjus.tjrn.jus.br/1grau_metas.php?meta=6" target="_blank"> Priorizar o julgamento
                    das ações coletivas – Justiça Estadual</a>
                </p>

                <p id={styles.pHeader}>
                    Meta 8
                </p>
                <p id={styles.pDescription}>
                    <a href="http://gpsjus.tjrn.jus.br/1grau_metas.php?meta=8" target="_blank"> Priorizar o julgamento
                    dos processos relacionados ao feminicídio e à violência doméstica e familiar contra as mulheres</a>
                </p>

                <p id={styles.pHeader}>
                    Meta 9
                </p>
                <p id={styles.pDescription}>
                    <a href="http://gpsjus.tjrn.jus.br/1grau_metas.php?meta=9" target="_blank"> Realizar ações de
                    prevenção ou desjudicialização de litígios voltadas aos objetivos de desenvolvimento sustentável
                    (ODS), da Agenda 2030. </a>
                </p>

                <p id={styles.pHeader}>
                    Justiça em Números
                </p>
                <p id={styles.pDescription}>
                    <a href="https://paineis.cnj.jus.br/QvAJAXZfc/opendoc.htm?document=qvw_l%2FPainelCNJ.qvw&host=QVS%40neodimio03&anonymous=true&sheet=shResumoDespFT" target="_blank">
                        O Relatório Justiça em Números divulga a realidade dos tribunais brasileiros, com muitos
                        detalhamentos da estrutura e litigiosidade, além dos indicadores e das análises essenciais para
                    subsidiar a Gestão Judiciária brasileira. Para ver os dados do TJRN, use o filtro de tribunal</a>
                </p>

                <p id={styles.pHeader}>
                    Módulo de produtividade Mensal
                </p>
                <p id={styles.pDescription}>
                    <a href="https://paineis.cnj.jus.br/QvAJAXZfc/opendoc.htm?document=qvw_l%2FPainelCNJ.qvw&host=QVS%40neodimio03&anonymous=true&sheet=shPDPrincipal" target="_blank">
                        O Módulo de Produtividade Mensal do Poder Judiciário, integrado pelos dados de produtividade de juízes e serventias judiciárias.
                    </a>
                </p>

                <p id={styles.pHeader}>
                    Mapas Saúde
                </p>
                <p id={styles.pDescription}>
                    <a href="http://gpsjus.tjrn.jus.br/index.php?redirect=http://gpsjus.tjrn.jus.br/1grau_mapas_saude.php" target="_blank">
                        Clique Aqui.
                    </a>
                </p>

                <p id={styles.pHeader}>
                    Medidas protetivas
                </p>
                <p id={styles.pDescription}>
                    <a href="http://gpsjus.tjrn.jus.br/index.php?redirect=http://gpsjus.tjrn.jus.br/1grau_mapas_medidas_protetivas.php" target="_blank"> Clique Aqui.</a>
                </p>

            </div>
        </>
    )
}