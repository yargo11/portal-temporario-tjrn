import FilePdf from '../../../../components/File/FilePdf';
import Banner from '../../../../components/PageMenu/Banner';
import styles from './styles.module.scss';

export default function listacronologica() {
    return (
        <>
            <Banner title="Lista Cronológica" />
            <div className={styles.Content}>
                <FilePdf
                    title="Comunicado Interrupção publicação listas"
                    description="Desde setembro de 2019 os pagamentos de precatórios deixaram de ser feitos de forma manual e passaram a ser feitos automaticamente pelo Sistema de Gerenciamento de Precatórios – SIGPRE.
                    Através desse sistema, a medida que os pagamentos são realizados, as listas cronológicas e de superpreferência dos entes devedores são automaticamente atualizadas, não mais necessária a publicação periódica de tais listas.
                    Hoje, o jurisdicionado pode acompanhar diariamente a evolução das listas de precatórios através do site do TJRN, acessando o endereço https://apps.tjrn.jus.br/sigpre/f/public/consultalistaenviodebitos.xhtml .
                    
                    Equipe da Divisão de Precatórios"
                    anchor="/files/lista-cronologica/comunicado publicação listas.pdf"
                />
                <FilePdf
                    title="Ordem de Prioridades"
                    anchor="/files/lista-cronologica/ordemdeprioridades-pororcamento.pdf"
                />
                <FilePdf
                    title="ORDEM DE RPVs"
                    anchor="/files/lista-cronologica/ordemrpvs-geral.pdf"
                />
            </div>
        </>
    )
}