import styles from './styles.module.scss';

import { FiFileText, FiDownload } from 'react-icons/fi'
import FilePdf from '../../../components/File/FilePdf';
import Banner from '../../../components/PageMenu/Banner';

export default function leiloesjudiciais() {
    return (
        <>
            <Banner title="Leilões Judiciais" />
            <div className={styles.Content}>
                <h1><FiFileText /> Arquivos</h1>

                <FilePdf
                    title=
                    "LEILÃO JUDICIAL 31/05/2021  - nº 014223-84.2004.8.20.0001"
                    anchor="/files/leiloes-judiciarios/processo 0014223-84.2004 saj.pdf"
                    description="1º LEILÃO: 09h e 2º LEILÃO: 11:00h"
                />

                <FilePdf
                    title=
                    "LEILÃO JUDICIAL 31/05/2021  - nº 0105629-74.2013.8.20.0001"
                    anchor="/files/leiloes-judiciarios/editais de leilÃo 31.05.21.pdf"
                    description="1º LEILÃO: 09h e 2º LEILÃO: 11:00h"
                />

                <FilePdf
                    title=
                    "LEILÃO JUDICIAL 30/04/2021 - nº 0005428.89.2004.8.20.0001"
                    anchor="/files/leiloes-judiciarios/edital 0005428.89.2004.pdf"
                    description="1º LEILÃO: 09h e 2º LEILÃO: 11:00h"
                />

                <FilePdf
                    title=
                    "LEILÃO JUDICIAL 30/04/2021 -  nº 0857637-46.2018.8.20.5001"
                    anchor="/files/leiloes-judiciarios/editais leilÃo 30.04.21.pdf"
                    description="1º LEILÃO: 09h e 2º LEILÃO: 11:00h"
                />

                <FilePdf
                    title=
                    "LEILÃO JUDICIAL 06/04/2021 - nº 0815103-53.2019.8.20.5001"
                    anchor="/files/leiloes-judiciarios/editais de leilÃo 06.04.21.pdf"
                    description="1º LEILÃO: 09h e 2º LEILÃO: 11:00h"
                />
            </div>
        </>
    )
}