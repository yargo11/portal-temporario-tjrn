import Banner from '../../../../components/PageMenu/Banner';
import MenuCards from '../../../../components/PageMenu/MenuCards';
import styles from './styles.module.scss';

export default function consulteseuprocesso() {
    return (
        <>
            <Banner title="Consulte Seu Processo" />
            <div className={styles.CardOptions}>
                <MenuCards
                    title="Consultar precatórios - SAJ"
                    anchor="http://esaj.tjrn.jus.br/cposg/"
                />

                <MenuCards
                    title="Consultar precatórios - SIGPRE"
                    anchor="https://apps.tjrn.jus.br/sigpre/f/public/movimentacaoPAV.xhtml"
                />
            </div>
        </>
    )
}