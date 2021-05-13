import Banner from '../../../components/PageMenu/Banner';
import MenuCards from '../../../components/PageMenu/MenuCards';
import styles from '../styles.module.scss';



export default function administrativo() {
    return (
        <>
            <Banner title="Administrativo" />
            <div className={styles.CardOptions}>
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
            </div>
        </>
    )
}