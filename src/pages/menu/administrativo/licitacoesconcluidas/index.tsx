import Banner from '../../../../components/PageMenu/Banner';
import styles from './styles.module.scss';

export default function licitacoesemandamento() {
    return (
        <>
            <Banner title="Administrativo"/>
            <div className={styles.ContentContainer}>
                <a href='http://ww4.tjrn.jus.br/S_Administrativo/licitacaoWeb/licitacaoConcluida.asp' className={styles.Card}>
                    <div><img src='/images/icons/logo-tj.jpg' alt='link para licitações em andamento do TJRN' className={styles.Image}/></div>
                    <div> Licitações <span> concluídas </span> do <span> TJRN </span></div>
                </a>
                <a href='http://ww4.tjrn.jus.br/S_Administrativo/licitacaoEsmarn/licitacaoConcluida.asp' className={styles.Card}>
                    <div><img src='/images/icons/logo-esmarn.jpg' alt='link para licitações em andamento da ESMARN' className={styles.Image}/></div>
                    <div>Licitações <span> concluídas </span> da <span> ESMARN </span></div>
                </a>
            </div>
        </>
    );
}