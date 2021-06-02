import FilePdf from '../../../../components/File/FilePdf';
import Banner from '../../../../components/PageMenu/Banner';
import styles from './styles.module.scss';

export default function relatorioedesempenho() {
    return (
        <>
            <Banner title="Relatório de Desempenho do PSL" />
            <div className={styles.Content}>
                <FilePdf
                    title="Relatório de Desempenho do Plano de Logística Sustentável - Demostrativo 2019-2020-Gestão 2021-2022"
                    description="O presente Relatório de Desempenho do Plano de Logística Sustentável atende à exigência
                     do art. 23, §1º, da Resolução nº 201/2015-CNJ e apresenta análise da evolução das ações e metas de 
                     2019. O PLS-TJRN, instituído pela Res. nº 16/2018, tem por objetivo sistematizar e acompanhar 
                     práticas de sustentabilidade que visam à aplicação de recursos de forma eficiente e promoção do uso
                      consciente dos indicadores especificados."
                    anchor="/files/relatorio-e-desempenho/relatÓrio pls - ano-base 2020 - finalizado.pdf"
                />
                <FilePdf
                    title="Relatório Anual do Plano de Logística Sustentável do TJRN - Demonstrativo 2018-2019/Gestão 2019-2020"
                    anchor="/files/relatorio-e-desempenho/relatÓrio_pls_-_2019_-_esqueleto_finalizado_ii_(reparado).pdf"
                />
                <FilePdf
                    title="Plano de Logística Sustentável e Planos de Ação"
                    anchor="/files/relatorio-e-desempenho/pls-resoluÇÃo n.º 16-2015-tj.pdf"
                />
                <FilePdf
                    title="RELATÓRIO ANUAL DE DESEMPENHO DO PLS - Demonstrativo 2017-2018 Gestão 2019-2020"
                    description="O relatório anual de desempenho do plano de logística sustentável é uma ferramenta de 
                    acompanhamento das práticas de sustentabilidade e racionalização de gastos e consumo do TJRN. "
                    anchor="/files/relatorio-e-desempenho/relatÓrio pls  demonstrativo 2017 - 2018 - final.pdf"
                />
                <FilePdf
                    title="RELATÓRIO ANUAL DE DESEMPENHO DO PLS - Demonstrativo 2016-2017 Gestão 2017-2018"
                    description="O relatório anual de desempenho do plano de logística sustentável é uma ferramenta de 
                    acompanhamento das práticas de sustentabilidade e racionalização de gastos e consumo do TJRN."
                    anchor="/files/relatorio-e-desempenho/pls_tjrn_-_2018.pdf"
                />
            </div>
        </>
    )
}