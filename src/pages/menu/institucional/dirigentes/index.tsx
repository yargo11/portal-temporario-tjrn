import { Cards } from '../../../../components/Cards';
import Banner from '../../../../components/PageMenu/Banner';
import styles from './styles.module.scss';


export default function dirigentes() {
    return (
        <>
            <Banner title="Dirigentes" />
            <div className={styles.CardOptions + ' ' + 'container'}>
                {/* <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3"> */}
                <div className={styles.Dirigentes}>
                    <img src="/images/dirigentes/vivaldopinheiro.jpg" />
                    <p>Des. Vivaldo Pinheiro</p>
                    <p>PRESIDENE</p>
                </div>

                <div className={styles.Dirigentes}>
                    <img src="/images/dirigentes/Maria_Zeneide_Bezerra.png" />
                    <p>Desª. Maria Zeneide Bezerra</p>
                    <p>VICE-PRESIDENE</p>
                </div>

                <div className={styles.Dirigentes}>
                    <img src="/images/dirigentes/Dilermando_Mota.png" />
                    <p>Des. Dilermando Mota</p>
                    <p>CORREGEDOR DE JUSTIÇA</p>
                </div>

                <div className={styles.Dirigentes}>
                    <img src="/images/dirigentes/Amilcar_Maia.png" />
                    <p>Des. Amílcar Maia</p>
                    <p>OUVIDOR GERAL</p>
                </div>
                {/* </div> */}
            </div>
        </>
    )
}