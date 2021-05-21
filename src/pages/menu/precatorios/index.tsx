import Banner from '../../../components/PageMenu/Banner';
import MenuCards from '../../../components/PageMenu/MenuCards';
import styles from '../styles.module.scss';


export default function precatorios() {
    return (
        <>
            <Banner title="Precatórios"/>
            <div className={styles.CardOptions + ' ' + 'container'}>
                {/* <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 "> */}
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
                {/* </div> */}
            </div>
        </>
    )
}