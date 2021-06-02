import styles from './styles.module.scss';

import { FiFileText, FiDownload } from 'react-icons/fi'
import FilePdf from '../../../../components/File/FilePdf';
import Banner from '../../../../components/PageMenu/Banner';


export default function arquivos() {
    return (
        <>
            <Banner title="Resoluções" />
            <div className={styles.Content}>
                <h1><FiFileText />Documentos</h1>

                <FilePdf
                    title=
                    "Resolução Nº 05-TJ, de 28 de fevereiro de 2018 "
                    anchor="/files/cadastro-de-peritos/resolucoes/resolução_nº_05-tj-2018.pdf"
                />

                <FilePdf
                    title=
                    "Resolução Nº 06-TJ, de 28 de fevereiro de 2018 "
                    anchor="/files/cadastro-de-peritos/resolucoes/resolução_nº_06-tj-2018.pdf"
                />

            </div>
        </>
    )
}