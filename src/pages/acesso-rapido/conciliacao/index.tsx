
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
                    link="http://conciliacao.tjrn.jus.br/"
                />

                <MenuCards
                    title="Nupemec"
                />

                <MenuCards
                    title="Consumidor.gov.br"
                    link="https://www.consumidor.gov.br/pages/principal/?1590598388479"
                />
            </div>
        </>
    )
}