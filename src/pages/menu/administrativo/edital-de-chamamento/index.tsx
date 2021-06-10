import styles from './styles.module.scss';

import { FiFileText, FiDownload } from 'react-icons/fi'
import Banner from '../../../../components/PageMenu/Banner';
import FileDoc from '../../../../components/File/FileDoc';

export default function arquivos() {
    return (
        <>
            <Banner title="Edital de Chamamento" />
            <div className={styles.Content}>
                <h1><FiFileText /> Arquivos</h1>
               
                <FileDoc
                    title=
                    "Termo de Referência SETIC 2021 0002 - Modelo de proposta e plano de inserção"
                    anchor="/files/edital-de-chamamento/modelo_de_proposta_e_plano_de_inserção.xlsx"
                />

                <FileDoc
                    title=
                    "Termo de Referência SETIC 2021 0002"
                    anchor="/files/edital-de-chamamento/termo_de_referência_setic_2021_0002.pdf"
                />

                <FileDoc
                    title=
                    "Resposta - Impugnação ao Edital nº 002.2020"
                    anchor="/files/edital-de-chamamento/resposta - impugnação ao edital nº 002.2020.pdf"
                />

                <FileDoc
                    title=
                    "EDITAL DE CHAMAMENTO PÚBLICO N° 02/2020– TJ-SAD"
                    anchor="/files/edital-de-chamamento/edital de chamamento - deposito judicial e outros novo.pdf"
                />
            </div>
        </>
    )
}