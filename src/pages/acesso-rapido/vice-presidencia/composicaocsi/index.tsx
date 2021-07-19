import Banner from '../../../../components/PageMenu/Banner'
import styles from './styles.module.scss';



export default function vicepresidenciaComposicaoCSI() {
    return (
        <>
            <Banner title="Vice Presidência - Composição CSI" />
            <div className={styles.ContactOptions}>
                <h1>COMISSÃO DE SEGURANÇA INSTITUCIONAL</h1>
                <p id={styles.pHeader}>
                    Desembargadora MARIA ZENEIDE BEZERRA
                </p>
                <p id={styles.pDescription}>
                    Presidente da CSI
                </p>

                <p id={styles.pHeader}>Juiz João Afonso Morais Pordeus</p>
                <p id={styles.pDescription}>
                    Representante da Presidência do TJRN<br />
                    Suplente: Juiz FÁBIO WELLINGTON ATAÍDE
                </p>

                <p id={styles.pHeader}>Juiz MARIVALDO DANTAS DE ARAÚJO</p>
                <p id={styles.pDescription}>
                    Representante da Corregedoria Geral de Justiça
                </p>

                <p id={styles.pHeader}>Juiz MARIVALDO DANTAS DE ARAÚJO</p>
                <p id={styles.pDescription}>
                    Representante da Corregedoria Geral de Justiça<br />
                    Suplente: Juíza KARYNE CHAGAS DE MENDONÇA BRANDÃO
                </p>

                <p id={styles.pHeader}>Juiz LUIZ CÂNDIDO DE ANDRADE VILLAÇA</p>
                <p id={styles.pDescription}>
                    Representante da AMARN<br />
                    Suplente: Juiz PEDRO PAULO FALCÃO JÚNIOR
                </p>

                <p id={styles.pHeader}>Cel. PM JOSÉ FRANCISCO PEREIRA JÚNIOR</p>
                <p id={styles.pDescription}>
                    Chefe do GSI
                </p>
            </div>
        </>
    )
}