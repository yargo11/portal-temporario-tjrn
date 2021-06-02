import styles from './styles.module.scss';
import Banner from "../../../../../components/PageMenu/Banner";

export default function devolucaodecustas() {
    return (
        <>
            <Banner title="FDJ" />
            <div className={styles.ContentContainer}>
                <h1>RESTITUIÇÃO DE CUSTAS – INFORMAÇÕES GERAIS</h1>

                <p>A Portaria nº 316/2019, de 15 de fevereiro de 2019, disciplina o procedimento de restituição de valores recolhidos em favor do Fundo de Desenvolvimento da Justiça.</p>
                <p>Os interessados na restituição podem utilizar o modelo fornecido pelo Departamento de Orçamento e Arrecadação, que se encontra disponível aos usuários no sítio eletrônico do Tribunal de Justiça, ou no referido Departamento.</p>

                <div className={styles.FileList}>
                    <a href='/files/devolucao-de-custas/(Ler Edi_347_343o) - Portaria_316_2019-TJ.pdf'>
                        <div className={styles.FileCard}>
                        <img src={'/images/icons/file_download_black_18dp.svg'} alt='download da portaria Nº 316/2019'/>
                            <p>Portaria</p>
                            <p>Nº 316/2019</p>
                        </div>
                    </a>
                    <a href='/files/devolucao-de-custas/Formulario_FDJ.docx'>
                        <div className={styles.FileCard}>
                        <img src={'/images/icons/file_download_black_18dp.svg'} alt='download do formulário modelo'/>
                            <p>Formulário</p>
                            <p>Modelo</p>
                        </div>
                    </a>
                </div>

                <p className={styles.MainText}>I – O requerimento deve ser apresentado após 30 (trinta) dias a partir da data de pagamento da guia do FDJ, contendo os seguintes dados, essenciais para o processamento do ressarcimento:</p>
                <p className={styles.SubText}>a) nome, número do CPF/CNPJ da parte interessada e/ou de seu procurador;</p>
                <p className={styles.SubText}>b) endereço completo;</p>
                <p className={styles.SubText}>c) telefone e e-mail de contato;</p>
                <p className={styles.SubText}>d) os dados bancários da conta destinatária da devolução;</p>
                <p className={styles.SubText}>e) os dados da guia FDJ e o motivo do pedido;</p>
                <p><span className={styles.MainText}>Observação: </span>O prazo de 30 dias não é exigido se o pedido de devolução for relacionado à Taxa de Fiscalizada dos serviços realizados nas Serventias Extrajudiciais ou para mais de um pagamento de uma mesma guia do FDJ nas Unidades Judiciárias.</p>
                <p className={styles.MainText}>II – Deverá acompanhar o requerimento a seguinte documentação:</p>
                <p className={styles.SubText}>a) cópia da identidade, em caso de pedido apresentado por pessoa físíca, e do contrato social com cópia da identidade do sócio-administrador, no caso de pessoa jurídica;</p>
                <p className={styles.SubText}>b) procuração específica para fins de restituição, quando for o caso, no original ou em fotocópia, contendo o número da guia, o valor, o motivo da restituição, a qualificação do outorgante e do outorgado, bem como cópias dos documentos de identificação com foto, devendo apresentar também cópia do documento de identidade do outorgante e outorgado;</p>
                <p className={styles.SubText}>c) via da guia FDJ e os comprovantes de pagamento originais;</p>
                <p className={styles.SubText}>d) demais meios de prova a serem utilizados na demonstração do valor indevido, acompanhados dos documentos que a parte interessada dispuser.</p>
                <p className={styles.MainText}>III – Deverá ainda ser apresentada certidão emitida pela Unidade Judiciária constante na guia, após 30 (trinta) dias a partir da data de pagamento da guia do FDJ, certificando:</p>
                <p className={styles.SubText}>a) inexistência de processos ou de interposição de recursos em nome da parte interessada constante na guia do FDJ;</p>
                <p className={styles.SubText}>b) a guia não foi utilizada nos autos, para os casos em que tenha havido o pagamento de mais de uma guia distinta uma da outra; ou,</p>
                <p className={styles.SubText}>c) de que o valor recolhido em favor do FDJ foi feito indevidamente (multa, honorários, concessão de justiça gratuita).</p>
                <p><span className={styles.MainText}>Observação: </span>Não necessita de certidão da Unidade Judiciária quando houver mais de um pagamento de uma mesma guia do FDJ.</p>
                <p className={styles.MainText}>IV – Nos pedidos de devolução da Taxa de Fiscalização dos serviços relacionados às Serventias Extrajudiciais, deverá ser juntada certidão emitida pelo respectivo Ofício atestando a não realização dos serviços.</p>
                <p>O pedido de ressarcimento deve ser formulado por pessoa física ou jurídica cujo nome constem na guia do FDJ e o ressarcimento será efetuado por meio de depósito na conta corrente indicada pelo requerente.</p>
                <p className={styles.MainText}>Contato</p>
                Departamento de Orçamento e Arrecadação: 3616-6450

            </div>
        </>
    );
}