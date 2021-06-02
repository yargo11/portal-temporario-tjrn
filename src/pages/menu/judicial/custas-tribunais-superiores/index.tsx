import Banner from '../../../../components/PageMenu/Banner';
import MenuCards from '../../../../components/PageMenu/MenuCards';
import styles from './styles.module.scss';



export default function custastribunaissuperiores() {
    return (
        <>
            <Banner title="Custas - Tribunais Superiores" />
            <div className={styles.ContactOptions}>
                <h1>Custas - Tribunais Superiores</h1>
                <p id={styles.pHeader}>AJUDA PARA PREENCIMENTO DE RECURSO ESPECIAL E EXTRAORDINÁRIO</p>

                <h1>Recurso Especial</h1>
                <p id={styles.pDescription}>
                    Guia Principal do Valor Fixo: <a href="https://consulta.tesouro.fazenda.gov.br/gru_novosite/gru_simples.asp">clique aqui</a>
                </p>

                <p id={styles.pDescription}>
                    Porte Remessa e Retorno* Valor variável dependente de número de folhas, incluindo anexos e a petição.: <a href="https://consulta.tesouro.fazenda.gov.br/gru_novosite/gru_simples.asp">clique aqui</a>
                </p>

                <h1>Recurso Extraordinário</h1>
                <p id={styles.pDescription}>
                    Guia Principal do Valor Fixo: <a href="http://www.beninca.com.br">clique aqui</a>
                </p>

                <p id={styles.pDesciption}>
                    Em seguida clicar no Link: Impressão de Darfs Federais Preencher com o código da Receita: 1505
                </p>
                <p id={styles.pDescription}>
                    Porte Remessa e Retorno* Valor variável dependente de número de folhas, incluindo anexos e a petição: <a href="https://consulta.tesouro.fazenda.gov.br/gru_novosite/gru_simples.asp">clique aqui</a>
                </p>
                <p id={styles.pDescription}>
                    No Porte e Remessa e Retorno do Recurso Extraordinário metade do valor é para o STF e metade para o TJ,
                    por isso duas guias dividindo no valor total metade para cada guia.
                </p>

                <p id={styles.pDescription}>
                    EX: Num recurso de R$ 64,60<br />
                    1ª METADE: R$ 32,30<br />
                    2ª METADE: R$ 32,30
                </p>
                <p id={styles.pHeader}>
                    1º METADE DO VALOR
                </p>
                <p id={styles.pDescription}>
                    <a href="https://consulta.tesouro.fazenda.gov.br/gru_novosite/gru_simples.asp">clique aqui</a>
                </p>
                <p id={styles.pDescription}>
                    Mediante Guia de Recolhimento da União – GRU,<br />
                    Banco do Brasil, UG/Gestão 040001/00001,<br />
                    Código de Recolhimento 10820-0<br />
                    (STF - Ressarcimento de Despesas do Porte de Remessa e Retorno dos Autos);
                </p>
                <p id={styles.pHeader}>
                    2º METADE DO VALOR
                </p>
                <p id={styles.pDescription}>
                    <a href="http://sistemas.tjrn.jus.br/fdj/">clique aqui</a>
                </p>
                <p id={styles.pDescription}>
                    Escolha a opção – Natal – Segunda Instância<br />
                    Marque a opção de nº de folhas correspondentes<br />
                    Preencha os demais campos que informam dados da parte
                </p>
                <h1>Observações</h1>
                <p id={styles.pDescription}>
                    Nos sítios respectivos há tabelas referentes aos valores fixos do:
                </p>
                <p id={styles.pDescription}>
                    <ul>
                        <li>Recurso Especial: <a href="http://www.stj.gov.br/portal_stj/publicacao/download.wsp?tmp.arquivo=658">http://www.stj.gov.br/portal_stj/publicacao/download.wsp?tmp.arquivo=658 pg.2</a></li>
                        <li>Recurso Extraordinário: <a href="http://www.stf.gov.br/portal/cms/verTexto.asp?servico=processo">http://www.stf.gov.br/portal/cms/verTexto.asp?servico=processo</a></li>
                        <li>TabelaCusta do Porte e Remessa e Retorno referentes ao número de páginas.</li>
                    </ul>
                </p>
                <p id={styles.pDescription}>
                    O preenchimento das guias dependem desta tabela, consulte.
                </p>
                <p id={styles.pDescription}>
                    Este é um link utilizado para sua praticidade, pois estes serviços estão diretamente disponíveis nos sítios:<br />
                    <a href="www.stj.gov.br">www.stj.gov.br</a>  e <a href="www.stf.gov.br">www.stf.gov.br</a>.
                </p>
            </div>
        </>
    )
}