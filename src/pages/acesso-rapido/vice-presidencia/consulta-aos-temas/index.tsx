import FilePdf from '../../../../components/File/FilePdf';
import Banner from '../../../../components/PageMenu/Banner';
import styles from './styles.module.scss';

export default function consultaAosTemas() {
    return (
        <>
            <Banner title="Consulta aos Temas" />
            <div className={styles.Content}>

                <FilePdf
                    title="Suspensão em IRDRS"
                    anchor="/files/vice-presidencia/Suspensão em IRDRS.xlsx"
                />

                <FilePdf
                    title="Representante de Controvérsia - RRC"
                    anchor="/files/vice-presidencia/Representante de Controvérsia - RRC.xlsx"
                />

                <FilePdf
                    title="REPERCURSSÃO GERAL - RG"
                    anchor="/files/vice-presidencia/REPERCURSSÃO GERAL - RG.xlsx"
                />

                <FilePdf
                    title="Recurso Repetitivo - RR"
                    anchor="/files/vice-presidencia/Recurso Repetitivo - RR.xlsx"
                />

                <FilePdf
                    title="Incidente de Resolução de Demandas Repetitivas - IRDR"
                    anchor="/files/vice-presidencia/Incidente de Resolução de Demandas Repetitivas - IRDR.xlsx"
                />

                <FilePdf
                    title="Incidente de Assunção de Competência - IAC"
                    anchor="/files/vice-presidencia/Incidente de Assunção de Competência - IAC.xlsx"
                />

                <FilePdf
                    title="CONTROVÉRSIAS - STJ"
                    anchor="/files/vice-presidencia/CONTROVÉRSIAS - STJ.xlsx"
                />

                <FilePdf
                    title="Quantitativo de Processos Sobrestados no âmbito da Justiça Estadual do RN"
                    anchor="/files/vice-presidencia/Quantitativo de Processos Sobrestados no âmbito da Justiça Estadual do RN.pdf"
                />

                <FilePdf
                    title="Suspensão em IRDRS"
                    anchor="/files/vice-presidencia/Suspensão em IRDRS.xlsx"
                />
            </div>
        </>
    )
}