
import Banner from '../../../components/PageMenu/Banner';
import MenuCards from '../../../components/PageMenu/MenuCards';
import styles from './styles.module.scss';



export default function conciliacao() {
    return (
        <>
            <Banner title="Conciliação" />
            <div className={styles.CardOptions}>
                <MenuCards
                    title="Agende sua conciliação"
                    anchor="http://conciliacao.tjrn.jus.br/"
                />

                <MenuCards
                    title="Nupemec"
                />

                <MenuCards
                    title="Consumidor.gov.br"
                    anchor="https://www.consumidor.gov.br/pages/principal/?1590598388479"
                />
            </div>
        </>
    )
}