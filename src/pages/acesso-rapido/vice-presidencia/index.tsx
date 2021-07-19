import Banner from '../../../components/PageMenu/Banner';
import MenuCards from '../../../components/PageMenu/MenuCards';
import styles from './styles.module.scss';

export default function vicePresidencia() {
    return (
        <>
            <Banner title="Vice-Presidência" />
            <div className={styles.CardOptions}>
                {/* <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3"> */}
                    <MenuCards
                        title="Composição"
                        anchor="/acesso-rapido/vice-presidencia/composicao"
                    />

                    <MenuCards
                        title="Consulta aos Temas"
                        anchor="/acesso-rapido/vice-presidencia/consulta-aos-temas"
                    />

                    <MenuCards
                        title="Contato"
                        anchor="/acesso-rapido/vice-presidencia/contato"
                    />

                    <MenuCards
                        title="Equipe NUGEP"
                        anchor="/acesso-rapido/vice-presidencia/nugep"
                    />

                    <MenuCards
                        title="Composição CSI"
                        anchor="/acesso-rapido/vice-presidencia/composicaocsi"
                    />
                {/* </div> */}
            </div>
        </>
    )
}