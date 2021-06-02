import Banner from '../../components/PageMenu/Banner';
import styles from './styles.module.scss';

import { FiFileText, FiDownload } from 'react-icons/fi'
import FileDoc from '../../components/File/FileDoc';

export default function arquivos() {
    return (
        <>
            <Banner title="Edital de Chamamento" />
            <div className={styles.Content}>
                <h1><FiFileText /> Arquivos</h1>
                {/* <div className={styles.Files}>
                    <div>
                        <p>Termo de Referência SETIC 2021 0002 - Modelo de proposta e plano de inserção </p>
                        <span>DOC</span>
                    </div>
                    <a href="#"><FiDownload /><span>Baixar Arquivo</span></a>
                </div> */}
                <FileDoc
                    title=
                    "Termo de Referência SETIC 2021 0002 - Modelo de proposta e plano de inserção"
                    anchor="#"
                />

                <FileDoc
                    title=
                    "Termo de Referência SETIC 2021 0002"
                    anchor="#"
                />

                <FileDoc
                    title=
                    "Resposta - Impugnação ao Edital nº 002.2020"
                    anchor="#"
                />

                <FileDoc
                    title=
                    "EDITAL DE CHAMAMENTO PÚBLICO N° 02/2020– TJ-SAD"
                    anchor="#"
                />
            </div>
        </>
    )
}