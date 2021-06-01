import styles from './styles.module.scss';

interface documentCardProps {
    documento: {
        link: string;
        titulo: string;
        descricao: string;
    }
}

function documentCard({ documento }: documentCardProps) {
    return (
        <a href={documento.link} className={styles.DocumentCard}>
            <img src={'/images/icons/file_present_black_24dp.svg'} alt={'download de ' + documento.descricao}/>
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
            <div className={styles.Lista}>
                {[documentCard({
                    documento: {link:"#", titulo:"Anexo I", descricao:"Ato Recomendatório Conjunto nº 001-2017"}
                } ),documentCard({
                    documento: {link:"#", titulo:"Anexo II", descricao:"Modelo de Termo de Cooperação Técnica"}
                }),documentCard({
                    documento: {link:"#", titulo:"Anexo III", descricao:"Modelo de Projeto de Lei"}
                }),documentCard({
                    documento: {link:"#", titulo:"Anexo IV", descricao:"Modelo de Decreto"}
                })]}
            </div>
        </div>
    );
}