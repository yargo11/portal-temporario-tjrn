import Banner from '../../../components/PageMenu/Banner';
import MenuCards from '../../../components/PageMenu/MenuCards';
import styles from '../styles.module.scss';


export default function institucional() {
    return (
        <>
            <Banner title="Institucional"/>
            <div className={styles.CardOptions + ' ' + 'container'}>
                {/* <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3"> */}
                    <MenuCards
                        title="Dirigentes"
                        description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                        anchor="#"
                    />

                    <MenuCards
                        title="Composição"
                        description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                        anchor="#"
                    />
                {/* </div> */}
            </div>
        </>
    )
}