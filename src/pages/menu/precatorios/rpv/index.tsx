import FileDoc from '../../../../components/File/FileDoc';
import FilePdf from '../../../../components/File/FilePdf';
import Banner from '../../../../components/PageMenu/Banner';
import styles from './styles.module.scss';

export default function calendariodesessoes() {
    return (
        <>
            <Banner title="Calendário das Sessões de Julgamento" />
            <div className={styles.Content}>
                <FilePdf
                    title="Relação de Leis RPV RN "
                    description="Relação dos limites de RPV obtidos pela Divisão de Precatórios ao longo dos anos."
                    anchor="/files/rpv/01 - leis municipais rpv - limites de rpv (atualizado em dez 2019).pdf"
                />
                <FilePdf
                    title="Regimento Interno - alterado até ER 28-2019 "
                    anchor="/files/rpv/regimento_interno__-_2008_-_alterado_até_er_28-2019.pdf"
                />
                <FilePdf
                    title="Relação de referências de crédito para calculadora automática "
                    anchor="/files/rpv/relação de referências de crédito para calculadora automática.pdf"
                />
                <FileDoc
                    title="Manual RPV - 2ª edição - Atualizada manual RPV - 2ª edição - Atualizada"
                    description="Manual básico de processamento, cálculo e atualização de Requisições de Pequeno Valor - RPV - 2ª Edição, atualizada."
                    anchor="/files/rpv/manual rpv - 2ª edição - atualizada.docx"
                />
                <FileDoc
                    title="Ofício ao Banco do Brasil pagto inss por gps - modelo"
                    description="Modelo de Ofício a ser encaminhado ao Banco do Brasil solicitando o recohimento de INSS através de GPS"
                    anchor="/files/rpv/oficio bb. pagto inss por gps - modelo.docx"
                />
                <FileDoc
                    title="Modelo Sugestão de Ofício solicitando contas IRRF e Previdencia municípios"
                    description="Manual básico de processamento, cálculo e atualização de Requisições de Pequeno Valor - RPV - 2ª Edição, atualizada."
                    anchor="/files/rpv/of. informação de ir e previdência.docx"
                />
                <FileDoc
                    title="Modelo sugestão de Mandado Requisitório"
                    description="Modelo de sugestão de Mandado ao ente devedor informando para pagar RPV em 60 dias (Juizado) ou 2 meses (CPC)."
                    anchor="/files/rpv/modelo mandado requisitÓrio.doc"
                />
                <FileDoc
                    title="Modelo sugestão Ofício requisitório RPV"
                    description="Modelo de sugestão de ofício ao ente devedor informando para pagar RPV em 60 dias (Juizado) ou 2 meses (CPC)."
                    anchor="/files/rpv/modelo ofÍcio requisitÓrio.doc"
                />
                <FileDoc
                    title="Modelo Sugestão Alvará"
                    description="Modelo de sugestão de alvará para pagamento de RPV."
                    anchor="/files/rpv/modelo alvara.docx"
                />
            </div>
        </>
    )
}