import Banner from '../../../components/PageMenu/Banner';
import MenuCards from '../../../components/PageMenu/MenuCards';
import styles from '../styles.module.scss';



export default function precatorios() {
    return (
        <>
            <Banner title="Precatórios" />
            <div className={styles.CardOptions}>
                <MenuCards
                    title="Consulte seu processo"
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                />

                <MenuCards
                    title="Lista cronológica"
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                />

                <MenuCards
                    title="RPV"
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                />
            </div>
        </>
    )
}