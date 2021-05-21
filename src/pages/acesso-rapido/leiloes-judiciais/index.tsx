import styles from './styles.module.scss';

import { FiFileText, FiDownload } from 'react-icons/fi'
import { File } from '../../../components/File';
import Banner from '../../../components/PageMenu/Banner';

export default function leiloesjudiciais() {
    return (
        <>
            <Banner title="Leilões Judiciais" />
            <div className={styles.Content}>
                <h1><FiFileText /> Arquivos</h1>
                
                <File
                    title=
                    "LEILÃO JUDICIAL 31/05/2021 - 1º LEILÃO: 09h e 2º LEILÃO: 11:00h"
                    anchor="/files/leiloes-judiciarios/processo 0014223-84.2004 saj.pdf"
                />
                
                <File
                    title=
                    ""
                    anchor="#"
                />
                
                <File
                    title=
                    ""
                    anchor="#"
                />
                
                <File
                    title=
                    ""
                    anchor="#"
                />
                
                <File
                    title=
                    ""
                    anchor="#"
                />
                
                <File
                    title=
                    ""
                    anchor="#"
                />
                
                <File
                    title=
                    ""
                    anchor="#"
                />
                
                <File
                    title=
                    ""
                    anchor="#"
                />
                
                <File
                    title=
                    ""
                    anchor="#"
                />
                
                <File
                    title=
                    ""
                    anchor="#"
                />
                
                <File
                    title=
                    ""
                    anchor="#"
                />
                
                <File
                    title=
                    ""
                    anchor="#"
                />
                
                <File
                    title=
                    ""
                    anchor="#"
                />
                
                <File
                    title=
                    ""
                    anchor="#"
                />
            </div>
        </>
    )
}