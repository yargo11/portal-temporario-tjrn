import FileDoc from '../../../../components/File/FileDoc';
import Banner from '../../../../components/PageMenu/Banner';
import MenuCards from '../../../../components/PageMenu/MenuCards';
import styles from './styles.module.scss';

export default function tabeladecustas() {
    return (
        <>
            <Banner title="Tabela de Custas" />
            <div className={styles.Content}>

                <FileDoc
                    title="Portaria nº 132-TJ - de 15 de janeiro de 2021 (Valores atualizados de Custas e Emolumentos de
                         Atos Forenses Judiciais e dos Notários e Registradores do Estado do RN)"
                    anchor="/files/tabela-de-custas/Portaria_n_132-TJ_-_de_15_de_janeiro_de_2021.pdf"
                />

                <FileDoc
                    title="TABELA DE CUSTAS ATUALIZADA (Resolução nº 20-2020 e Tabela de Custas e Taxas)"
                    anchor="/files/tabela-de-custas/resolucao20-2020tjrn.pdf"
                />

                <FileDoc
                    title="LEI N.º 10.035, DE 29 DE DEZEMBRO DE 2015"
                    anchor="/files/tabela-de-custas/Lei-10035-2015_FDJ.pdf"
                />

                <FileDoc
                    title="RETIFICAÇÃO DA TABELA DE CUSTAS"
                    anchor="/files/tabela-de-custas/tabela-custas-retificacao.pdf"
                />

                <FileDoc
                    title="VALORES ATUALIZADOS DE CUSTAS E EMOLUMENTOS DE ATOS FORENSES JUDICIAIS 
                    (PORTARIA Nº 1.470/2015-TJ, DE 27 DE AGOSTO DE 2015)"
                    anchor="/files/tabela-de-custas/tabela-custas.pdf"
                />

                <FileDoc
                    title="RESOLUÇÃO N.º 15/2015-TJ, DE 19 DE AGOSTO DE 2015"
                    anchor="/files/tabela-de-custas/resolucao 15_2015_dje 19_08_2015.pdf"
                />

                <FileDoc
                    title="CUSTAS PROCESSUAIS, EMOLUMENTOS, FUNDO DE COMPENSAÇÃO DOS REGISTRADORES CIVIS DAS PESSOAS 
                    NATURAIS(FCRCPN) E TAXA DE FISCALIZAÇÃO E DÁ OUTRAS PROVIDÊNCIAS - LEI Nº 9.619, DE 10 DE MAIO DE 
                    2012"
                    anchor="/files/tabela-de-custas/lei-9619.pdf"
                />
            </div>
        </>
    )
}