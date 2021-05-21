import Banner from '../../../components/PageMenu/Banner';
import MenuCards from '../../../components/PageMenu/MenuCards';
import styles from '../styles.module.scss';


export default function administrativo() {
    return (
        <>
            <Banner title="Administrativo"/>
            <div className={styles.CardOptions + ' ' + 'container'}>
                {/* <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3"> */}

                    <MenuCards
                        title="Licitações em andamento"
                        description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                    />

                    <MenuCards
                        title="Licitações concluídas"
                        description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                    />

                    <MenuCards
                        title="Edital de chamamento"
                        description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                    />
                {/* </div> */}
            </div>
        </>
    )
}