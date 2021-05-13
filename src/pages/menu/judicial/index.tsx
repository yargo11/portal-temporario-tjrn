import Banner from '../../../components/PageMenu/Banner';
import MenuCards from '../../../components/PageMenu/MenuCards';
import styles from '../styles.module.scss';



export default function judicial() {
    return (
        <>
            <Banner title="Judicial" />
            <div className={styles.CardOptions}>
                <MenuCards
                    title="Envio de Memorial"
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                />

                <MenuCards
                    title="Pauta de Julgamento"
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                />

                <MenuCards
                    title="Calendário das Sessões de Julgamento"
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                />

                <MenuCards
                    title="Custas - Tribunais Superiores"
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                />

                <MenuCards
                    title="STF - GRU Cobrança"
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                />

                <MenuCards
                    title="Tabela de Custas"
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                />

                <MenuCards
                    title="Sistema SISCONJD"
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                />

                <MenuCards
                    title="FDJ"
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                    link="/menu/judicial/fdj"
                />

                <MenuCards
                    title="Súmulas"
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                />

                <MenuCards
                    title="Peticionamento CNJ"
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                />

                <MenuCards
                    title="Juizados Especiais"
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                />

                <MenuCards
                    title="Foro da comarca de Natal"
                    description="Habitasse ridiculus aenean sit in a volutpat, faucibus amet ridiculus."
                />
            </div>
        </>
    )
}