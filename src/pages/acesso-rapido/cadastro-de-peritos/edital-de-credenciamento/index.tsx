import styles from './styles.module.scss';

import { FiFileText, FiDownload } from 'react-icons/fi'
import { File } from '../../../../components/File';
import Banner from '../../../../components/PageMenu/Banner';

export default function editaldecredenciamento() {
    return (
        <>
            <Banner title="Edital de Credenciamento" />
            <div className={styles.Content}>
                <h1><FiFileText />Documentos</h1>

                <File
                    title=
                    "Resolução Nº 05-TJ, de 28 de fevereiro de 2018"
                    anchor="/files/cadastro-de-peritos/edital-de-credenciamento/resolução_nº_05-tj-2018.pdf"
                />

                <File
                    title=
                    "Resolução Nº 06-TJ, de 28 de fevereiro de 2018"
                    anchor="/files/cadastro-de-peritos/edital-de-credenciamento/resolução_nº_06-tj-2018.pdf"
                />

                <File
                    title=
                    "EDITAL DE CREDENCIAMENTTO Nº 05/2021 TJRN EDITAL DE CREDENCIAMENTTO Nº 05/2021 TJRN"
                    anchor="/files/cadastro-de-peritos/edital-de-credenciamento/edital de credenciamento nº 05-2021-tjrn .pdf"
                />

                <File
                    title=
                    "EDITAL DE CREDENCIAMENTO Nº 01/2018"
                    anchor="/files/cadastro-de-peritos/resolucoes/edital_de_credenciamento_01-2018.pdf"
                    description="O objeto deste Edital é a formação do Cadastro Eletrônico de Peritos e Órgãos Técnicos 
                    ou Científicos (CPTEC) do Poder Judiciário do Estado do Rio Grande do Norte, instituído pelo Código 
                    de Processo Civil, para gerenciamento e escolha de interessados em prestar serviço de perícia ou de 
                    exame técnico em processos judiciais, inclusive, nos casos de beneficiários da justiça gratuita."
                />

                <File
                    title=
                    "EDITAL DE CREDENCIAMENTO Nº 01/2013"
                    anchor="/files/cadastro-de-peritos/resolucoes/edital_de_credenciamento 01-2013.pdf"
                    description="O presente Edital tem por objeto CREDENCIAR pessoas físicas para atuarem como PERITOS, 
                    TRADUTORES e INTÉRPRETES frente ao cadastro geral de profissionais destinados a atender às partes 
                    beneficiadas pela gratuidade processual nos feitos de jurisdição da Justiça Estadual do Rio Grande 
                    do Norte. "
                />

                <File
                    title=
                    "EDITAL DE CREDENCIAMENTO Nº 01/2012"
                    anchor="/files/cadastro-de-peritos/resolucoes/edital de credenciamento 01.2012.pdf"
                    description="
                    O presente Edital tem por objeto CREDENCIAR pessoas físicas para exercerem atividades de PERÍCIA nas
                     áreas médica, contábil, serviço social, psicologia, fonoaudiologia, engenharia, tradução e 
                     intérpretação para o cadastro geral de profissionais, destinados a atender às partes beneficiadas 
                     pela gratuidade processual nos feitos de jurisdição da Justiça Estadual.
                    "
                />

            </div>
        </>
    )
}