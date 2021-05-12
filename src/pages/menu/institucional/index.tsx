import Banner from '../../../components/PageMenu/Banner';
import MenuCards from '../../../components/PageMenu/MenuCards';
import styles from './styles.module.scss';



export default function institucional() {
    return (
        <>
            <Banner title="Institucional" />
            <div className={styles.CardOptions}>
                <MenuCards
                    title="Dirigentes"
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                />

                <MenuCards
                    title="Composição"
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                />
            </div>
        </>
    )
}