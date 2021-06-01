import styles from './styles.module.scss';

interface attachmentCardProps {
    documento: {
        link: string;
        titulo: string;
        descricao: string;
    }
}

function documentCard({ documento }: attachmentCardProps) {
    return (
        <a href={documento.link} className={styles.DocumentCard}>
            <img src={'/images/icons/file_present_black_24dp.svg'} alt={'download de ' + documento.descricao}/>
            <div className={styles.Titulo}>{documento.titulo}</div>
            <div>{documento.descricao}</div>
        </a>
    );
}

function attachmentCard({ documento }: attachmentCardProps) {
    return (
        <a href={documento.link} className={styles.DocumentCard}>
            <img src={'/images/icons/file_download_black_18dp.svg'} alt={'download de ' + documento.descricao}/>
            <div className={styles.Titulo}>{documento.titulo}</div>
            <div>{documento.descricao}</div>
        </a>
    );
}

export default function execucaoFiscal() {
    return (
        <div className={styles.ContentContainer}>
            <img src={'/images/icons/menu_book_black_24dp.svg'} alt="download execução fiscal efetiva" className={styles.IconeExecucaoFiscal}/>
            <div className={styles.Titulo}>GESTÃO FISCAL EFETIVA</div>
            <div>Programa de Governança Diferenciada das Execuções Fiscais</div>
            <div className={styles.ListaDeDocumentos}>
                {[documentCard({
                    documento: {link:"/files/execucaofiscal/ANEXO I – Ato Recomendatório Conjunto - 001-2017.docx", titulo:"Anexo I", descricao:"Ato Recomendatório Conjunto nº 001-2017"}
                } ),documentCard({
                    documento: {link:"/files/execucaofiscal/ANEXO II – Modelo de Termo de Cooperação Técnica.docx", titulo:"Anexo II", descricao:"Modelo de Termo de Cooperação Técnica"}
                }),documentCard({
                    documento: {link:"/files/execucaofiscal/ANEXO III - Modelo de Projeto de Lei.docx", titulo:"Anexo III", descricao:"Modelo de Projeto de Lei"}
                }),documentCard({
                    documento: {link:"/files/execucaofiscal/ANEXO IV - Modelo de Decreto.docx", titulo:"Anexo IV", descricao:"Modelo de Decreto"}
                })]}
            </div>
            <div className={styles.ListaDeAnexos}>
                    <div className={styles.Anexo}>
                        <img src={'/images/icons/file_download_black_18dp.svg'} alt='logo plano de comunicação'/>
                        <a href='/files/execucaofiscal/plano-comunicacao-meta-5.pdf'>   
                            <div className={styles.Titulo}>PLANO DE COMUNICAÇÃO</div>
                            <div>META 5 (INICIATIVA 4)</div>
                        </a>
                    </div>

                    <div className={styles.Anexo}>
                        <img src={'/images/icons/file_download_black_18dp.svg'} alt='logo plano de comunicação'/>
                        <div className={styles.Titulo}>META 5 (INICIATIVA 3)</div>
                        <a href='/files/execucaofiscal/iniciativa 3_meta_5.pdf'>   
                            <div>Valores recuperados em ações judiciais de execuções fiscais até 31/12/2017</div>
                        </a>
                        
                        <a href='/files/execucaofiscal/valores-recuperados-janeiro-a-25_outubro_2018.xlsx'>
                            <div>Valores recuperados( Janeiro a Outubro de 2018) </div>
                        </a>
                    </div>

                    <div className={styles.Anexo}>
                        <img src={'/images/icons/file_download_black_18dp.svg'} alt='logo plano de comunicação'/>
                        <a href='/files/execucaofiscal/percentual-meta-5.docx'>   
                            <div className={styles.Titulo}>PERCENTUAL DE CUMPRIMENTO</div>
                            <div>META 5</div>
                        </a>
                    </div>
                </div>
        </div>
    );
}