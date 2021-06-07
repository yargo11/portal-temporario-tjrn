import styles from './styles.module.scss';
import Banner from "../../../../../components/PageMenu/Banner";

export default function custasetaxas() {
    return(
        <>
            <Banner title="Custas e Taxas" />
            <div className={styles.ContentContainer}>
                <div className={styles.Card}>
                    <a href='http://sistemas.tjrn.jus.br/fdj/'>
                        FDJ
                    </a>
                    <p>Fundo de Desenvolvimento da Justiça</p>
                    <p>Recolhimento de Custas Processuais, Multa Processual ou Custas Finais/Complementares</p>
                    <p>Recolhimento da Taxa de Fiscalização pelas Serventias Extrajudiciais</p>
                    <p>Demais casos previstos no art. 3º da Lei nº 9.278/2009</p>
                </div>

                <div className={styles.Card}>
                    <a href='https://apps.tjrn.jus.br/portalsiscondj/pages/guia/publica/'>
                        Depósito Judicial
                    </a>
                    <p>&nbsp;</p>
                    <p>Recolhimento de Custas Processuais, Multa Processual ou Custas Finais/Complementares</p>
                    <p>Recolhimento da Taxa de Fiscalização pelas Serventias Extrajudiciais</p>
                    <p>Demais casos previstos no art. 3º da Lei nº 9.278/2009</p>
                </div>

                <p className={styles.Text}>
                    1. Os recolhimentos destinados ao Fundo de Desenvolvimento da Justiça – FDJ são de natureza definitiva, orçamentária, ou seja, não são objeto de garantia do juízo ou contratual, nem de ressarcimento a terceiros.
                </p>
                <p className={styles.Text}>
                    Para gerar a guia do FDJ clique no menu FDJ acima à esquerda:
                </p>
                <p className={styles.Text}>
                    2. Valores que servirão de garantia, seja do juízo ou contratual, bem como de ressarcimento a terceiros devem ser recolhidos por meio de Depósito Judicial do Banco do Brasil S/A.
                </p>
                <p className={styles.Text}>
                    Para gerar guia de Depósito Judicial, clique no menu Depósito Judicial acima à direta:
                </p>
                <p className={styles.Text}>
                    3. Nos Juizados Especiais, no primeiro grau não haverá pagamento de custas processuais, senão quando a parte autora for condenada por decisão judicial.
                </p>
                <p className={styles.Text}>
                    Exemplo: não ter comparecido à audiência de conciliação poderá ensejar a condenação às custas processuais.
                </p>
                <p className={styles.Text}>
                    Neste caso, a parte interessada deverá recolher em guia do FDJ selecionando a comarca e a secretaria onde tramita o processo e o código 11001, conforme o valor da causa, item I – Depósito Prévio na 1ª Instância.
                </p>
                <p className={styles.Text}>
                    4. Nos Juizados Especiais, haverá o pagamento das custas processuais na ocasião de interposição de recurso, desde que não deferida a justiça gratuita.
                </p>
                <p className={styles.Text}>
                    Neste caso, a parte interessada deverá recolher em guia do FDJ selecionando a comarca e a secretaria onde tramita o processo e o código 12001, conforme o valor da causa, item II – Recurso no Juizado Especial Cível.
                </p>
                <p className={styles.Text}>
                    5. Para o pagamento das Custas Finais/Complementares deve ser observado:
                </p>
                <p className={styles.Text}>
                    5.1. Para as custas finais, se o processo tiver sido distribuído até 31 de dezembro de 2009, o código a ser marcado deverá ser o 15001.
                </p>
                <p className={styles.Text}>
                    5.2. Se o processo tiver sido distribuído a partir de 01 de janeiro de 2010, o código a ser marcado será o 11009.
                </p>
            </div>
        </>
    );
}